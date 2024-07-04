import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col text-center p-10 h-screen">
            <div className='bg-notFound bg-no-repeat bg-contain bg-center h-full flex flex-col justify-between items-center' >
                <section><h3 className="text-5xl text-slate-600 font-bold">Error page</h3>
                    <p className="text-xl pt-6 text-slate-600">The page your are looking for does not exists</p>
                </section>
                <Button className="bg-slate-600 px-2 py-1 mb-10" onClick={() => navigate('/')}>
                    Go back home
                </Button>
            </div>
        </div>
    )
}

export default ErrorPage;