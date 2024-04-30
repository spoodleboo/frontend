import React from 'react';
import styles from '@stylesSection/GlobalHeader.module.scss';

const GlobalHeader: React.FC = () => {
  return (
    <>
        <header className={styles['global-header']}>
          <p>Global Header</p>
        </header>
    </>
  );
};

export default GlobalHeader;
