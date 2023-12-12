import clsx from 'clsx'
import s from './Modal.module.css'
import React, { useEffect } from 'react'

const body = document.querySelector('body');

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

// export class Modal extends React.Component {
//   componentDidMount() {
//     document.addEventListener('keydown', this.handleKeyDown)
//     body.style.overflow = 'hidden'
//   }

//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.handleKeyDown)
//     body.style.overflow = 'auto'
//   }

//   handleKeyDown = (e) => {
//     if (e.key === 'Escape') {
//       this.props.handleCloseModal()
//     }
//   }

//   clickOutside = (e) => {
//     if (e.target === e.currentTarget) {
//       this.props.handleCloseModal()
//     }
//   }

//   render() {
//     const { children, handleCloseModal } = this.props
//     return (
//       <div className={clsx(s.overlay)} onClick={this.clickOutside}>
//         <div className={clsx(s.modal)}>
//           {children}
//           <button className={clsx(s.closeButton)} onClick={handleCloseModal}>X</button>
//         </div>
//       </div>
//     )
//   }
// }
