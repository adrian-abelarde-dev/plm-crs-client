'use client';

import { Flex, Menu } from '@mantine/core';
import {
    MRT_GlobalFilterTextInput,
    MRT_ToggleFiltersButton,
    MRT_ToggleFullScreenButton,
    MantineReactTable,
    useMantineReactTable,
} from 'mantine-react-table';
import { useMemo } from 'react';

import { Label } from '../ui/label';

// * title -> string, defines the title of the table
// * searchPlaceholder -> string, defines the placeholder text for the search input
// * RightButtons -> JSX, defines the JSX for the buttons on the right side of the table
// * LeftButtons -> JSX, defines the JSX for the buttons on the left side of the table
// * data -> array, defines the data for the table

// * template -> array, defines the template for the table. requires the following format:
// ? [{
// ?     accessorKey: 'string', --> the key for the data
// ?     id: 'string', --> the id for the column
// ?     Header: 'string', --> the header for the column
// ?     filterVariant: 'string', --> possible values are: 'select', 'multiselect', 'checkbox', 'radio', 'search', 'range', 'date', 'date-range', 'time', 'time-range', 'number', 'number-range', 'custom'
// * it is recommended to use same values for accessorKey and id to avoid confusion
// ? }]
// ? using Cell is optional if you want to customize the cell, the method is as follows:

// ? Cell: ({ value, row }) => {
// ?     return (
// ?         <div>
// ?             <div>{value}</div>
// ?             <div>{row.original.id}</div>
// ?         </div>
// ?     );
// ? },

// * to populate the data prop, fetch data from server on the parent component and pass it as a prop to this component

// TODO: Handle checkbox selection

const TableMRT = ({
    title,
    searchPlaceholder,
    data,
    template,

    // JSX Props
    RightButtons,
    LeftButtons,
    RowActions,
}) => {
    const columns = useMemo(() => template, [template]);

    const table = useMantineReactTable({
        columns,
        data: data,
        enableColumnFilterModes: true,
        enableColumnOrdering: true,
        enableFacetedValues: true,
        enableGrouping: true,
        enablePinning: true,
        enableRowActions: RowActions ? true : false,
        enableRowSelection: true,
        initialState: { showColumnFilters: true, showGlobalFilter: true },
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
        mantinePaginationProps: {
            radius: 'xl',
            size: 'lg',
            color: 'yellow',
        },
        mantineSearchTextInputProps: {
            placeholder: searchPlaceholder,
        },
        selectAllMode: 'page',
        positionActionsColumn: 'last',

        renderRowActionMenuItems: () => RowActions,
        renderTopToolbar: ({ table }) => {
            return (
                <Flex p='md' justify='space-between'>
                    <Flex gap='xs'>
                        {/* import MRT sub-components */}
                        <MRT_ToggleFiltersButton table={table} />
                        <MRT_GlobalFilterTextInput table={table} />
                        {LeftButtons}
                    </Flex>
                    <Flex sx={{ gap: '8px' }}>
                        {RightButtons}
                        <MRT_ToggleFullScreenButton table={table} />
                    </Flex>
                </Flex>
            );
        },
    });

    return (
        <div className='m-4'>
            <Label className='font-[500] text-4xl'>{title}</Label>
            <div className='mt-[2.12rem]'>
                <MantineReactTable table={table} />
            </div>
        </div>
    );
};

export default TableMRT;
