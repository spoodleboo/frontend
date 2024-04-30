import React from 'react';
import OneTrustButton from '@components/third-party/OneTrustButton';
import styles from '@stylesSection/GlobalFooter.module.scss';

type GlobalFooterProps = {
    children: React.ReactNode;
    className?: string;
  };

const GlobalFooter: React.FC = () => {
  return (
    <>
        <footer className={styles['global-footer']}>
          <p>Global Footer</p>
        </footer>

        <OneTrustButton />
    </>
  );
};

export default GlobalFooter;
