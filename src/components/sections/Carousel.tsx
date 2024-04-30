import React from 'react';
import styles from '@stylesSection/Carousel.module.scss';

type CarouselProps = {
  children?: React.ReactNode;
  className?: string;
};

const Carousel: React.FC<CarouselProps> = ({ children, className }) => {
  return (
    <>
        <section className={`${styles['carousel']} ${className || ''}`}>
          {children}
        </section>
    </>
  );
};

export default Carousel;
