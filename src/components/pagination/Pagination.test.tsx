import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from './Pagination';

describe('<Pagination />', () => {
    test('renders Users component with data', () => {
        const setCurrentPageMock = jest.fn();
        const setItemsPerPageMock = jest.fn();
        render(
            <Pagination
                currentPage={1}
                itemsPerPage={6}
                setCurrentPage={setCurrentPageMock}
                setItemsPerPage={setItemsPerPageMock}
                totalPages={2} />);

        const select = screen.getByRole('combobox');
        // Check for the Select items per page is present
        expect(select).toBeDefined();
        // Check for the Prev button is present
        expect(screen.getByText("Prev page")).toBeDefined();
        // Check for the Next button is present
        expect(screen.getByText("Next page")).toBeDefined();

        //Select option with value 10 
        fireEvent.change(select, { target: { value: '10' } });

        // Assert that setItemsPerPage has been called with the new value
        expect(setItemsPerPageMock).toHaveBeenCalledWith(10);
    });
});
