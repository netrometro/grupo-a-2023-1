import { ReactNode } from 'react';

export interface OptionProps {
  icon: ReactNode;
  name: string;
  createfunc(): void;
}
