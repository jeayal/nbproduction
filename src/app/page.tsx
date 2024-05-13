import Image from 'next/image';
import * as React from 'react';

import Button from '@/app/components/button';
import CardMontage from '@/app/components/card_montage';
import CardReal from '@/app/components/card_real';
import CardTournage from '@/app/components/card_tournage';
import CardRowBig from '@/app/components/cardBig';
import Socials from '@/app/components/socials';
import Testimonials from '@/app/components/testimonials';
import TrustedLogos from '@/app/components/trustedBy';
import VideoCard from '@/app/components/videoCardv3';
import ContactGmail from '@/app/contactComponent_v2';

import LabTabs from './components/tabs';

export default function HomePage() {
  return (
    <div>
      <header className='relative flex h-screen items-center overflow-hidden'>
        <div data-aos='fade-up' className='layout z-20 flex  flex-col gap-4 '>
          <h1 className='text-balance text-5xl text-white drop-shadow-xl md:mb-4 lg:text-[4.5dvw] lg:leading-none'>
            Une
            <span className='gradText'>&nbsp;vidéo&nbsp;</span>
            pour sublimer votre image de marque.
          </h1>
          <p className='text-xl text-white  drop-shadow-lg lg:text-[1dvw] lg:leading-[1.3dvw]'>
            La vidéo est l’un des moyens les plus efficaces pour communiquer.
            <br />
            N’attendez plus pour briller sur les réseaux sociaux !
          </p>
        </div>
        <video
          loop
          muted
          autoPlay
          playsInline
          webkit-playsinline='true'
          className='absolute z-10 min-h-full w-auto min-w-full max-w-none opacity-75'
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
      <section className='my-10 md:my-24'>
        <div
          id='join-the-club'
          className='flex w-full scroll-mt-[150px] flex-col items-center justify-center text-center align-middle  '
        >
          <h1 className='text-center text-4xl  md:text-6xl'>
            Rejoignez le <span className='gradText'>club.</span>
          </h1>
          <div data-aos='fade-up' className='w-full'>
            <CardRowBig
              rowInverse={true}
              bgColor='bg-slate-100 dark:bg-neutral-800'
              title={
                <>
                  Une vidéo de{' '}
                  <span className='gradText'>qualité professionnelle</span> à
                  portée de main !
                </>
              }
              imgSrc='/images/nicolas-blanc-production.jpg'
              imgAlt='NBProductions, votre vidéaste professionnel à portée de clic.'
              innerText={
                <div>
                  <p>
                    La <strong>vidéo</strong> est l’un des moyens les plus
                    efficaces pour communiquer sur les réseaux sociaux.
                  </p>
                  <p className='mt-4'>
                    Que vous soyez basé à{' '}
                    <strong>Lyon, Chambéry, ou Annecy</strong>, n’attendez plus
                    pour briller en mettant en œuvre une{' '}
                    <strong>stratégie vidéo optimisée</strong> pour votre région
                    !
                  </p>
                </div>
              }
            />
          </div>
          <div className='layout my-10 flex flex-col gap-10 text-left md:my-24 md:flex-row'>
            <Image
              src='/images/nicolas-blanc-production-video-realisation-montage.jpg'
              width={450}
              height={450}
              alt='Découvrez comment faire grandir votre marque grâce à la vidéo.'
              className='rounded-lg object-cover'
            />
            <div className='flex flex-col gap-10 '>
              <h1>
                Découvrez comment faire grandir{' '}
                <span className='gradText'>votre marque</span> grâce à la vidéo.
              </h1>
              <p>
                Les vidéos font aujourd'hui partie intégrante de l'environnment
                digital. Résaux sociaux, sites web, publicité, télévision...
                Tous ces leviers de communications sont cruciaux au
                développement d'une marque. Profitez dès maintenant d'un panel
                de vidéos professionnelles et sur-mesure en me contactant
                ci-dessous.
              </p>
              <div className='flex w-full flex-col gap-6 md:flex-row'>
                <Button
                  url='/#'
                  txt='Contactez-moi'
                  aria='Contactez-moi'
                  primary={false}
                />
                <Button
                  url='/#'
                  txt='Réaliser un devis'
                  aria='Réaliser un devis'
                  primary={true}
                />
              </div>
              <Image
                src='/images/nicolas-blanc-production-video-france.jpg'
                width={450}
                height={450}
                alt='Découvrez comment faire grandir votre marque grâce à la vidéo.'
                className='w-full rounded-lg object-cover'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='my-10 md:my-24'>
        <TrustedLogos />
      </section>
      <section>
        <div
          id='services'
          className='h-full w-full items-center justify-center bg-slate-100 py-32 align-middle dark:bg-neutral-950'
        >
          <h1 className='mb-10 items-center justify-center px-4 text-center text-4xl md:text-6xl'>
            Une
            <span className='gradText'>&nbsp;vidéo&nbsp;</span>
            pour <br />
            chacun de vos <span className='bg-blue box-content'>besoins</span>.
          </h1>

          <LabTabs />
          <div>
            <div className='layout relative my-16 flex flex-col gap-10'>
              <h1 className='text-center text-6xl'>
                Mes <span className='gradText'>services.</span>
              </h1>
              <div className='flex flex-col gap-6 md:flex-row'>
                <div data-aos='fade-up'>
                  {/* <CardService
                    title='Tournage'
                    txt="Réalisez une expérience visuelle extraordinaire avec mes services de tournage. Doté d'une vision
                    artistique distinctive, je capture et magnifie chaque instant, partout dans le monde. Transformez vos
                    idées en une réalité visuelle mémorable."
                    url='/#contact'
                  /> */}
                  <CardTournage url='/#contact' />
                </div>
                <div data-aos='fade-up' data-aos-delay='50'>
                  {/* <CardService
                    title='Montage'
                    txt='Transformez vos moments en souvenirs inoubliables avec mes services de montage vidéo. Expert en
                    post-production, je sublime chaque séquence, ajoutant une touche artistique pour créer des vidéos
                    exceptionnelles et personnalisées.'
                    url='/#contact'
                  /> */}
                  <CardMontage url='/#contact' />
                </div>

                <div data-aos='fade-up' data-aos-delay='100'>
                  {/* <CardService
                    title='Réalisation'
                    txt="Concrétisez votre vision avec mes services de réalisation. Du concept à l'écran, je donne vie à vos idées,
                    apportant créativité et expertise. Chaque projet devient une expérience visuelle immersive et
                    mémorable."
                    url='/#contact'
                  /> */}
                  <CardReal url='/#contact' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id='portfolio'
        className='layout relative my-24 flex scroll-mt-[150px] flex-col items-center justify-center gap-10 align-middle'
      >
        <h1 className=' text-center  text-4xl md:text-6xl'>
          Mes dernières <span className='gradText'>vidéos.</span>
        </h1>
        <div
          data-aos='fade-up'
          className='layout m-auto flex w-full flex-col gap-6 sm:flex-row'
        >
          <div
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
            data-aos-duration='500'
          >
            <VideoCard
              src='/images/triathlon.jpg'
              url='https://player.vimeo.com/video/870214438?h=4be2a58690&autoplay=1&title=0&byline=0&portrait=0'
              alt="Triathlon du lac d'Issarlès"
              title="Triathlon du lac d'Issarlès"
              txt="Teaser réalisé pour la promotion d'un nouveau triathlon en 2024"
            />
          </div>

          <div
            data-aos='fade-up'
            data-aos-delay='50'
            data-aos-easing='ease-in-out'
            data-aos-duration='500'
          >
            <VideoCard
              src='/images/swiss-trophy.jpg'
              url='https://player.vimeo.com/video/800797995?h=adc4eef2d3&autoplay=1&title=0&byline=0&portrait=0'
              alt='Publicité Clio Trophy Swiss'
              title='Publicité Clio Trophy Swiss
                '
              txt="Création d'une publicité pour un trophée automobile Renault"
            />
          </div>

          <div
            data-aos='fade-up'
            data-aos-delay='100'
            data-aos-easing='ease-in-out'
            data-aos-duration='500'
          >
            <VideoCard
              src='/images/demo.jpg'
              url='https://player.vimeo.com/video/883981611?h=574bbb9db7&autoplay=1&title=0&byline=0&portrait=0' // ! url exemple: 'https://player.vimeo.com/video/870214438?h=4be2a58690&autoplay=1&title=0&byline=0&portrait=0' => il faut ces tokens Vimeo
              alt='Demo Nicolas Blanc Production'
              title='Demo Nicolas Blanc'
              txt='Vidéo promotionnelle pour Nicolas Blanc Production'
            />
          </div>
        </div>
        <p className='gradText border-blue-500 text-lg font-bold uppercase tracking-widest hover:border-b-2'>
          <a
            href='https://www.vimeo.com/blancnicolas'
            aria-label='Voir toutes mes vidéos sur Vimeo'
            target='_blank'
          >
            Voir toutes mes vidéos
          </a>
        </p>
      </section>

      <section className='flex min-h-[75dvh] flex-col items-center justify-center'>
        <Testimonials />
      </section>

      {/* CONTACT */}

      <section
        id='contact'
        className='  m-auto my-10 flex scroll-mt-[150px] flex-col justify-center gap-10 md:my-36 md:w-[70vw] md:flex-row md:gap-20 '
      >
        <div className=' layout m-auto flex h-1/2  w-auto flex-col items-start justify-center rounded-xl p-12 md:border-[1px] md:border-gray-400 md:bg-white/20 md:backdrop-blur-sm  md:dark:border-gray-500 md:dark:bg-black/20'>
          <h1 className='items-start text-5xl  md:text-[4dvw]'>
            Discutons ensemble de votre
            <span className='gradText'>&nbsp;projet&nbsp;</span>!
          </h1>
          <p className='mb-8 mt-4 text-balance text-lg font-normal md:mt-6'>
            Remplissez ce petit formulaire pour connaitre vos besoins. Vous
            pouvez également me contacter sur les réseaux sociaux.
          </p>
          <Socials vi fb ig size='24px' />
        </div>
        <div
          data-aos='fade-up'
          className='layout mb-10 flex drop-shadow-xl md:w-full'
        >
          <ContactGmail />
        </div>
        <div className='absolute -z-[10] -mt-16  hidden w-auto md:flex'>
          <Image
            src='/images/video-02.jpg'
            alt='Nicolas Blanc vidéo professionnelle'
            width={500}
            height={500}
            className='overflow-hidden rounded-xl'
          />
        </div>
      </section>
      <section className='layout my-10 border-t-[1px] border-solid border-neutral-500 pt-10 md:my-24'>
        <div className='m-auto space-y-2 text-balance text-center text-neutral-400'>
          <p>
            Réalisation et création de <strong>vidéos professionnelles</strong>{' '}
            en Savoie (73). Production de contenus visuels et montages vidéos
            pour tous vos besoins (vidéo de mariage, publicité, VTT,
            compétitions sportives, concerts...)
          </p>
          <p>
            Possibilité de se déplacer à Genève, Annecy, Lyon, Chambéry,
            Bourg-en-Bresse, partout en France et en Suisse.
          </p>
          <p className=' text-xl font-bold uppercase'>
            #vidéo #réalisation #tournage #montage #instagram #vlog
          </p>
        </div>
      </section>
    </div>
  );
}
