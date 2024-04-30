import React from 'react';
import styles from '@stylesElement/CTA.module.scss';

type CTAProps = {
  children?: React.ReactNode;
  className?: string;
};

const CTA: React.FC<CTAProps> = ({ children, className }) => {
  return (
    <>
        <div className={`${styles['cta-block']}`}>
            <a href="https://example.com" className={`${styles['cta']} ${className || ''}`}></a>
        </div>
    </>
  );
};

export default CTA;
