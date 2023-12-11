import clsx from 'clsx'
import s from './Modal.module.css'
import React from 'react'

const body = document.querySelector('body')

export class Modal extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
    body.style.overflow = 'hidden'
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
    body.style.overflow = 'auto'
  }

  handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      this.props.handleCloseModal()
    }
  }

  clickOutside = (e) => {
    if (e.target === e.currentTarget) {
      this.props.handleCloseModal()
    }
  }

  render() {
    const { children, handleCloseModal } = this.props
    return (
      <div className={clsx(s.overlay)} onClick={this.clickOutside}>
        <div className={clsx(s.modal)}>
          {children}
          <button className={clsx(s.closeButton)} onClick={handleCloseModal}>X</button>
        </div>
      </div>
    )
  }
}
