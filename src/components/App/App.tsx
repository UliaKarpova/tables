import './App.css';
import { v4 as uuidv4 } from 'uuid';

import MyTable from '../Table/Table';
import { users } from "../../bd";
import { products } from "../../bd";

function App() {
  // отрисовываем две таблицы, присваивая каждой уникальный id
  return (
    <>
      <MyTable id={uuidv4()} data={users} />
      <MyTable id={uuidv4()} data={products} />
    </>
  );
}

export default App;
