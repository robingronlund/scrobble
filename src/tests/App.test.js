import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders a list of scrobbles', () => {
  render(<App />);
  const linkElement = screen.getByText(/Soundtrack/i);
  expect(linkElement).toBeInTheDocument();
});
