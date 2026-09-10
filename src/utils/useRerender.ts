import { useReducer } from 'react';

export const useRerender = () => useReducer(v => !v, false)[1];
