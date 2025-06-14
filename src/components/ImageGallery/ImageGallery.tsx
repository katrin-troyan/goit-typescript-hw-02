import ImageCard from '../ImageCard/ImageCard';
import type { ImageGalleryProps } from '../../types';
import css from './ImageGallery.module.css';

export default function ImageGallery({
  images,
  onImageClick,
}: ImageGalleryProps) {
  return (
    <ul className={images.length > 0 ? css.imageGalleryList : ''}>
      {images.map((image) => (
        <li key={image.id} className={css.imageGalleryItem}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
}
