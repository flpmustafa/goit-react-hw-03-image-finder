import PropTypes from 'prop-types';
import css from '../Button/Button.module.css';

function LoadMoreBtn({ onButtonClick, onRefresh }) {
  return (
    <>
      <button className={css.Button} type="button" onClick={onButtonClick}>
        Load more
      </button>
      <button className={css.Button} type="button" onClick={onRefresh}>
        Cleen
      </button>
    </>
  );
}

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  onButtonClick: PropTypes.func,
  onRefresh: PropTypes.func,
};