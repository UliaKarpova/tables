import './Finder.css';

function Finder(props: {
  reset: () => void,
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  searchQuery: string,
  setSearchQuery: (str: string) => void
}) {
  return (
    <form
      className='form'
      onSubmit={(e) => props.onSubmit(e)}>

      <input
        className='form__input'
        type='text'
        placeholder='Enter value...'
        value={props.searchQuery}
        onChange={e => props.setSearchQuery(e.target.value)} />

      <button
        className='form__btn'
        type="submit">Find</button>

      <button
        className='form__btn'
        type="button" onClick={props.reset}>Reset</button>

    </form>
  )
}

export default Finder;