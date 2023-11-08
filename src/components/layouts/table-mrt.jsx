'use client';

import { Flex } from '@mantine/core';
import {
  MRT_GlobalFilterTextInput,
  MRT_ToggleFiltersButton,
  MRT_ToggleFullScreenButton,
  MantineReactTable,
  useMantineReactTable,
} from 'mantine-react-table';
import { useEffect, useMemo, useState } from 'react';

import Loader from '../component/loader';
import { Label } from '../ui/label';

// * title -> string, defines the title of the table
// * searchPlaceholder -> string, defines the placeholder text for the search input
// * isCheckBoxVisible -> boolean, defines whether the checkbox is visible or not --> default is false
// * isRowNumbersVisible -> boolean, defines whether the row numbers are visible or not --> default is false
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

// * RightButtons -> JSX, defines the JSX for the buttons on the right side of the table
// * LeftButtons -> JSX, defines the JSX for the buttons on the left side of the table

// ! to populate the data prop, fetch data from server on the parent component and pass it as a prop to this component
// TODO: Handle checkbox selection

const TableMRT = ({
  title,
  searchPlaceholder,
  data,
  template,
  isCheckBoxVisible = false,
  isRowNumbersVisible = false,

  // JSX Props
  RightButtons,
  LeftButtons,
  RowActions,
}) => {
  const columns = useMemo(() => template, [template]);
  const [fade, setFade] = useState(false);

  const table = useMantineReactTable({
    columns,
    data: data,
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableFacetedValues: true,
    enableGrouping: true,
    enablePinning: true,
    enableRowActions: RowActions ? true : false,
    enableRowSelection: isCheckBoxVisible ? true : false,
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

    enableRowNumbers: isRowNumbersVisible,

    renderRowActionMenuItems: () => {
      return (
        <div className='flex flex-col w-[14.75rem]'>
          <Label className='my-[0.62rem] ml-4 font-bold'>Actions</Label>
          {RowActions}
        </div>
      );
    },
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

  useEffect(() => {
    setFade(true);
  }, [fade]);

  if (!fade) {
    return <Loader />;
  }

  return (
    <div className='my-4'>
      <Label className='font-[500] text-4xl'>{title}</Label>
      <div className='mt-[2.12rem]'>
        <div className='transition-all duration-1000'>
          <MantineReactTable table={table} />
        </div>
      </div>
    </div>
  );
};

export default TableMRT;
