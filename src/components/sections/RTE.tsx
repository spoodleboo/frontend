import React from 'react';
import styles from '@stylesSection/RTE.module.scss';

type RTEProps = {
  children?: React.ReactNode;
  className?: string;
};

const RTE: React.FC<RTEProps> = ({ children, className }) => {
  return (
    <>
        <section className={`${styles['rte']} ${className || ''}`}>
          {children}
        </section>
    </>
  );
};

export default RTE;
