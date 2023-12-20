import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import * as React from 'react';

import CardRow from '@/app/components/card';

const categories = ['Mariage', 'Concerts', 'Publicité', 'Sport', 'Entreprise'];

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', color: 'text-white' }}>
      <TabContext value={value}>
        <Box>
          <div className='align-middl m-0 my-2 flex w-full flex-row flex-wrap items-center justify-center'>
            <TabList onChange={handleChange} sx={{ all: 'initial' }}>
              <Tab
                label={categories[0]}
                value='1'
                sx={{ all: 'initial' }}
                className='mr-6 cursor-pointer font-sans text-2xl uppercase tracking-widest dark:text-white'
              />
              <Tab
                label={categories[1]}
                value='2'
                sx={{ all: 'initial' }}
                className='mr-6 cursor-pointer font-sans text-2xl uppercase tracking-widest dark:text-white'
              />
              <Tab
                label={categories[2]}
                value='3'
                sx={{ all: 'initial' }}
                className='mr-6 cursor-pointer font-sans text-2xl uppercase tracking-widest dark:text-white'
              />
              <Tab
                label={categories[3]}
                value='4'
                sx={{ all: 'initial' }}
                className='mr-6 cursor-pointer font-sans text-2xl uppercase tracking-widest dark:text-white'
              />
              <Tab
                label={categories[4]}
                value='5'
                sx={{ all: 'initial' }}
                className='mr-6 cursor-pointer font-sans text-2xl uppercase tracking-widest dark:text-white'
              />
            </TabList>
          </div>
        </Box>

        {/* TAB 1 */}

        <TabPanel value='1' className=' transition'>
          <CardRow
            rowInverse={false}
            bgColor='bg-white dark:bg-neutral-800'
            title={categories[0]}
            imgSrc='/images/mariages-01.jpg'
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

        <TabPanel value='2'>
          <CardRow
            rowInverse={false}
            bgColor='bg-white dark:bg-neutral-800'
            title={categories[1]}
            imgSrc='/images/mariages-01.jpg'
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

        <TabPanel value='3'>
          <CardRow
            rowInverse={false}
            bgColor='bg-white dark:bg-neutral-800'
            title={categories[2]}
            imgSrc='/images/mariages-01.jpg'
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

        <TabPanel value='4'>
          <CardRow
            rowInverse={false}
            bgColor='bg-white dark:bg-neutral-800'
            title={categories[3]}
            imgSrc='/images/mariages-01.jpg'
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

        <TabPanel value='5'>
          <CardRow
            rowInverse={false}
            bgColor='bg-white dark:bg-neutral-900'
            title={categories[4]}
            imgSrc='/images/mariages-01.jpg'
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
