import PropTypes from 'prop-types';
const ImageGalleryItem = ({ image, openModal }) => {
  const { largeImageURL, webformatURL, tags } = image;
  const clickHandler = () => {
    console.log(largeImageURL);
    openModal(largeImageURL);
  };

  return (
    <li className="ImageGalleryItem" onClick={clickHandler}>
      <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
    </li>
  );
};
ImageGalleryItem.propTypes = {};
export default ImageGalleryItem;
