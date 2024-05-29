import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const dir = '__tests__';

// Ensure the __tests__ directory exists
if (!existsSync(dir)) {
  mkdirSync(dir);
}

const generateFileContent = (counter) => `
import React from 'react'
import { test, expect } from 'vitest'
import { render } from '@testing-library/react'

test('dummy ${counter}', () => {
  const { getByRole } = render(<button>Hello world</button>)
  expect(getByRole('button')).not.toBeNull()
})
`;

for (let i = 1; i <= 100; i++) {
  const filePath = join(dir, `component${i}.test.tsx`);
  const fileContent = generateFileContent(i);

  writeFileSync(filePath, fileContent);
}

console.log('Test files generated successfully.');
