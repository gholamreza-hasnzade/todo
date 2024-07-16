// src/components/atoms/button/Button.test.tsx

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './button.atom';

describe('Button Component', () => {
  it('renders the button with the correct text', () => {
    const { getByRole } = render(<Button>Click Me</Button>);

    // Check if the button is rendered with the correct text
    expect(getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('calls the onClick function when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    const { getByRole } = render(<Button onClick={handleClick}>Click Me</Button>);

    // Get the button element
    const button = getByRole('button', { name: /click me/i });

    // Simulate a click event
    await user.click(button);

    // Check if the onClick function is called
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
}); 
