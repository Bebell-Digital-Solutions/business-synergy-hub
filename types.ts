
import type { ReactNode } from 'react';

export interface Service {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
}

export type Theme = 'light' | 'dark';
