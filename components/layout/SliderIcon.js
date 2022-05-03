import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useHotkeys } from '@mantine/hooks';

const SliderIcon = ({ movie }) => {
  const [isOpen, setIsOpen] = useState(false);

  useHotkeys([['Escape', () => setIsOpen(false)]]);

  return (
    <>
      <div
        className="relative h-28 md:h-36 min-w-[180px] cursor-pointer md:min-w-[260px] transition duration-300 ease-in-out md:hover:scale-105"
        onClick={() => setIsOpen(true)}
      >
        <Image
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          className={`rounded-sm object-cover md:rounded`}
          layout="fill"
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.2, delay: 0.15 }}
              style={{ pointerEvents: 'auto' }}
              className="preview-overlay"
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SliderIcon;
