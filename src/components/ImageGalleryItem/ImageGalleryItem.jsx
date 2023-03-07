import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

function ImageGalleryItem({ articles, onImage }) {
  return (
    <>
      {articles.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li className={css.ImageGallery} key={id}>
          <img
            src={webformatURL}
            alt="response from API"
            className={css.ImageGalleryItem_image}
            onClick={() => onImage(largeImageURL, tags, id)}
          />
        </li>
      ))}
    </>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.string,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  onImage: PropTypes.func,
};