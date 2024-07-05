import React from 'react';
import { Label } from "flowbite-react";
import { ChangeEvent } from "react";

interface SelectItemsProps {
    itemsPerPage: number;
    setItemsPerPage: (item: number) => void
}

const SelectItemsPerPage = (props: SelectItemsProps) => {
    const { itemsPerPage, setItemsPerPage } = props;
    const items = [1, 2, 5, 10];
    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setItemsPerPage(Number(value));
    };
    return (
        <div className="flex items-center gap-3 ">
            <Label className="text-sm text-slate-500">Items per page</Label>
            <select
                id="items-per-page"
                value={itemsPerPage}
                onChange={onChangeHandler}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option>Select</option>
                {items.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectItemsPerPage;