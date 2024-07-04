import { useMutation } from "@tanstack/react-query";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useTokenStore } from "../store/store";

const useLogin = () => {
    const navigate = useNavigate();
    const setToken = useTokenStore((state) => state.setToken);
    const { mutate } = useMutation(
        {
            mutationFn: login,
            onSuccess: (data) => {
                if (data) {
                    setToken(data)
                    navigate('/users')
                    toast.success("Success login!", {
                        duration: 1000
                    });
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