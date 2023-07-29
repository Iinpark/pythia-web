import React from 'react';
import './YTIframe.scss';

type YTIframeProps = {
  src: string;
  height?: number | string;
  width?: number | string;
};
const YTIframe = (props: YTIframeProps) => {
  const { src = '', height = '', width = '' } = props;
  const vidId = src.split('v=')[1];
  if (!src) return <div></div>;

  return (
    <iframe
      className='yt-iframe'
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${vidId}?autoplay=1&mute=1`}
      title='YouTube video player'
      frameborder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowfullscreen></iframe>
  );
};

export default YTIframe;
