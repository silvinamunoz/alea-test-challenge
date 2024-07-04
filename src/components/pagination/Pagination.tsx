import { Button } from "flowbite-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SelectItemsPerPage from "./SelectItemsPerPage";

interface PaginationProps {
    currentPage: number;
    itemsPerPage: number;
    totalPages: number;
    setCurrentPage: (page: number) => void;
    setItemsPerPage: (items: number) => void;
}

const Pagination = (props: PaginationProps) => {
    const { currentPage, itemsPerPage, setCurrentPage, setItemsPerPage, totalPages } = props;

    return (
        <div className="flex justify-end gap-2 mb-10">
            <SelectItemsPerPage
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
            />
            <Button
                className={`${currentPage === 1 ? 'bg-slate-300' : 'bg-slate-400'}`}
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
            >
                <div className="flex items-center">
                    <FaChevronLeft className="w-4 h-4 pr-2" />
                    Prev page
                </div>
            </Button>
            <Button
                className={`${currentPage === totalPages ? 'bg-slate-300' : 'bg-slate-400'}`}
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
            >
                <div className="flex items-center">
                    Next page
                    <FaChevronRight className="w-4 h-4 pl-2" />
                </div>
            </Button>
        </div>
    );
};

export default Pagination;
