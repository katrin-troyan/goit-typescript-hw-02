import type { LoadMoreBtnProps } from '../../types';
import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <button type="button" onClick={onClick} className={css.loadMoreBtn}>
      Load more
    </button>
  );
}
