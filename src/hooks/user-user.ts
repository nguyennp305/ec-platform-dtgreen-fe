import type { UserContextValue } from '@/context/user-context';
import { UserContext } from '@/context/user-context';
import * as React from 'react';

export function useUser(): UserContextValue {
  const context = React.useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
}
