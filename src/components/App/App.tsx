import './App.css';
import { useId } from 'react';

import { TableContext } from '../MyTable/index';
import { MyTable } from '../MyTable/index';
import { Finder } from '../MyTable/index';

import { users } from "../../bd";
import { products } from "../../bd";

function App() {
  // отрисовываем две таблицы, присваивая каждой уникальный id и данные через контекст
  return (
    <>
      <TableContext.Provider value={{id: useId(), data: users}}>  
        <MyTable>
          <Finder />
        </MyTable>
      </TableContext.Provider>

      <TableContext.Provider value={{id: useId(), data: products}}>
        <MyTable>
          <Finder />
        </MyTable>
      </TableContext.Provider>
    </>     
  );
}

export default App;
