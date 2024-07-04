import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import notFound from "../assets/img/notFoundImg.png";

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center text-center h-screen p-10 gap-4">
            <section>
                <img src={notFound} />
            </section>
            <section>
                <h3 className="text-5xl text-slate-600 font-bold">Error page</h3>
                <p className="text-xl pt-4 text-slate-600">The page your are looking for does not exists</p>
                <div className="flex justify-center my-8">
                    <Button className="bg-slate-600 px-2" onClick={() => navigate('/')}>
                        Go back home
                    </Button>
                </div>
            </section>
        </div>
    )
}

export default ErrorPage;