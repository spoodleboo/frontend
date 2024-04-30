import React from 'react';
import styles from '@stylesSection/Hero.module.scss';

type HeroProps = {
  children?: React.ReactNode;
  className?: string;
};

const Hero: React.FC<HeroProps> = ({ children, className }) => {
  return (
    <>
        <section className={`${styles['hero']} ${className || ''}`}>
          {children}
        </section>
    </>
  );
};

export default Hero;
