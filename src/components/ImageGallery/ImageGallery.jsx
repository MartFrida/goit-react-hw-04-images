import clsx from 'clsx'
import s from './ImageGallery.module.css'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import React from 'react'
import { Modal } from 'components/Modal/Modal'

export class ImageGallery extends React.Component {
  state = {
    isOpenModal: false,
    img: null
  }
  handleShowModal = (modalImage) => {
    this.setState({ isOpenModal: true, img: modalImage })
  }

  handleCloseModal = () => {
    this.setState({ isOpenModal: false })
  }
  render() {
    const hits = this.props.hits
    const { isOpenModal } = this.state
    return (
      <>
        <div className={clsx(s.imageGallery)}>
          {hits.map(item =>
            <ImageGalleryItem handleShowModal={this.handleShowModal} key={item.id} {...item} />
          )}
        </div>
        {isOpenModal ? <Modal handleCloseModal={this.handleCloseModal}><img src={this.state.img} alt='default img' /></Modal> : null}
      </>

    )
  }
}


