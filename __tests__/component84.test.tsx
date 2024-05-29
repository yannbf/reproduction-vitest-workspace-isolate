
import React from 'react'
import { test, expect } from 'vitest'
import { render } from '@testing-library/react'

test('dummy 84', () => {
  const { getByRole } = render(<button>Hello world</button>)
  expect(getByRole('button')).not.toBeNull()
})
