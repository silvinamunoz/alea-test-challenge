import { Button } from "flowbite-react"
import useLogout from "../hooks/useLogout";

const Navbar = () => {
    const { logout } = useLogout();
    return (
        <div className="flex justify-end">
            <Button className="bg-slate-500 w-20" onClick={logout}>
                Logout
            </Button>
        </div>
    )
}

export default Navbar;