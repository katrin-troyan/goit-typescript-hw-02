import type { MouseEvent } from 'react';

export interface ImageItem {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
  };
  description: string | null;
  likes: number;
  created_at: string;
  user: {
    name: string;
    instagram_username?: string;
  };
}

export type ModalImageType = ImageItem | null;

export interface SearchBarProps {
  onSubmit: (topic: string) => void;
}

export interface ImageCardProps {
  image: ImageItem;
  onClick: (event: MouseEvent<HTMLImageElement>) => void;
}

export interface ImageGalleryProps {
  images: ImageItem[];
  onImageClick: (image: ImageItem) => void;
}

export interface LoadMoreBtnProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageData: ModalImageType;
}
