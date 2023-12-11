import clsx from 'clsx'
import React from 'react'
import s from '../ImageGallery/ImageGallery.module.css'

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags, handleShowModal }) => {
  return (
    <div className={clsx(s.imageGalleryItem)}>
      <img className={clsx(s.imageGalleryItemImage)} src={webformatURL} alt={tags} loading="lazy" onClick={() => handleShowModal(largeImageURL)} />
    </div>
  )
}
