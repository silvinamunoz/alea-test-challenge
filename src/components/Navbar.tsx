import { Button } from "flowbite-react"
import useLogout from "../hooks/useLogout";
import aleaLogo from '../assets/img/alea_logo.jpeg';

const Navbar = () => {
    const { logout } = useLogout();
    return (
        <div className="flex justify-between pb-5 items-center">
            <img src={aleaLogo} width={50} height={50} className="rounded-md " />
            <div>
                <Button className="bg-slate-500 w-20" onClick={logout}>
                    Logout
                </Button>
            </div>
        </div>
    )
}

export default Navbar;