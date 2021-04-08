import { render, screen } from '@testing-library/react';
import {Profile} from "../components/profile/Profile";
import '@testing-library/jest-dom/extend-expect';

test('Profile Simple', () => {
    render(<Profile />);
    const linkElement = screen.getByText(/Nombre/i);
    expect(linkElement).toBeInTheDocument();
  });