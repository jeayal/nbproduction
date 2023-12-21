'use client';

import * as React from 'react';

import BlockHomepage from '@/app/components/block';
import CardRow from '@/app/components/card';
import VimeoVideos from '@/app/components/vimeoportfolio';
import ContactUs from '@/app/contactUs';

// import Contact from '@/app/contact';
import LabTabs from './components/tabs';

export default function HomePage() {
  return (
    <div className='transition-all ease-in-out '>
      <header className='relative mb-12 flex h-screen items-center overflow-hidden'>
        <div className='layout relative z-20 flex flex-row text-white md:flex-col'>
          <div className=' w-3/4'>
            <h1 className='mb-4 sm:text-5xl md:text-6xl lg:text-8xl'>
              Une
              <span className='bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent'>
                &nbsp;vidéo&nbsp;
              </span>
              pour sublimer votre image de marque.
            </h1>
            <p className='text-2xl'>
              La vidéo est l’un des moyens les plus efficaces pour communiquer.
              N’attendez plus pour briller sur les réseaux sociaux !
            </p>
          </div>
          <div className=' flex flex-auto items-center justify-end gap-10 align-middle text-2xl uppercase sm:hidden md:w-full md:flex-row lg:w-1/2'>
            <ul>
              <li>mariages</li>
              <li>évènement</li>
              <li>sport</li>
              <li>prublicité</li>
              <li>entreprise</li>
            </ul>
          </div>
        </div>
        <video
          autoPlay={true}
          loop
          muted
          className='absolute z-10 min-h-full w-auto min-w-full max-w-none'
        >
          <source
            src='https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4'
            type='video/mp4'
          />
          Votre navigateur ne supporte pas l'utilisation de vidéo ici.
        </video>
      </header>
      <section>
        <div
          id='join-the-club'
          className='flex min-h-screen w-full flex-col justify-center'
        >
          <h1 className='layout mb-10 text-6xl'>Join the club.</h1>
          <CardRow
            rowInverse={true}
            bgColor='bg-slate-100 dark:bg-neutral-800'
            title="Bonjour, moi c'est Nicolas"
            imgSrc='/images/nicolas-blanc-production.jpg'
            imgAlt='NBProductions, votre vidéaste professionnel à portée de clic.'
            innerText='La vidéo est l’un des moyens les plus efficaces pour
          communiquer. Elle donne une image sérieuse et met en avant votre
          entreprise pour vos clients actuels et futurs.
          Cest également un excellent moyen pour garder un souvenir de
          vos événements marquants. Je vous propose donc de créer des
          vidéos qui correspondront à vos envies et vos besoins.'
          />
        </div>
        <div
          id='services'
          className='h-full min-h-screen w-full bg-slate-100 py-20 dark:bg-neutral-900'
        >
          <h1 className='mb-10 items-center justify-center text-center text-6xl'>
            Une
            <span className='bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent'>
              &nbsp;vidéo&nbsp;
            </span>
            pour <br />
            chacun de vos <span className='bg-blue box-content'>besoins</span>.
          </h1>
          {/* TABS */}

          <LabTabs />

          {/* END OF TABS */}
        </div>
      </section>
      <section
        id='portfolio'
        className='flex h-full min-h-screen w-full flex-col justify-center'
      >
        <BlockHomepage
          isBig
          title='Mes dernières vidéos'
          subTitle='Découvrez mon travail à travers quelques vidéos que j ai pu réaliser'
          innerComponent={<VimeoVideos />}
        />
      </section>
      <section
        id='portfolio'
        className='flex h-full min-h-screen w-full flex-col justify-center'
      >
        <ContactUs />
      </section>
    </div>
  );
}
