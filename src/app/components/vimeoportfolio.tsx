// components/VimeoVideos.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

const viewCount = 3;

const VimeoVideos = () => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const accessToken = '64e9cbbc33b3214de42c88fd80fcc918';
        const response = await axios.get(
          `https://api.vimeo.com/me/videos?access_token=${accessToken}&per_page=${viewCount}`
        );

        setVideos(response.data.data);
      } catch (error) {
        error;
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className='layout m-0 flex flex-col'>
      <div className='mb-10 flex flex-row flex-wrap items-center justify-center gap-2 self-stretch  align-middle drop-shadow-lg  md:drop-shadow-2xl'>
        {videos.map((video) => (
          <div
            key={video.id}
            className='overflow-hidden rounded-xl bg-slate-100 md:w-1/3'
          >
            <a href={`https://player.vimeo.com/video/${video.id}`}>
              <iframe
                title={video.name}
                src={`https://player.vimeo.com/video/${video.id}`}
                width='full'
                height='full'
                allowFullScreen
              ></iframe>
              <div className='bg-slate-100 p-8 dark:bg-neutral-800'>
                <h4 className='mb-2 text-left'>{video.name}</h4>
                <p className='line-clamp-3 text-left text-gray-400	'>
                  {video.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
      <UnderlineLink
        href='vimeo.com'
        className='m-auto text-left text-xl uppercase tracking-widest'
      >
        + de vidéos
      </UnderlineLink>
    </div>
  );
};

export default VimeoVideos;

// {`https://player.vimeo.com/video/${video.id}`}
