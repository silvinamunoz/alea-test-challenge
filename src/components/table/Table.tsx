import React from 'react';
import { Card, Table } from "flowbite-react";
import { User } from "../../hooks/useUsers/useUsers";
import Pagination from "../pagination/Pagination";
interface TableCompProps {
    data: User[] | undefined;
    currentPage: number;
    itemsPerPage: number;
    totalPages: number;
    setCurrentPage: (page: number) => void;
    setItemsPerPage: (items: number) => void;

}
const TableComponent = (props: TableCompProps) => {
    const { data: users, currentPage, itemsPerPage, setCurrentPage, setItemsPerPage, totalPages } = props;
    return (
        <>
            <Card>
                <Table className="relative">
                    <Table.Head className="text-left ">
                        <Table.HeadCell className='px-3'>ID</Table.HeadCell>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {users?.length === 0 ? (
                            <p>No Results</p>
                        ) : (users?.map((user: User) => {
                            return <Table.Row key={user?.id} className="bg-white py-4 px-3">
                                <Table.Cell className="px-2 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {user?.id}
                                </Table.Cell>
                                <Table.Cell className="flex items-center gap-2">
                                    <img className="rounded-full w-10" src={user?.avatar} loading="lazy" />
                                    <div> {`${user?.first_name} ${user?.last_name}`}</div>
                                </Table.Cell>
                                <Table.Cell>{user?.email}</Table.Cell>
                            </Table.Row>
                        }))
                        }
                    </Table.Body>
                </Table>
            </Card>
            <Pagination
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                setCurrentPage={setCurrentPage}
                setItemsPerPage={setItemsPerPage}
                totalPages={totalPages}
            />
        </>
    )
}

export default TableComponent;