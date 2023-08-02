import { IDataType } from "./types";

export default function findData(data: IDataType[], str: string) {

  const newState: IDataType[] | [] = data.filter((item: IDataType) => {
    let myItem;
    for (let key in item) {
      // приводим значение свойства к строке
      let value = item[key].toString().toLowerCase();
      // проверяем, есть ли в значении str
      if (value.includes(str.toLowerCase())) {
        myItem = item;
      };
    }
    return myItem;
  })
  // возвращаем результаты поиска
  return newState;
}