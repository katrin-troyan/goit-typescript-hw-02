import type { ImageCardProps } from '../../types';
import css from './ImageCard.module.css';

export default function ImageCard({ image, onClick }: ImageCardProps) {
  return (
    <div>
      <img
        className={css.imageCard}
        src={image.urls.small}
        alt={image.alt_description ?? 'Image'}
        onClick={onClick}
      />
    </div>
  );
}
