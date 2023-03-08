import PropTypes from 'prop-types';
import css from '../Button/LoadMoreBtn.module.css';

function LoadMoreBtn({ onButtonClick }) {
  return (
    <>
      <button className={css.Button} type="button" onClick={onButtonClick}>
        Load more
      </button>
    </>
  );
}

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  onButtonClick: PropTypes.func,
};