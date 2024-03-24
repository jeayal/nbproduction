'use client';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import * as React from 'react';

import styles from './Tabs.module.css';

import CardRowBig from '@/app/components/cardBig';

const categories = ['Mariage', 'Évènement', 'Publicité', 'Sport', 'Entreprise'];

const styleTab = {
  // all: 'initial',
  // marginRight: 6,
  display: 'flex',

  cursor: 'pointer',
  fontFamily: 'sans-serif',
  fontSize: { xs: '1em', md: '1.3em', lg: '1.5em' },
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  color: 'var(--tw-text-opactiy)',
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
            title='Immortalisez votre mariage en haute-qualité'
            videoSrcMp4='/videos/mariage-nicolas-blanc-video.mp4'
            videoSrcWebm='/videos/mariage-nicolas-blanc-video.webm'
            imgAlt='NBProductions, votre vidéaste professionnel à portée de clic.'
            innerText="Capturez les instants magiques de votre mariage. Au-delà des photos, la vidéo immortalise les regards
            complices, les rires et les voeux émouvants. Revivez ces moments intenses à chaque visionnage, créant
            des souvenirs vivants. Optez pour une vidéo de mariage et préservez l'authenticité du plus beau jour de
            votre vie."
          />
        </TabPanel>

        {/* TAB 2 */}

        <TabPanel value='2' className={`${styles.slideIn}`}>
          <CardRowBig
            rowInverse
            title='Un souvenir de votre évènement'
            videoSrcMp4='/videos/concerts.mp4'
            videoSrcWebm='/videos/concerts.webm'
            imgAlt='NBProductions, votre vidéaste professionnel à portée de clic.'
            innerText="Explorez l'extraordinaire avec une vidéo capturant l'effervescence des concerts, l'ambiance des salons et
            l'exaltation de n’importe quel évènement. Optez pour une vidéo d'événement pour immortaliser
            partager l'excitation inoubliable de ces moments uniques."
          />
        </TabPanel>

        {/* TAB 3 */}

        <TabPanel value='3' className={`${styles.slideIn}`}>
          <CardRowBig
            rowInverse={false}
            title='Une publicité pour votre produit phare'
            videoSrcMp4='/videos/publicite-nicolas-blanc-video.mp4'
            videoSrcWebm='/videos/publicite-nicolas-blanc-video.webm'
            imgAlt='NBProductions, votre vidéaste professionnel à portée de clic.'
            innerText="Alliant créativité et stratégie, ces productions révèlent l'essence de votre marque, mettant en lumière
            vos produits ou vos services de manière inoubliable. Optez pour une vidéo publicitaire pour un impact
            immédiat et une connexion durable avec votre audience."
          />
        </TabPanel>

        {/* TAB 4 */}

        <TabPanel value='4' className={`${styles.slideIn}`}>
          <CardRowBig
            rowInverse
            title='Une couverture de votre évènement sportif'
            videoSrcMp4='/videos/sport-nicolas-blanc-video.mp4'
            videoSrcWebm='/videos/sport-nicolas-blanc-video.webm'
            imgAlt='NBProductions, votre vidéaste professionnel à portée de clic.'
            innerText="Plongez dans l'action avec une vidéo époustouflante, capturant l'intensité des compétitions, la passion
            des athlètes et l'excitation pure du jeu. Revivez chaque moment palpitant avec des souvenirs
            dynamiques qui feront dire 'Woah, c'était incroyable !'.
            Optez pour une vidéo de sport pour immortaliser l'énergie éclatante de vos performances."
          />
        </TabPanel>

        {/* TAB 5 */}

        <TabPanel value='5' className={`${styles.slideIn}`}>
          <CardRowBig
            rowInverse={false}
            title='Une vidéo de qualité professionnelle pour votre entreprise'
            videoSrcMp4='/videos/entreprise-nicolas-blanc-video.mp4'
            videoSrcWebm='/videos/entreprise-nicolas-blanc-video.webm'
            imgAlt='NBProductions, votre vidéaste professionnel à portée de clic.'
            innerText="Plongez dans le monde professionnel avec des vidéos d'entreprise captivantes ! Allant au-delà des
            simples images, elles reflètent la dynamique de vos opérations, la culture de votre entreprise et
            l'innovation au coeur de vos activités. Optez pour une vidéo d'entreprise pour partager l'essence
            authentique et l'impact mémorable de votre organisation."
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
