import React from 'react';
import './YTIframe.scss';
import { getYouTubeVideoId } from '@shared/utils';

type YTIframeProps = {
  src: string;
  height?: number | string;
  width?: number | string;
};
const YTIframe = (props: YTIframeProps) => {
  const { src = '', height = '', width = '' } = props;
  const vidId = getYouTubeVideoId(src);
  if (!src) return <div></div>;

  return (
    <iframe
      className='yt-iframe'
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${vidId}?autoplay=1&mute=1`}
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
      allowFullScreen></iframe>
  );
};

export default YTIframe;
