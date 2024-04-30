import React from 'react';
import styles from '@stylesSection/VideoEmbed.module.scss';

type VideoEmbedProps = {
  children?: React.ReactNode;
  className?: string;
};

const VideoEmbed: React.FC<VideoEmbedProps> = ({ children, className }) => {
  return (
    <>
        <section className={`${styles['video-embed']} ${className || ''}`}>
          {children}
        </section>
    </>
  );
};

export default VideoEmbed;
