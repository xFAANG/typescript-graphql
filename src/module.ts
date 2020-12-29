// 1. How to retrieve this information from file?
// 2. How to merge it with existing schema

import type { float } from './types';

export function plus22(a: number, b: float): number {
  return a + b;
}

interface Person {
  firstName: string;
  lastName: string;
  fullName: string;
}

export function concat22(firstName: string, lastName: string): Person {
  return {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
  };
}
