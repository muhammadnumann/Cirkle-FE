export type ArrElement<ArrType> = ArrType extends readonly (infer ElementType)[]
  ? ElementType
  : never;

export type ValueOf<T> = T[keyof T];

export type DeepRequired<T, P extends string[]> = T extends object
  ? Omit<T, Extract<keyof T, P[0]>> &
      Required<{
        [K in Extract<keyof T, P[0]>]: NonNullable<DeepRequired<T[K], ShiftUnion<K, P>>>;
      }>
  : T;

export type DeepRequiredWithPathsSyntax<T, P extends string> = DeepRequired<
  T,
  PathsToStringArray<P>
>;

type PathsToStringArray<T extends string> = T extends `${infer Head}.${infer Tail}`
  ? [...PathsToStringArray<Head>, ...PathsToStringArray<Tail>]
  : [T];

type Shift<T extends any[]> = ((...t: T) => any) extends (first: any, ...rest: infer Rest) => any
  ? Rest
  : never;

type ShiftUnion<P extends PropertyKey, T extends any[]> = T extends any[]
  ? T[0] extends P
    ? Shift<T>
    : never
  : never;
