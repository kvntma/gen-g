export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;
