'use client';

import * as React from 'react';

import BlockHomepage from '@/app/components/block';
import CardRowBig from '@/app/components/cardBig';
import Socials from '@/app/components/socials';
import Testimonials from '@/app/components/testimonials';
import TrustedLogos from '@/app/components/trustedBy';
// import VimeoVideos from '@/app/components/vimeoportfolio';
import VideoCard from '@/app/components/videoCardv2';
import Contact from '@/app/contactComponent';

import LabTabs from './components/tabs';

export default function HomePage() {
  return (
    <div className='transition-all ease-in-out '>
      <header className='relative mb-12 flex h-screen items-center overflow-hidden'>
        <div className='layout relative z-[15] flex flex-row text-white md:flex-col'>
          <div className='md:w-3/4'>
            <h1 className='mb-4 text-[4em] leading-none md:text-[5em] '>
              Une
              <span className='bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent'>
                &nbsp;vidéo&nbsp;
              </span>
              <br />
              pour sublimer votre image de marque.
            </h1>
            <p className='text-[1.5em] leading-7'>
              La vidéo est l’un des moyens les plus efficaces pour communiquer.
              N’attendez plus pour briller sur les réseaux sociaux !
            </p>
          </div>
        </div>
        <video
          loop
          muted
          autoPlay
          playsInline
          webkit-playsinline='true'
          className='absolute z-10 min-h-full w-auto min-w-full max-w-none'
        >
          <source
            src='/videos/header-nicolas-blanc-production-video.webm'
            type='video/webm'
          />
          <source
            src='/videos/header-nicolas-blanc-production-video.mp4'
            type='video/mp4'
          />
          Votre navigateur ne supporte pas l'utilisation de vidéo ici.
        </video>
      </header>
      <section>
        <div
          id='join-the-club'
          className='mb-10 flex min-h-screen w-full flex-col items-center justify-center py-6 align-middle md:mb-0 md:py-0'
        >
          <h1 className='layout mb-10 px-4 text-4xl md:text-6xl'>
            Join the club.
          </h1>
          <CardRowBig
            rowInverse={true}
            bgColor='bg-slate-100 dark:bg-neutral-800'
            title='Une vidéo de qualité professionnelle à portée de main !'
            imgSrc='/images/nicolas-blanc-production.jpg'
            imgAlt='NBProductions, votre vidéaste professionnel à portée de clic.'
            innerText='La vidéo est l’un des moyens les plus efficaces pour
          communiquer. Elle donne une image sérieuse et met en avant votre
          entreprise pour vos clients actuels et futurs.
          Cest également un excellent moyen pour garder un souvenir de
          vos événements marquants. Je vous propose donc de créer des
          vidéos qui correspondront à vos envies et vos besoins.'
          />

          <CardRowBig
            rowInverse={false}
            stroke
            bt
            bgColor='bg-slate-100 dark:bg-neutral-800'
            title='Découvrez comment faire grandir votre marque grâce à la vidéo.'
            imgSrc='/images/video-professionnelle-nicolas-blanc.avif'
            imgAlt='NBProductions, votre vidéaste professionnel à portée de clic.'
            innerText='La vidéo est l’un des moyens les plus efficaces pour
          communiquer. Elle donne une image sérieuse et met en avant votre
          entreprise pour vos clients actuels et futurs.
          Cest également un excellent moyen pour garder un souvenir de
          vos événements marquants. Je vous propose donc de créer des
          vidéos qui correspondront à vos envies et vos besoins.'
          />
        </div>
      </section>
      <section className='my-20'>
        <TrustedLogos />
      </section>
      <section>
        <div
          id='services'
          className='h-full w-full items-center justify-center bg-slate-100 py-32 align-middle dark:bg-neutral-900'
        >
          <h1 className='mb-10 items-center justify-center px-4 text-center text-4xl md:text-6xl'>
            Une
            <span className='bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent'>
              &nbsp;vidéo&nbsp;
            </span>
            pour <br />
            chacun de vos <span className='bg-blue box-content'>besoins</span>.
          </h1>

          <LabTabs />
        </div>
      </section>
      <section
        id='portfolio'
        className='layout relative flex flex-col items-center justify-center align-middle md:pt-16'
      >
        <BlockHomepage
          isBig
          title='Mes dernières vidéos'
          subTitle="Découvrez mon travail à travers quelques vidéos que j'ai pu réaliser"
          innerComponent={
            <div className='layout m-auto flex w-full flex-col gap-6 sm:flex-row'>
              <VideoCard
                src='/images/triathlon.jpg'
                url='https://player.vimeo.com/video/870214438?h=4be2a58690&autoplay=1&title=0&byline=0&portrait=0'
                alt="Triathlon du lac d'Issarlès"
                title="Triathlon du lac d'Issarlès"
                txt="Teaser réalisé pour la promotion d'un nouveau triathlon en 2024"
              />
              <VideoCard
                src='/images/swiss-trophy.jpg'
                url='https://player.vimeo.com/video/800797995?h=adc4eef2d3&autoplay=1&title=0&byline=0&portrait=0'
                alt='Publicité Clio Trophy Swiss'
                title='Publicité Clio Trophy Swiss
                '
                txt="Création d'une publicité pour un trophée automobile Renault"
              />
              <VideoCard
                src='/images/demo.jpg'
                url='https://player.vimeo.com/video/883981611?h=574bbb9db7&autoplay=1&title=0&byline=0&portrait=0' // ! url exemple: 'https://player.vimeo.com/video/870214438?h=4be2a58690&autoplay=1&title=0&byline=0&portrait=0' => il faut ces tokens Vimeo
                alt='Demo Nicolas Blanc Production'
                title='Demo Nicolas Blanc'
                txt='Vidéo promotionnelle pour Nicolas Blanc Production'
              />
            </div>
          }
        />
      </section>
      {/* <VimeoVideos /> */}
      <section>
        <Testimonials />
      </section>

      {/* CONTACT */}

      <section
        id='contact'
        className='layout flex min-h-screen w-full  flex-col items-center justify-center gap-10 md:flex-row md:gap-24'
      >
        <div className='layout flex flex-col   px-2 md:w-1/2'>
          <h1 className='text-4xl font-bold md:text-6xl'>
            Discutons ensemble de votre
            <span className='bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent'>
              &nbsp;projet&nbsp;
            </span>
            !
          </h1>
          <p className='mb-8 mt-4 text-sm font-normal md:mt-6'>
            Remplissez ce petit formulaire pour connaitre vos besoins. Vous
            pouvez également me contacter sur les réseaux sociaux.
          </p>
          <Socials yt tw vi fb lk ig size='24px' />
        </div>
        <div className='layout mb-10 flex md:w-1/2'>
          <Contact />
        </div>
      </section>
    </div>
  );
}
