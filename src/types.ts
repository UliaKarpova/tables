import React from 'react';

export interface IDataType {
  [key: string]: number | string;
}

export interface ICell {
  title: string,
  dataIndex: string,
  key: React.Key
}

export interface IPayloadForSeaching {
  id: string,
  searchQuery: string
}

export interface IIdAndData {
  id: string,
  data: IDataType[]
}

export interface IFinderProps {
  reset: () => void,
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  searchQuery: string,
  setSearchQuery: (str: string) => void
}