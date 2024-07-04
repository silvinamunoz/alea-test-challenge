export const fetchUsers = async (page: number) => {
    console.log(page);

    return await fetch(`https://reqres.in/api/users?page=${page}`)
        .then(async res => {
            if (!res.ok) throw new Error('Something went wrong with the users');
            return await res.json();
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err);
        })
}