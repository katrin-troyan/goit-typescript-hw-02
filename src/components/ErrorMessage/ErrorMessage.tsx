import css from './ErrorMessage.module.css';

export default function ErrorMessage({ message }: { message: string }) {
  return <div className={css.messageError}>{message}</div>;
}
