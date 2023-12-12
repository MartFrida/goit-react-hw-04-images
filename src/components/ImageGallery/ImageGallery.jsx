import clsx from 'clsx'
import s from './ImageGallery.module.css'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import React, { useState } from 'react'
import { Modal } from 'components/Modal/Modal'
import { useEffect } from 'react'

export const ImageGallery = ({ hits }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [img, setImg] = useState(null);
  useEffect(() => {
    isOpenModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
  }, [isOpenModal])

  const handleShowModal = (modalImage) => {
    setIsOpenModal(true);
    setImg(modalImage);
  }

  const handleCloseModal = () => {
    setIsOpenModal(false);
  }
  return (
    <>
      <div className={clsx(s.imageGallery)}>
        {hits.map(item =>
          <ImageGalleryItem handleShowModal={handleShowModal} key={item.id} {...item} />
        )}
      </div>
      {isOpenModal ? <Modal handleCloseModal={handleCloseModal}><img src={img} alt='default img' /></Modal> : null}
    </>
  )
}