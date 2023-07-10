import './App.css';
import MyTable from '../Table/Table';

function App() {

  // отрисовываем две таблицы. Пропс name говорит, какие данные из стейта использовать для таблицы
  return (
    <>
      <MyTable name='users' />
      <MyTable name='products' />
    </>
  );
}

export default App;
