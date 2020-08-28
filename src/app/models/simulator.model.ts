import { IGrade } from './grade.model';

export interface ISimulator {
    id: number,
    name: string,
    types: ISimulatorType[],
}

export interface ISimulatorType {
    id: number,
    name: string
}


export interface ISimulatorSelected {
    simulator: ISimulator,
    type: ISimulatorType
  }
  