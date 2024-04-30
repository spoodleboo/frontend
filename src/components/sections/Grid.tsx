import React from 'react';
import styles from '@stylesSection/Grid.module.scss';

type GridProps = {
  children?: React.ReactNode;
  className?: string;
};

const Grid: React.FC<GridProps> = ({ children, className }) => {
  return (
    <>
        <section className={`${styles['grid']} ${className || ''}`}>
          {children}
        </section>
    </>
  );
};

export default Grid;
