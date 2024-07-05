import { fetchUsers } from '../../services/users'
import { keepPreviousData, useQuery } from '@tanstack/react-query';
export interface User {
    id: string
    first_name: string
    last_name: string
    email: string
    avatar: string
}

/**
 * Represents the query response containing a list of users, pagination information,
 * and total number of pages.
 */
export interface UsersQuery {
    users: User[];
    currentPage: number;
    perPage: number;
    totalPages: number;
}

/**
 * Custom hook to fetch users data with pagination support.
 * @param page The current page number.
 * @param itemsPerPage Number of items per page.
 * @returns Object containing users data, pagination details, loading state, fetch status, and refetch function.
 */
const useUsers = (page?: number, itemsPerPage?: number) => {
    const { data: usersQuery, isLoading, isFetching, refetch } = useQuery<UsersQuery, Error, UsersQuery>({
        queryKey: ['users', page, itemsPerPage],
        queryFn: () => fetchUsers(page, itemsPerPage),
        placeholderData: keepPreviousData, //to maintain previous data while fetching new data.
    })
    return {
        users: usersQuery?.users,
        pagination: {
            currentPage: usersQuery?.currentPage,
            perPage: usersQuery?.perPage,
            totalPages: usersQuery?.totalPages
        },
        isLoading,
        isFetching,
        refetch
    }
}

export default useUsers;