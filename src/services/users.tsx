export const fetchUsers = async (page?: number, itemsPerPage?: number) => {
    return await fetch(`https://reqres.in/api/users?page=${page}&per_page=${itemsPerPage}`)
        .then(async res => {
            if (!res.ok) throw new Error('Something went wrong with the users');
            return await res.json();
        })
        .then(res => {
            return {
                users: res.data,
                currentPage: res.page,
                perPage: res.per_page,
                totalPages: res.total_pages
            }
        })
}