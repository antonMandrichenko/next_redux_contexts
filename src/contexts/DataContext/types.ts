/* eslint-disable no-unused-vars */
import { ActionMap } from '../types';

export type DataContextProps = {
  data: string[];
};

export enum DataContextTypes {
  SET_DATA = 'SET_DATA',

}

export type DataContextPayload = {
  [DataContextTypes.SET_DATA]: { data: string[] };

};

export type DataActions =
  ActionMap<DataContextPayload>[keyof ActionMap<DataContextPayload>];
