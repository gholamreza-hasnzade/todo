// src/components/atoms/flex/Flex.test.tsx

import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Flex } from './flex.atom';

describe('Flex Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Flex>
        <div>Child 1</div>
        <div>Child 2</div>
      </Flex>
    );

    expect(getByText('Child 1')).toBeInTheDocument();
    expect(getByText('Child 2')).toBeInTheDocument();
  });
 
  it('applies flex properties correctly', () => {
    const { container } = render(
      <Flex flexDirection="column" justify="center" align="center" gap="10px" background="red">
        <div>Child</div>
      </Flex>
    );

    const flexElement = container.firstChild;
    expect(flexElement).toHaveStyle('display: flex');
    expect(flexElement).toHaveStyle('flex-direction: column');
    expect(flexElement).toHaveStyle('justify-content: center');
    expect(flexElement).toHaveStyle('align-items: center');
    expect(flexElement).toHaveStyle('gap: 10px');
    expect(flexElement).toHaveStyle('background: red');
  });
});
