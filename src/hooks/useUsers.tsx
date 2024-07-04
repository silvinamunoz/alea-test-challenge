import { fetchUsers } from '../services/users'
import { keepPreviousData, useQuery } from '@tanstack/react-query';
export interface User {
    id: string
    first_name: string
    last_name: string
    email: string
    avatar: string
}
const useUsers = () => {
    const { data: users = [], isLoading } = useQuery<User[]>({
        queryKey: ['users'],
        queryFn: () => fetchUsers(1),
        placeholderData: keepPreviousData,
    })
    return {
        users,
        isLoading
    }
}

export default useUsers;