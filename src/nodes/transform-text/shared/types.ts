export enum TransformTextOperation {
  UpperCase = "upper",
  LowerCase = "lower",
}

export interface TransformTextOptions {
  operation: TransformTextOperation;
}
