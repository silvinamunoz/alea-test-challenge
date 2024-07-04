export interface LoginProps {
    email: string;
    password: string;
}
export const login = async (
    props: LoginProps
) => {
    const { password, email } = props;
    return await fetch('https://reqres.in/api/login', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(async res => {
            if (!res.ok) throw new Error('Something went wrong with the login');
            return await res.json();
        })
        .then(res => {
            return res.token
        })
        .catch(err => {
            console.log(err);
        })
}