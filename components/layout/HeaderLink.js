import Link from 'next/link';
import { useEffect, useState } from 'react';
import { setActiveItem } from 'store/reducers/header';
import { find } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const HeaderLink = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { activeItem } = useSelector((state) => state.header);
  const [links] = useState([
    { link: '/browse', label: 'Home' },
    { link: '/browse/tv-shows', label: 'TV Shows' },
    { link: '/browse/movies', label: 'Movies' },
    { link: '/browse/latest', label: 'New & Popular' },
    { link: '/browse/my-list', label: 'My List' },
  ]);

  useEffect(() => {
    dispatch(
      setActiveItem(find(links, { link: router.pathname })?.label || null)
    );
  }, [router, dispatch, links]);

  return (
    <ul className="hidden space-x-[20px] md:flex">
      {links.map(({ link, label }) => (
        <Link href={link} passHref key={label}>
          <li
            onClick={() => dispatch(setActiveItem(label))}
            className={`header-link ${
              activeItem === label &&
              'cursor-default font-semibold text-white hover:text-white'
            }`}
          >
            {label}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default HeaderLink;
