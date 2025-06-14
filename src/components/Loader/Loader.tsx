import { PropagateLoader } from 'react-spinners';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader}>
      <PropagateLoader color="#026d14" />
    </div>
  );
}
