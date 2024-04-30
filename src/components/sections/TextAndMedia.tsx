import React from 'react';
import styles from '@stylesSection/TextMedia.module.scss';

type TextMediaProps = {
  children?: React.ReactNode;
  className?: string;
};

const TextMedia: React.FC<TextMediaProps> = ({ children, className }) => {
  return (
    <>
        <section className={`${styles['text-media']} ${className || ''}`}>
          {children}
        </section>
    </>
  );
};

export default TextMedia;
