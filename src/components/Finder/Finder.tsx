import './Finder.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dataFinder, resetData } from '../../redux/slice';

function Finder(props: { tableName: string }) {
  // создаём стейт для хранения ввода из input для поиска
  const [searchQuery, setSearchQuery] = useState<string>('');

  const dispatch = useDispatch();

  // вызываем поиск и изменение стейта по сабмиту
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery) {
      const data = {
        tableName: props.tableName,
        searchQuery
      };
      dispatch(dataFinder(data));
    } else {
      alert('Please, enter a search value');
    }
  }

  // сброс результата поиска
  const handleReset = () => {
    setSearchQuery('');
    dispatch(resetData(props.tableName));
  }

  return (
    <form
      className='form'
      onSubmit={handleSubmit}>

      <input
        className='form__input'
        type='text'
        placeholder='Enter value...'
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)} />

      <button
        className='form__btn'
        type="submit">Find</button>

      <button
        className='form__btn'
        type="button" onClick={handleReset}>Reset</button>

    </form>
  )
}

export default Finder;