import PropTypes from 'prop-types';
import css from '../Button/LoadMoreBtn.module.css';

function ClearBtn({ onRefresh }) {
  return (
    <>
      <button className={css.Button} type="button" onClick={onRefresh}>
       Сlear page
      </button>
    </>
  );
}

export default ClearBtn;

ClearBtn.propTypes = {
  onRefresh: PropTypes.func,
};