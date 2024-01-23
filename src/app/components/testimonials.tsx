import Image from 'next/image';
import { useEffect, useState } from 'react';

import styles from './Tabs.module.css';

export default function Testimonials() {
  const testimonials = [
    {
      avatar: '/images/avis/client-01.jpg',
      name: 'Hakim Boukovlov',
      title: 'CEO @WoW-KEK',
      picture: '/images/avis/avis-02.jpg',
      quote:
        "J'ai adoré travailler avec Nicolas, des super vidéos et un rendu exceptionnel ! Je le recontacterai rapidemenet",
    },
    {
      avatar: '/images/avis/client-02.jpg',
      name: 'Rocco',
      title: 'Agence Les Dix Yeux',
      picture: '/images/avis/avis-02.jpg',

      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo.',
    },
    {
      avatar: '/images/avis/client-03.jpg',
      name: 'Mitch',
      title: 'Founder @Mardi à quelle heure ?',
      picture: '/images/avis/avis-03.jpg',

      quote:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati ',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the currentTestimonial index or reset to 0 if it reaches the end
      setCurrentTestimonial(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 5000);

    return () => {
      // Cleanup the interval when the component is unmounted
      clearInterval(intervalId);
    };
  }, [currentTestimonial, testimonials.length]);

  return (
    <div className='py-14'>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='mx-auto max-w-3xl text-center'>
          <h1 className='mb-10 text-4xl md:text-6xl'>
            Les
            <span className='bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent'>
              &nbsp;avis&nbsp;
            </span>
            de mes clients
          </h1>
          <ul>
            {testimonials.map((item, idx) =>
              currentTestimonial == idx ? (
                <li key={idx} className={`${styles.slideIn}`}>
                  <div>
                    <div className='m-auto flex flex-col overflow-hidden rounded-xl bg-neutral-100 drop-shadow-xl md:flex-row dark:bg-neutral-800'>
                      <div className='m-auto flex w-full flex-col gap-6 p-12'>
                        <svg
                          width='64'
                          height='59'
                          viewBox='0 0 64 59'
                          fill='none'
                          className='opacity-30'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M25.6098 58.5V30.6744H13.7143C13.7143 26.2175 14.5554 22.4834 16.2376 19.472C17.9198 16.3401 21.0439 13.9912 25.6098 12.4252V0.5C21.885 0.981829 18.4004 2.12617 15.1562 3.93302C12.0321 5.61942 9.32855 7.78764 7.04557 10.4377C4.76259 13.0877 2.96023 16.1594 1.6385 19.6526C0.436935 23.1459 -0.103772 26.8801 0.016385 30.8551V58.5H25.6098ZM64 58.5V30.6744H52.1045C52.1045 26.2175 52.9456 22.4834 54.6278 19.472C56.3099 16.3401 59.434 13.9912 64 12.4252V0.5C60.2751 0.981829 56.7906 2.12617 53.5463 3.93302C50.4223 5.61942 47.7187 7.78764 45.4357 10.4377C43.1528 13.0877 41.3504 16.1594 40.0287 19.6526C38.8271 23.1459 38.2864 26.8801 38.4066 30.8551V58.5H64Z'
                            fill='currentColor'
                          />
                        </svg>

                        <p className='text-left text-xl font-bold sm:text-xl'>
                          “{item.quote}“
                        </p>
                        <div className=' flex flex-row items-start gap-6'>
                          <Image
                            src={item.avatar}
                            alt='Client qui a donné son avis'
                            width={64}
                            height={64}
                            className=' rounded-full object-cover'
                          />

                          <div className='flex flex-col items-start justify-center'>
                            <p className='text-2xl font-bold'>{item.name}</p>
                            <p className=' text-sm'>{item.title}</p>
                          </div>
                        </div>
                      </div>
                      <Image
                        src={item.picture}
                        alt='Client qui a donné son avis'
                        width={350}
                        height={350}
                        className='object-cover'
                      />
                    </div>
                  </div>
                </li>
              ) : (
                ''
              )
            )}
          </ul>
        </div>
        <div className='mt-6'>
          <ul className='flex justify-center gap-x-3'>
            {testimonials.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`h-2.5 w-2.5 rounded-full  ring-offset-2 duration-150 focus:ring ${
                    currentTestimonial == idx
                      ? 'bg-gradient-to-r from-blue-500 to-sky-400'
                      : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(idx)}
                  aria-label={`${
                    currentTestimonial == idx
                      ? 'Témoignagne client actuel'
                      : 'Parcourir les témoignages clients'
                  }`}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
