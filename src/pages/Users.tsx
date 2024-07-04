import { Table } from "flowbite-react";
import useUsers, { User } from "../hooks/useUsers";
import Navbar from "../components/Navbar";
import Pagination from "../components/pagination/Pagination";
import Spinner from "../components/Spinner";
import DropdownPagination from "../components/pagination/DropdownPagination";
const Users = () => {
    const { users, isLoading } = useUsers();
    const goToPage = () => { }
    return (
        <div className=" w-full bg-white bg-gradient-to-r p-5">
            <Navbar />
            {isLoading ? (
                <Spinner />
            ) : (
                <div className="overflow-x-auto">
                    {/* pasar a un component Table */}
                    <Table className="relative">
                        <Table.Head className="text-left">
                            <Table.HeadCell>ID</Table.HeadCell>
                            <Table.HeadCell>Name</Table.HeadCell>
                            <Table.HeadCell>Email</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {users?.length === 0 ? (
                                <p>No Results</p>
                            ) : (users?.map((user: User) => {
                                return <Table.Row key={user.id} className="bg-white py-4">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {user.id}
                                    </Table.Cell>
                                    <Table.Cell className="flex items-center gap-2">
                                        <img className="rounded-full w-10" src={user.avatar} />
                                        <div> {`${user.first_name} ${user.last_name}`}</div>
                                    </Table.Cell>
                                    <Table.Cell>{user.email}</Table.Cell>
                                </Table.Row>
                            }))
                            }
                        </Table.Body>
                    </Table>
                    <div className="flex justify-end gap-2">
                        <DropdownPagination
                            itemsPerPage={6}
                        />
                        <Pagination
                            currentPage={1}
                            goToPage={goToPage}
                            nextPage={users.length - 1}
                            prevPage={1}
                        />
                    </div>
                </div>

            )}
        </div>
    )
}

export default Users;