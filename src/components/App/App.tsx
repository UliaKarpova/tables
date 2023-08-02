import './App.css';
import { useId, useEffect } from 'react';
import { useAppDispatch } from '../../redux/hook';

import { TableContext } from '../MyTable/index';
import { MyTable } from '../MyTable/index';
import { Finder } from '../MyTable/index';
import { addOriginalData } from '../MyTable/index';

import { users } from "../../bd";
import { products } from "../../bd";

function App() {
  // создаём id для таблиц
  const id1 = useId();
  const id2 = useId();

  const dispatch = useAppDispatch();

  // сохраняем данные для таблиц в стор
  useEffect(() => {
    dispatch(addOriginalData({ id: id1, data: users }));
    dispatch(addOriginalData({ id: id2, data: products }));
  }, [dispatch, id1, id2])

  // отрисовываем две таблицы, сохраняя уникальный id в контексте
  return (
    <>
      <TableContext.Provider value={{ id: id1 }}>
        <MyTable>
          <Finder />
        </MyTable>
      </TableContext.Provider>

      <TableContext.Provider value={{ id: id2 }}>
        <MyTable>
          <Finder />
        </MyTable>
      </TableContext.Provider>
    </>     
  );
}

export default App;
