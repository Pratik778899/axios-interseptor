import { test, render, screen } from 'vitest';
import App from '../App';

test('renders fetch users button', () => {
    render(<App />);
    const button = screen.getByText('FETCH USERS');
    expect(button).toBeInTheDocument();
});

test('renders fetch joke button', () => {
    render(<App />);
    const button = screen.getByText('FETCH JOKE');
    expect(button).toBeInTheDocument();
});

test('renders fetch list button', () => {
    render(<App />);
    const button = screen.getByText('FETCH LIST');
    expect(button).toBeInTheDocument();
});

// Add more test cases as needed
