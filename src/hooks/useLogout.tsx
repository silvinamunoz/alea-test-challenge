import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem('token');
        navigate('/');
    }

    return {
        logout
    }
}

export default useLogout;