import React from 'react';
import styles from '@stylesSection/VideoClip.module.scss';

type VideoClipProps = {
  children?: React.ReactNode;
  className?: string;
};

const VideoClip: React.FC<VideoClipProps> = ({ children, className }) => {
  return (
    <>
        <section className={`${styles['video-clip']} ${className || ''}`}>
          {children}
        </section>
    </>
  );
};

export default VideoClip;
