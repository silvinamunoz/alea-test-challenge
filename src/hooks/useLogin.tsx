import { useMutation } from "@tanstack/react-query";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useLogin = () => {
    const navigate = useNavigate();
    const { mutate } = useMutation(
        {
            mutationFn: login,
            onSuccess: (data) => {
                if (data) {
                    sessionStorage.setItem('token', data)
                    navigate('/users')
                    toast.success("Success login!")
                }
                else {
                    toast.error("Email or Password are incorrect");
                }
            },
            onError: (error) => {
                console.log(error);
                toast.error("Email or Password are incorrect");
            }
        },
    )
    return {
        mutate
    }
}

export default useLogin;