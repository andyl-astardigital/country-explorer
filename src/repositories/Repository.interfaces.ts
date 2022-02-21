export type IRetrieveAll<T> = {
  retrieveAll(): Promise<T[]>;
};

export interface IRetrieveWithParameter<T, U> {
  retrieve(parameters: T): Promise<U>;
}
