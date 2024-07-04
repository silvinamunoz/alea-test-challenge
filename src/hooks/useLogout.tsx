import { useNavigate } from "react-router-dom";
import { useTokenStore } from "../store/store";

const useLogout = () => {
    const navigate = useNavigate();
    const removeToken = useTokenStore((state) => state.removeToken);

    const logout = () => {
        removeToken();
        navigate('/');
    }

    return {
        logout
    }
}

export default useLogout;