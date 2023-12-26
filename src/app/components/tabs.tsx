import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import * as React from 'react';

import styles from './Tabs.module.css';

import CardRowBig from '@/app/components/cardBig';

const categories = ['Mariage', 'Concerts', 'Publicité', 'Sport', 'Entreprise'];

const styleTab = {
  // all: 'initial',
  // marginRight: 6,
  display: 'flex',

  cursor: 'pointer',
  fontFamily: 'sans-serif',
  fontSize: { xs: '1em', md: '1.3em', lg: '1.5em' },
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  color: 'var(--tw-text-opactiy)', // !important Compatibilité Dark Mode ici
  justifyContent: 'space-between',
};

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
          <div className=' relative mx-auto  flex '>
            <TabList
              onChange={handleChange}
              sx={{
                display: 'flex',
                gap: '20',
                maxWidth: '68.75rem',
                margin: 'auto',
              }}
              // className='layout w-auto'
              variant='scrollable'
              orientation='horizontal'
              visibleScrollbar={false}
              scrollButtons
              allowScrollButtonsMobile
            >
              <Tab
                label={categories[0]}
                value='1'
                sx={styleTab}
                // className={`dark:text-white ${styles.tabsScroll}`}
              />
              <Tab
                label={categories[1]}
                value='2'
                sx={styleTab}
                // className={`dark:text-white ${styles.tabsScroll}`}
              />
              <Tab
                label={categories[2]}
                value='3'
                sx={styleTab}
                // className={`dark:text-white ${styles.tabsScroll}`}
              />
              <Tab
                label={categories[3]}
                value='4'
                sx={styleTab}
                // className={`dark:text-white ${styles.tabsScroll}`}
              />
              <Tab
                label={categories[4]}
                value='5'
                sx={styleTab}
                // className={`dark:text-white ${styles.tabsScroll} m-0`}
              />
            </TabList>
          </div>
        </Box>

        {/* TAB 1 */}

        <TabPanel value='1' className={`${styles.slideIn}`}>
          <CardRowBig
            title={categories[0]}
            videoSrcMp4='/videos/mariage.mp4'
            videoSrcWebm='/videos/mariage.webm'
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
          <CardRowBig
            rowInverse
            title={categories[1]}
            videoSrcMp4='/videos/concerts.mp4'
            videoSrcWebm='/videos/concerts.webm'
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
          <CardRowBig
            title={categories[2]}
            videoSrcMp4='/videos/publicite.mp4'
            videoSrcWebm='/videos/publicite.webm'
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
          <CardRowBig
            rowInverse
            title={categories[3]}
            videoSrcMp4='/videos/rallye.mp4'
            videoSrcWebm='/videos/rallye.webm'
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
          <CardRowBig
            rowInverse={false}
            title={categories[4]}
            videoSrcMp4='/videos/factory.mp4'
            videoSrcWebm='/videos/factory.webm'
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
