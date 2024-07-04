import { Label, TextInput, Button } from "flowbite-react";
import useLogin from "../hooks/useLogin";


const Login = () => {

    const { mutate } = useLogin();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //usar rhf
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        mutate({ email, password });
    }
    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4 p-10 ">
                <h1>Prueba tecnica Alea - React</h1>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="email" name="email" placeholder="name@example.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput id="password1" type="password" required name="password" />
                </div>
                <div className="text-xs text-right">
                    <p>eve.holt@reqres.in</p>
                    <p>cityslicka</p>
                </div>
                <Button type="submit" className="bg-slate-600">Submit</Button>
            </form>
        </div>
    )
}

export default Login;