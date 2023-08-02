import { createContext } from "react";

type ContextContent = {
    id: string | null
}

export const TableContext = createContext<ContextContent>({ id: null });