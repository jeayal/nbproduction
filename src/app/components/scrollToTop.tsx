import { useEffect, useState } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='hidden transition-all delay-150 duration-300 ease-in-out sm:flex'>
      <button
        type='button'
        onClick={scrollToTop}
        className={
          isVisible ? 'text-neutral-400 dark:text-neutral-200' : 'hidden'
        }
      >
        <BiArrowFromBottom
          className='mt-2 h-5 w-5 md:mt-4 md:h-10 md:w-10'
          aria-hidden='true'
        />
      </button>
    </div>
  );
};

export default ScrollToTop;
