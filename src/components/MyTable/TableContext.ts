import { createContext } from "react";
import { IDataType } from './types';

type ContextContent = {
    id: string | null,
    data: IDataType[] | []
}

export const TableContext = createContext<ContextContent>({id: null, data: []});