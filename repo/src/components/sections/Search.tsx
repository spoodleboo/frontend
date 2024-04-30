import React from 'react';
import styles from '@stylesSection/Search.module.scss';

type SearchProps = {
  children?: React.ReactNode;
  className?: string;
};

const Search: React.FC<SearchProps> = ({ children, className }) => {
  return (
    <>
        <div className={`${styles['search']} ${className || ''}`}>
          
        </div>
    </>
  );
};

export default Search;
