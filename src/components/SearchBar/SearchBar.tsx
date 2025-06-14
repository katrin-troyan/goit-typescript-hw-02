import type { FormEvent } from 'react';
import toast from 'react-hot-toast';
import type { SearchBarProps } from '../../types';
import css from './SearchBar.module.css';

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const input = form.elements.namedItem('topic') as HTMLInputElement;
    const topic = input.value.trim();
    if (topic === '') {
      toast.error('Please fill in the search field!');
      return;
    }

    onSubmit(topic);
    form.reset();
  };

  return (
    <header>
      <form className={css.formSearchBar} onSubmit={handleSubmit}>
        <input
          className={css.inputSearchBar}
          type="text"
          name="topic"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.buttonSearchBar} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
