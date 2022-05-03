import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBannerMovie } from 'store/reducers/movie';
import { InfoCircle, PlayerPlay } from 'tabler-icons-react';

const Banner = ({ netflixOriginals }) => {
  const { bannerMovie } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setBannerMovie(
        netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
      )
    );
  }, [dispatch, netflixOriginals]);

  return (
    <div className="flex flex-col pl-4 lg:pl-16 space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          alt={bannerMovie.title}
          layout="fill"
          src={`https://image.tmdb.org/t/p/original${
            bannerMovie.backdrop_path || bannerMovie.poster_path
          }`}
          objectFit="cover"
        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {bannerMovie?.title || bannerMovie?.name || bannerMovie?.original_name}
      </h1>
      <p className="overview-paragraph">{bannerMovie?.overview}</p>
      <div className="flex space-x-3">
        <button className="banner-button bg-white text-black">
          <PlayerPlay className="h-4 w-4 text-black md:h-7 md:w-7 fill-black" />
          Play
        </button>

        <button
          className="banner-button bg-[gray]/70"
          onClick={() => console.log('hello')}
        >
          <InfoCircle className="h-5 w-5 md:h-8 md:w-8" /> More Info
        </button>
      </div>
    </div>
  );
};

export default Banner;
