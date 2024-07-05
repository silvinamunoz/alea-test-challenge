import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ErrorPage from './ErrorPage';
// import useNavigate from "react-router-dom";

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));
describe('<ErrorPage />', () => {
    test("Error page should render", () => {
        render(<ErrorPage />);
        expect(screen.getByText("Error page")).toBeDefined();
        // Check if the text  are rendered
        expect(screen.getByText('Error page')).toBeInTheDocument();
        expect(screen.getByText(/The page your are looking for does not exists/i)).toBeInTheDocument();

        const button = screen.getByText('Go back home');
        expect(button).toBeDefined();
    })
}
)