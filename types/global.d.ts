declare type TimeoutHandle = ReturnType<typeof setTimeout>
declare type IntervalHandle = ReturnType<typeof setInterval>
declare type Recordable<T = any> = Record<string, T>
declare type Nullable<T> = T | null
