import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('renders and button is clickable', () => {
  const { container } = render(<App />);
  const paragraph = screen.getByText(/Hello React Dev! 0/i);
  expect(paragraph).toBe(container.firstChild!.firstChild);

  const button = screen.getByRole('button', {
    name: /Increment/i
  });
  expect(button).toBeDefined();
  userEvent.click(button);
  expect(paragraph.textContent).toBe('Hello React Dev! 1');
  expect(paragraph).toBeInTheDocument();
});
