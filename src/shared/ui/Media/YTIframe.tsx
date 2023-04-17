type YTIframeProps = {
  src: string;
  height?: number | string;
  width?: number | string;
};
const YTIframe = (props: YTIframeProps) => {
  const { src = '', height = 315, width = 560 } = props;
  const vidId = src.split('v=')[1];
  if (!src) return <div></div>;

  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${vidId}`}
      title='YouTube video player'
      frameborder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowfullscreen></iframe>
  );
};

export default YTIframe;
