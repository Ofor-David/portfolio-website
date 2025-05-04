declare module 'react' {
  import { ComponentType, ReactNode, useState, useEffect } from '@types/react';
  
  export const Suspense: ComponentType<{ children: ReactNode; fallback?: ReactNode }>;
  export function lazy<T extends ComponentType<any>>(
    factory: () => Promise<{ default: T }>
  ): T;
  
  export { useState, useEffect };
  export * from '@types/react';
} 