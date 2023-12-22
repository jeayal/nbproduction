import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import * as React from 'react';

import styles from './Tabs.module.css';

import CardRow from '@/app/components/card';

const categories = ['Mariage', 'Concerts', 'Publicité', 'Sport', 'Entreprise'];

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        margin: 'O',
        typography: 'body1',
        color: 'text-white',
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            width: '100%',
          }}
        >
          <div className='layout relative flex'>
            <TabList
              onChange={handleChange}
              centered
              sx={{ width: '100%' }}
              className='layout flex w-full'
              variant='scrollable'
              orientation='horizontal'
              visibleScrollbar={false}
              scrollButtons
              allowScrollButtonsMobile
            >
              <Tab
                label={categories[0]}
                value='1'
                // sx={{ all: 'initial' }}
                className='mr-6 flex cursor-pointer font-sans text-sm uppercase tracking-widest text-black dark:text-white md:text-2xl'
              />
              <Tab
                label={categories[1]}
                value='2'
                // sx={{ all: 'initial' }}
                className='mr-6 flex cursor-pointer font-sans text-sm uppercase  tracking-widest text-black dark:text-white md:text-2xl'
              />
              <Tab
                label={categories[2]}
                value='3'
                // sx={{ all: 'initial' }}
                className='mr-6 flex cursor-pointer font-sans text-sm uppercase  tracking-widest text-black dark:text-white md:text-2xl'
              />
              <Tab
                label={categories[3]}
                value='4'
                // sx={{ all: 'initial' }}
                className='mr-6 flex cursor-pointer font-sans text-sm uppercase  tracking-widest text-black dark:text-white md:text-2xl'
              />
              <Tab
                label={categories[4]}
                value='5'
                // sx={{ all: 'initial' }}
                className='flex cursor-pointer font-sans text-sm uppercase  tracking-widest text-black dark:text-white md:text-2xl'
              />
            </TabList>
          </div>
        </Box>

        {/* TAB 1 */}

        <TabPanel value='1' className={`${styles.slideIn}`}>
          <CardRow
            title={categories[0]}
            videoSrc='/videos/mariage.mp4'
            imgAlt='NBProductions, votre vidéaste professionnel à portée de clic.'
            innerText='La vidéo est l’un des moyens les plus efficaces pour
          communiquer. Elle donne une image sérieuse et met en avant votre
          entreprise pour vos clients actuels et futurs.
          Cest également un excellent moyen pour garder un souvenir de
          vos événements marquants. Je vous propose donc de créer des
          vidéos qui correspondront à vos envies et vos besoins.'
          />
        </TabPanel>

        {/* TAB 2 */}

        <TabPanel value='2' className={`${styles.slideIn}`}>
          <CardRow
            rowInverse
            title={categories[1]}
            videoSrc='/videos/concerts.mp4'
            imgAlt='NBProductions, votre vidéaste professionnel à portée de clic.'
            innerText='La vidéo est l’un des moyens les plus efficaces pour
          communiquer. Elle donne une image sérieuse et met en avant votre
          entreprise pour vos clients actuels et futurs.
          Cest également un excellent moyen pour garder un souvenir de
          vos événements marquants. Je vous propose donc de créer des
          vidéos qui correspondront à vos envies et vos besoins.'
          />
        </TabPanel>

        {/* TAB 3 */}

        <TabPanel value='3' className={`${styles.slideIn}`}>
          <CardRow
            title={categories[2]}
            videoSrc='/videos/publicite.mp4'
            imgAlt='NBProductions, votre vidéaste professionnel à portée de clic.'
            innerText='La vidéo est l’un des moyens les plus efficaces pour
          communiquer. Elle donne une image sérieuse et met en avant votre
          entreprise pour vos clients actuels et futurs.
          Cest également un excellent moyen pour garder un souvenir de
          vos événements marquants. Je vous propose donc de créer des
          vidéos qui correspondront à vos envies et vos besoins.'
          />
        </TabPanel>

        {/* TAB 4 */}

        <TabPanel value='4' className={`${styles.slideIn}`}>
          <CardRow
            rowInverse
            title={categories[3]}
            videoSrc='/videos/rallye.mp4'
            imgAlt='NBProductions, votre vidéaste professionnel à portée de clic.'
            innerText='La vidéo est l’un des moyens les plus efficaces pour
          communiquer. Elle donne une image sérieuse et met en avant votre
          entreprise pour vos clients actuels et futurs.
          Cest également un excellent moyen pour garder un souvenir de
          vos événements marquants. Je vous propose donc de créer des
          vidéos qui correspondront à vos envies et vos besoins.'
          />
        </TabPanel>

        {/* TAB 5 */}

        <TabPanel value='5' className={`${styles.slideIn}`}>
          <CardRow
            rowInverse={false}
            title={categories[4]}
            videoSrc='/videos/factory.mp4'
            imgAlt='NBProductions, votre vidéaste professionnel à portée de clic.'
            innerText='La vidéo est l’un des moyens les plus efficaces pour
          communiquer. Elle donne une image sérieuse et met en avant votre
          entreprise pour vos clients actuels et futurs.
          Cest également un excellent moyen pour garder un souvenir de
          vos événements marquants. Je vous propose donc de créer des
          vidéos qui correspondront à vos envies et vos besoins.'
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
