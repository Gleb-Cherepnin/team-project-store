// проверка что Vitest рабтает запуск npm run test:run
import { describe, expect, it } from 'vitest';

describe('Example test', () => {
  it('should return true', () => {
    expect(true).toBe(true);
  });
});
