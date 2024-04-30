import { getImageProps } from 'next/image';

interface PictureProps {
  desktopSrc: string;
  desktopWidth: number;
  desktopHeight: number;
  mobileSrc?: string;
  mobileWidth?: number;
  mobileHeight?: number;
  alt: string;
}

const Picture = ({ desktopSrc, desktopWidth, desktopHeight, mobileSrc, mobileWidth, mobileHeight, alt }: PictureProps) => {
  const common = { alt };

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: desktopWidth,
    height: desktopHeight,
    src: desktopSrc,
  });

  let mobileImageProps = { };
  if (mobileSrc) {
    mobileImageProps = getImageProps({
      ...common,
      width: mobileWidth,
      height: mobileHeight,
      src: mobileSrc,
    }).props;
  }

  const imgSrc = mobileSrc || desktopSrc;
  const imgWidth = desktopWidth;
  const imgHeight = desktopHeight;

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktop} />
      {mobileSrc && <source media="(max-width: 767px)" srcSet={mobileImageProps.srcSet} />}
      <img src={imgSrc} width={imgWidth} height={imgHeight} alt={alt} />
    </picture>
  );
};

export default Picture;
