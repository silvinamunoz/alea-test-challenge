import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Users from './Users';
import { User } from '../../hooks/useUsers/useUsers';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));
// Mock the useUsers hook
jest.mock('../../hooks/useUsers/useUsers', () => ({
    __esModule: true,
    default: (currentPage: number) => {
        // Mock data structure similar to what useUsers returns
        const users: User[] = [
            { id: "1", first_name: 'Alice', last_name: "Foo", email: "email@email.com", avatar: "avatar" },
            { id: "2", first_name: 'Bob', last_name: "Foo", email: "email@email.com", avatar: "avatar" },
            { id: "3", first_name: 'Charlie', last_name: "Foo", email: "email@email.com", avatar: "avatar" },
        ];
        const pagination = {
            currentPage,
            totalPages: 3,
        };
        return {
            users,
            pagination,
            isLoading: false,
            isFetching: false,
        };
    },
}));

describe('<Users />', () => {
    test('renders Users component with data', () => {
        render(<Users />);
        // Check for the Users header
        expect(screen.getByText('Users')).toBeInTheDocument();

        // Check for TableComponent
        expect(screen.getByRole('table')).toBeInTheDocument();

        // Check if user data is rendered
        expect(screen.getByText('Alice Foo')).toBeInTheDocument();
        expect(screen.getByText('Bob Foo')).toBeInTheDocument();
        expect(screen.getByText('Charlie Foo')).toBeInTheDocument();
    });

    // test('renders Spinner while fetching', () => {
    //     render(<Users />);

    //     // Check for the header Users is present
    //     expect(screen.getByRole('heading')).toBeInTheDocument();
    //     // Check for the Table is present
    //     expect(screen.getByRole('table')).toBeInTheDocument();
    //     // Check for the Select items per page is present
    //     expect(screen.getByRole('combobox')).toBeDefined();
    //     // Check for the Prev button is present
    //     expect(screen.getByText("Prev page")).toBeDefined();
    //     // Check for the Next button is present
    //     expect(screen.getByText("Next page")).toBeDefined();
    // });

    // Add more tests for pagination interaction if necessary
});
