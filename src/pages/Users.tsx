import useUsers from "../hooks/useUsers";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import { useState } from "react";
import TableComponent from "../components/table/Table";

/**
 * Users Component
 * 
 * This component displays a list of users in a table with pagination.
 * It fetches user data from an API and supports changing the current page
 * and items per page.
 */
const Users = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const { users, pagination, isLoading, isFetching, } = useUsers(currentPage, itemsPerPage);

    return (
        <div className=" w-full bg-white bg-gradient-to-r p-5">
            <Navbar />
            {isLoading || isFetching ? (
                <Spinner />
            ) : (
                <div className="overflow-x-auto">
                    <TableComponent
                        data={users}
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        totalPages={pagination.totalPages as number}
                        setCurrentPage={setCurrentPage}
                        setItemsPerPage={setItemsPerPage}
                    />
                </div>

            )}
        </div>
    )
}

export default Users;