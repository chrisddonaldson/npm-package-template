import { describe, it, expect } from 'vitest';
import { customClass } from './index.js';

describe('customClass', () => {
  it('greets with provided name', () => {
    const c = new customClass('Tester');
    expect(c.greet()).toBe('Hello, Tester!');
  });

  it('greets with default name', () => {
    const c = new customClass();
    expect(c.greet()).toBe('Hello, World!');
  });
});

