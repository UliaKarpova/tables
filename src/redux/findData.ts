import { DataType } from "../types";

export default function findData(data: DataType[], str: string) {
  const newState: DataType[] | [] = data.filter((item: DataType) => {
    let myItem;
    for (let key in item) {
      // провидим значение свойства к строке
      let value = item[key].toString();
      // проверяем, есть ли в значении str
      if (value.includes(str)) {
        myItem = item;
      };
    }
    // возвращаем объект, если в значениях его свойств есть совпадние с str
    if (myItem) {
      return myItem;
    }
  })
  // возвращаем результаты поиска
  return newState;
}