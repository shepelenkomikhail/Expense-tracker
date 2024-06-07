import { Dispatch, SetStateAction } from 'react';
import DataType from './dataType';

export interface ContextType {
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
}