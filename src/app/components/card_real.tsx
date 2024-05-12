import Button from '@/app/components/button';

interface CardProps {
  url: string;
}

export default function CardReal({ url }: CardProps) {
  return (
    <div className='group flex size-full flex-col gap-10 rounded-xl bg-slate-50 p-10 drop-shadow-xl transition-all hover:scale-105 dark:bg-neutral-800'>
      <div className='group-hover:gradText flex flex-row items-center gap-3 transition-all group-hover:text-blue-500 '>
        <svg
          height='32'
          viewBox='0 0 511.95 511.95'
          width='32'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
        >
          <path
            id='XMLID_113_'
            d='m447.975 167.95h-245.682l248.796-92.322c5.178-1.921 7.818-7.677 5.896-12.854l-20.873-56.253c-.923-2.486-2.795-4.504-5.206-5.61s-5.162-1.208-7.648-.286l-297.498 110.394c-5.62-1.98-11.657-3.069-17.946-3.069h-43.839c-5.523 0-10 4.477-10 10v207c0 5.523 4.477 10 10 10s10-4.477 10-10v-77h364v214c0 16.542-13.458 30-30 30h-304c-16.542 0-30-13.458-30-30v-47c0-5.523-4.477-10-10-10s-10 4.477-10 10v47c0 27.57 22.43 50 50 50h304c27.57 0 50-22.43 50-50v-284c0-5.523-4.477-10-10-10zm-152.108 60 40-40h52.966l-40 40zm-81.251 0 40-40h52.966l-40 40zm-52.641 0v-40h64.355l-40 40zm16.799-115.27 49.162 24.422-65.974 24.482c-.138-14.366-5.898-27.404-15.181-37.031zm73.921-27.431 49.162 24.422-48.188 17.882-49.162-24.422zm73.921-27.43 49.162 24.422-48.188 17.882-49.163-24.422zm108.14 2.537-33.244 12.336-49.163-24.422 68.491-25.415zm-360.781 167.594v-100h33.839c18.836 0 34.161 15.324 34.161 34.161v65.839zm303.143 0 40-40h20.857v40z'
          />
          <path
            id='XMLID_1147_'
            d='m107.975 167.955c-2.63 0-5.21 1.06-7.07 2.92-1.86 1.87-2.93 4.44-2.93 7.08 0 2.63 1.07 5.2 2.93 7.07 1.86 1.86 4.44 2.92 7.07 2.92s5.21-1.06 7.07-2.92c1.86-1.87 2.93-4.44 2.93-7.07 0-2.64-1.07-5.21-2.93-7.08-1.86-1.86-4.44-2.92-7.07-2.92z'
          />
          <path
            id='XMLID_1330_'
            d='m129.102 329.948h253.746c5.523 0 10-4.477 10-10s-4.477-10-10-10h-253.746c-5.523 0-10 4.477-10 10s4.477 10 10 10z'
          />
          <path
            id='XMLID_1331_'
            d='m129.102 393.948h44.873v54c0 5.523 4.477 10 10 10s10-4.477 10-10v-54h124v54c0 5.523 4.477 10 10 10s10-4.477 10-10v-54h44.873c5.523 0 10-4.477 10-10s-4.477-10-10-10h-253.746c-5.523 0-10 4.477-10 10s4.477 10 10 10z'
          />
          <path
            id='XMLID_1471_'
            d='m63.975 379.955c2.63 0 5.21-1.07 7.07-2.93s2.93-4.44 2.93-7.07c0-2.64-1.07-5.21-2.93-7.08-1.86-1.86-4.44-2.92-7.07-2.92s-5.21 1.06-7.07 2.92c-1.86 1.87-2.93 4.44-2.93 7.08 0 2.63 1.07 5.21 2.93 7.07s4.44 2.93 7.07 2.93z'
          />
        </svg>
        <h1 className='text-4xl'>Réalisation</h1>
      </div>

      <p>
        Concrétisez votre vision avec mes services de réalisation. Du concept à
        l'écran, je donne vie à vos idées, apportant créativité et expertise.
        Chaque projet devient une expérience visuelle immersive et mémorable.
      </p>
      <Button
        url={url}
        primary
        aria='Réaliser ma vidéo'
        txt='Réaliser ma vidéo'
      />
    </div>
  );
}
