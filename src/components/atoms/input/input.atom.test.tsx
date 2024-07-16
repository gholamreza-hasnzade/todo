// src/components/atoms/input/Input.test.tsx

import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Input } from './input.atom';

describe('Input Component', () => {
  it('renders with placeholder', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Enter text" />);
    expect(getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('displays the correct initial value', () => {
    const { getByDisplayValue } = render(<Input value="Test value" />);
    expect(getByDisplayValue('Test value')).toBeInTheDocument();
  });

  it('calls onChange when the value changes', () => {
    const handleChange = vi.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter text" onChange={handleChange} />
    );

    fireEvent.change(getByPlaceholderText('Enter text'), {
      target: { value: 'New value' },
    });

    expect(handleChange).toHaveBeenCalled();
  });

  it('applies the correct styles based on the variant prop', () => {
    const { getByPlaceholderText, rerender } = render(
      <Input placeholder="Enter text" variant="primary" />
    );

    expect(getByPlaceholderText('Enter text')).toHaveStyle(
      'background-color: #fff'
    );

  
    rerender(<Input placeholder="Enter text" variant="tertiary" />);
    expect(getByPlaceholderText('Enter text')).toHaveStyle(
      'border-bottom: 1px solid #007bff'
    );
  });

  it('disables the input when the disabled prop is true', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter text" disabled />
    );

    expect(getByPlaceholderText('Enter text')).toBeDisabled();
  });
});
