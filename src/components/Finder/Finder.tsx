import './Finder.css';
import { IFinderProps } from '../../types';

const Finder: React.FC<IFinderProps> = ({
  reset,
  onSubmit,
  searchQuery,
  setSearchQuery }) => {

  return (
    <form
      className='form'
      onSubmit={(e) => onSubmit(e)}>

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
        type="button" onClick={reset}>Reset</button>

    </form>
  )
}

export default Finder;