import React from 'react';

export interface DataType {
  [key: string]: number | string;
}

export interface Cell {
  title: string,
  dataIndex: string,
  key: React.Key
}