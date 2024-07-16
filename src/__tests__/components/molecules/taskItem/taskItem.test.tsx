import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Board } from '@/components/Templates';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

describe('Board Component', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    render(
      <DndProvider backend={HTML5Backend}>
        <Board />
      </DndProvider>
    );
  });

  it('renders the input and button', () => {
    expect(screen.getByPlaceholderText('Enter task title')).toBeInTheDocument();
    expect(screen.getByText('Add Task')).toBeInTheDocument();
  });

  it('creates a new task', async () => {
    const input = screen.getByPlaceholderText('Enter task title');
    const button = screen.getByText('Add Task');

    await user.type(input, 'New Task'); // Simulate typing in the input
    await user.click(button); // Simulate clicking the button

    expect(screen.getByText('New Task')).toBeInTheDocument(); // Check if the new task appears
  });
});
