import clsx from 'clsx'
import s from './Modal.module.css'
import React, { useEffect } from 'react'

export const Modal = ({ children, handleCloseModal }) => {

  const clickOutside = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal()
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal()
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return (() =>
      document.removeEventListener('keydown', handleKeyDown)
    )
  }, [handleCloseModal])

  return (
    <div className={clsx(s.overlay)} onClick={clickOutside}>
      <div className={clsx(s.modal)}>
        {children}
        <button className={clsx(s.closeButton)} onClick={handleCloseModal}>X</button>
      </div>
    </div>
  )
}