import React from 'react';
import './search-box.styles.css';

interface Props {
  placeholder: string;
  handleChange: (e: any) => void;
}

export const SearchBox = (props: Props) => {
  return <input className='search' type='search' placeholder={props.placeholder} onChange={props.handleChange} />;
};
