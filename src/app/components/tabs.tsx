import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Image from 'next/image';
import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box>
          <div className='my-2 flex flex-row flex-wrap items-center justify-center align-middle'>
            <TabList onChange={handleChange} fullWidth={true}>
              <Tab label='Mariage' value='1' />
              <Tab label='Concerts' value='2' />
              <Tab label='Publicité' value='3' />
              <Tab label='Sport' value='4' />
              <Tab label='Entreprise' value='5' />
            </TabList>
          </div>
        </Box>

        {/* TAB 1 */}

        <TabPanel value='1'>
          <div className='layout relative flex flex-col overflow-hidden rounded-xl bg-white drop-shadow-xl transition ease-in-out sm:flex-col sm:gap-5 md:flex-row-reverse'>
            <div className='flex flex-col justify-between md:w-2/3'>
              <div className='p-6 text-left '>
                <h1 className='text-l mb-2'>Mariages </h1>
                <p>
                  Chaque mariage est une histoire à part entière, capturée avec
                  passion pour immortaliser l'essence de l'amour et les moments
                  précieux. Notre équipe personnalise chaque vidéo en
                  collaboration étroite avec les couples, offrant des options
                  allant du romantique au cinématographique. Nous garantissons
                  une qualité exceptionnelle grâce à des équipements de pointe
                  et des techniques innovantes.
                </p>
              </div>
              <div className='mb-6 flex flex-col gap-4 p-6 text-center md:flex-row '>
                <ButtonLink
                  className='justify-center px-10 uppercase'
                  href='/components'
                  variant='outline'
                >
                  Contactez-moi
                </ButtonLink>
                <ButtonLink
                  className=' justify-center px-10 uppercase'
                  href='/components'
                  variant='primary'
                >
                  Faire un devis
                </ButtonLink>
              </div>
            </div>
            <div className='flex md:w-1/3'>
              <Image
                src='/images/mariages-01.jpg'
                width={750}
                height={750}
                alt='NBProduction vidéo & photo professionnelles'
                className='object-cover'
              />
            </div>
          </div>
        </TabPanel>

        {/* TAB 2 */}

        <TabPanel value='2'>
          <div className='layout relative flex flex-row-reverse overflow-hidden rounded-xl bg-white transition ease-in-out '>
            <div className='flex flex-col'>
              <p className='m-0 justify-center p-8 pr-32 text-left'>
                La vidéo est l’un des moyens les plus efficaces pour
                communiquer. Elle donne une image sérieuse et met en avant votre
                entreprise pour vos clients actuels et futurs.
              </p>
              <p className='m-0 justify-center p-8 pr-32 text-left'>
                C'est également un excellent moyen pour garder un souvenir de
                vos événements marquants. Je vous propose donc de créer des
                vidéos qui correspondront à vos envies et vos besoins.
              </p>
              <div className='flex content-center justify-center gap-6'>
                <ButtonLink
                  className='mt-6 px-10 uppercase'
                  href='/components'
                  variant='outline'
                >
                  Contactez-moi
                </ButtonLink>
                <ButtonLink
                  className='mt-6 px-10 uppercase'
                  href='/components'
                  variant='primary'
                >
                  Faire un devis
                </ButtonLink>
              </div>
            </div>
            <div className='flex flex-col'>
              <Image
                src='/images/mariages-01.jpg'
                width={900}
                height={900}
                alt='NBProduction couvre votre mariage et occasions spéciales'
                className='object-cover'
                blurDataURL='data:...'
                placeholder='blur'
              />
            </div>
          </div>
        </TabPanel>

        {/* TAB 3 */}

        <TabPanel value='3'>
          <div className='layout relative flex flex-row-reverse overflow-hidden rounded-xl bg-white transition ease-in-out '>
            <div className='flex flex-col'>
              <p className='m-0 justify-center p-8 pr-32 text-left'>
                La vidéo est l’un des moyens les plus efficaces pour
                communiquer. Elle donne une image sérieuse et met en avant votre
                entreprise pour vos clients actuels et futurs.
              </p>
              <p className='m-0 justify-center p-8 pr-32 text-left'>
                C'est également un excellent moyen pour garder un souvenir de
                vos événements marquants. Je vous propose donc de créer des
                vidéos qui correspondront à vos envies et vos besoins.
              </p>
              <div className='flex content-center justify-center gap-6'>
                <ButtonLink
                  className='mt-6 px-10 uppercase'
                  href='/components'
                  variant='outline'
                >
                  Contactez-moi
                </ButtonLink>
                <ButtonLink
                  className='mt-6 px-10 uppercase'
                  href='/components'
                  variant='primary'
                >
                  Faire un devis
                </ButtonLink>
              </div>
            </div>
            <Image
              src='/images/nicolas-blanc-production.jpg'
              width={900}
              height={900}
              alt='Picture of the author'
              className='object-cover'
            />
          </div>
        </TabPanel>

        {/* TAB 4 */}

        <TabPanel value='4'>
          {' '}
          <div className='layout relative flex flex-row-reverse overflow-hidden rounded-xl bg-white transition ease-in-out '>
            <div className='flex flex-col'>
              <p className='m-0 justify-center p-8 pr-32 text-left'>
                La vidéo est l’un des moyens les plus efficaces pour
                communiquer. Elle donne une image sérieuse et met en avant votre
                entreprise pour vos clients actuels et futurs.
              </p>
              <p className='m-0 justify-center p-8 pr-32 text-left'>
                C'est également un excellent moyen pour garder un souvenir de
                vos événements marquants. Je vous propose donc de créer des
                vidéos qui correspondront à vos envies et vos besoins.
              </p>
              <div className='flex content-center justify-center gap-6'>
                <ButtonLink
                  className='mt-6 px-10 uppercase'
                  href='/components'
                  variant='outline'
                >
                  Contactez-moi
                </ButtonLink>
                <ButtonLink
                  className='mt-6 px-10 uppercase'
                  href='/components'
                  variant='primary'
                >
                  Faire un devis
                </ButtonLink>
              </div>
            </div>
            <Image
              src='/images/nicolas-blanc-production.jpg'
              width={900}
              height={900}
              alt='Picture of the author'
              className='object-cover'
            />
          </div>
        </TabPanel>

        {/* TAB 5 */}

        <TabPanel value='5'>
          <div className='layout relative flex flex-row-reverse overflow-hidden rounded-xl bg-white transition ease-in-out '>
            <div className='flex flex-col'>
              <p className='m-0 justify-center p-8 pr-32 text-left'>
                La vidéo est l’un des moyens les plus efficaces pour
                communiquer. Elle donne une image sérieuse et met en avant votre
                entreprise pour vos clients actuels et futurs.
              </p>
              <p className='m-0 justify-center p-8 pr-32 text-left'>
                C'est également un excellent moyen pour garder un souvenir de
                vos événements marquants. Je vous propose donc de créer des
                vidéos qui correspondront à vos envies et vos besoins.
              </p>
              <div className='flex content-center justify-center gap-6'>
                <ButtonLink
                  className='mt-6 px-10 uppercase'
                  href='/components'
                  variant='outline'
                >
                  Contactez-moi
                </ButtonLink>
                <ButtonLink
                  className='mt-6 px-10 uppercase'
                  href='/components'
                  variant='primary'
                >
                  Faire un devis
                </ButtonLink>
              </div>
            </div>
            <Image
              src='/images/nicolas-blanc-production.jpg'
              width={900}
              height={900}
              alt='Picture of the author'
              className='object-cover'
            />
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
