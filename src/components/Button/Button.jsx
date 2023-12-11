import clsx from 'clsx';
import s from './Button.module.css'
import React from 'react';

export const Button = ({ onHandleClick, children }) => {
  return (
    <button className={clsx(s.button)} onClick={onHandleClick}>{children}</button>
  )
}
