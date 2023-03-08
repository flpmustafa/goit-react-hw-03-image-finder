import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../Modal/Modal.module.css';
import cssBtn from '../Button/LoadMoreBtn.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdpropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { url, alt } = this.props;
    return (
      <div className={css.Overlay} onClick={this.handleBackdpropClick}>
        <div className={css.Modal}>
          <img src={url} alt={alt} />
          <div className={cssBtn.Button_container}>
          <button
            className={cssBtn.Button}
            onClick={this.handleBackdpropClick}
          >
            Close
          </button>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  handleBackdpropClick: PropTypes.func,
};
