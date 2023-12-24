import Image from 'next/image';
import { useEffect, useState } from 'react';

import styles from './Tabs.module.css';

export default function Testimonials() {
  const testimonials = [
    {
      avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
      name: 'Martin escobar',
      title: 'Founder of meta',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
      name: 'Angela stian',
      title: 'Product designer',
      quote:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, that the point of using Lorem Ipsum.',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
      name: 'Karim ahmed',
      title: 'DevOp engineer',
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
          <h3 className='mb-6 text-4xl font-bold md:text-6xl'>
            Les
            <span className='bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent'>
              &nbsp;avis&nbsp;
            </span>
            de mes clients
          </h3>
          <ul>
            {testimonials.map((item, idx) =>
              currentTestimonial == idx ? (
                <li key={idx} className={`${styles.slideIn}`}>
                  <figure>
                    <blockquote>
                      <p className='px-6 text-xl sm:text-2xl'>“{item.quote}“</p>
                    </blockquote>
                    <div className='mt-6'>
                      <Image
                        src='/images/logo-nbp.png'
                        alt='Alt'
                        width={50}
                        height={50}
                        className='mx-auto'
                      />
                      {/* <img
                        src={item.avatar}
                        className='mx-auto h-16 w-16 rounded-full'
                      /> */}
                      <div className='mt-3'>
                        <span className='block font-semibold text-gray-800'>
                          {item.name}
                        </span>
                        <span className='mt-0.5 block text-sm text-gray-600'>
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </figure>
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
