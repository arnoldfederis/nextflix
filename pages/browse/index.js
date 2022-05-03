import Head from 'next/head';
import { getMovies } from 'request/movie';
import Banner from 'components/layout/Banner';
import Slider from 'components/layout/Slider';

const Index = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
}) => {
  return (
    <div
      className={`relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]`}
    >
      <Head>
        <title>Home - Nextflix</title>
      </Head>

      <main className="relative pb-24 lg:space-y-24">
        <Banner netflixOriginals={netflixOriginals} />

        <section>
          <Slider title="Trending Now" movies={trendingNow} />
          <Slider title="Top Rated" movies={topRated} />
          <Slider title="Action Thrillers" movies={actionMovies} />
          <Slider title="Comedies" movies={comedyMovies} />
          <Slider title="Scary Movies" movies={horrorMovies} />
          <Slider title="Romance Movies" movies={romanceMovies} />
          <Slider title="Documentaries" movies={documentaries} />
        </section>
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    getMovies('netflix-originals'),
    getMovies('trending'),
    getMovies('top-rated'),
    getMovies('action'),
    getMovies('comedy'),
    getMovies('horror'),
    getMovies('romance'),
    getMovies('documentary'),
  ]);

  return {
    props: {
      netflixOriginals,
      trendingNow,
      topRated,
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentaries,
    },
  };
};

export default Index;
