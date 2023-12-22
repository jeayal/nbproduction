'use client';

import * as React from 'react';

import BlockHomepage from '@/app/components/block';
import CardRow from '@/app/components/card';
// import VimeoVideos from '@/app/components/vimeoportfolio';
import VideoCard from '@/app/components/videoCard';
import Contact from '@/app/contactComponent';

import LabTabs from './components/tabs';

export default function HomePage() {
  return (
    <div className='transition-all ease-in-out '>
      <header className='relative mb-12 flex h-screen items-center overflow-hidden'>
        <div className='layout relative z-20 flex flex-row text-white md:flex-col'>
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
          autoPlay
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
          className='mb-10 flex min-h-screen w-full flex-col items-center justify-center py-6 align-middle md:mb-0 md:py-0'
        >
          <h1 className='layout mb-10 px-4 text-4xl md:text-6xl'>
            Join the club.
          </h1>
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
      </section>
      <section>
        <div
          id='services'
          className='w-full items-center justify-center bg-slate-100 py-16 align-middle dark:bg-neutral-900'
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
        className='layout relative flex flex-col items-center justify-center align-middle'
      >
        <BlockHomepage
          isBig
          title='Mes dernières vidéos'
          subTitle='Découvrez mon travail à travers quelques vidéos que j ai pu réaliser'
          innerComponent={
            <div className='layout m-auto flex w-full flex-col gap-6 sm:flex-row'>
              <VideoCard
                src='/images/mariages-01.jpg'
                title="Triathlon du lac d'Issarlès"
                txt="Teaser réalisé pour la promotion d'un nouveau triathlon en 2024"
              />
              <VideoCard
                src='/images/mariages-01.jpg'
                title='Demo Nicolas Blanc
                '
                txt='Vidéo promotionnelle pour Nicolas Blanc Production'
              />
              <VideoCard
                src='/images/mariages-01.jpg'
                title='Publicité Clio Trophy Swiss
                '
                txt="Création d'une publicité pour un trophée automobile Renault"
              />
            </div>
          }
        />
      </section>
      {/* <VimeoVideos /> */}

      {/* CONTACT */}

      <section
        id='contact'
        className='layout justify-cente flex min-h-screen  w-full flex-col items-center gap-10 md:flex-row md:gap-24'
      >
        <div className='layout flex flex-col  px-2 md:w-1/2'>
          <h1 className='text-4xl font-bold md:text-6xl'>
            Discutons ensemble de votre projet !
          </h1>
          <p className='mt-4 text-sm font-normal md:mt-6'>
            Remplissez ce petit formulaire pour connaitre vos besoins. Vous
            pouvez également me contacter sur les réseaux sociaux.
          </p>
          <div
            id='svg'
            className='flex flex-row items-center space-x-8 md:my-6'
          >
            <a href='#' className='hidden lg:block'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-facebook text-blue-500 dark:text-gray-50'
                viewBox='0 0 16 16'
              >
                <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
              </svg>
            </a>
            <a href='#' className='hidden lg:block'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-twitter text-blue-500 dark:text-gray-50'
                viewBox='0 0 16 16'
              >
                <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
              </svg>
            </a>
            <a href='#' className='hidden lg:block'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-instagram text-blue-500 dark:text-gray-50'
                viewBox='0 0 16 16'
              >
                <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z' />
              </svg>
            </a>
            <a href='#' className='hidden lg:block'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-linkedin text-blue-500 dark:text-gray-50'
                viewBox='0 0 16 16'
              >
                <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
              </svg>
            </a>
            <a href='#' className='hidden lg:block'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-globe text-blue-500 dark:text-gray-50'
                viewBox='0 0 16 16'
              >
                <path d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z' />
              </svg>
            </a>
          </div>
        </div>
        <div className='layout mb-10 flex md:w-1/2'>
          <Contact />
        </div>
      </section>
    </div>
  );
}
