'use client';

import { Flex, MantineProvider } from '@mantine/core';
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
// * description -> string, defines the description of the table
// * searchPlaceholder -> string, defines the placeholder text for the search input
// * isCheckBoxVisible -> boolean, defines whether the checkbox is visible or not --> default is false
// * isRowNumbersVisible -> boolean, defines whether the row numbers are visible or not --> default is false
// * isFullscreen -> boolean, defines whether the fullscreen button is visible or not --> default is true
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

function TableMRT({
  title,
  description, // Added description
  searchPlaceholder,
  data,
  template, // NOTE: it is important to make the first element of the template to be the id of the row
  isCheckBoxVisible,
  isRowNumbersVisible,
  isFullscreen = true, // show by default
  // JSX Props
  RightButtons,
  LeftButtons,
  // state -> this is required when isCheckBoxVisible is true
  setRowSelection,
  rowSelection,

  // mantine-react-table property -> defines the actions per row
  renderRowActionMenuItems,
}) {
  const columns = useMemo(() => template, [template]);
  const [rowSelectionHandler, setRowSelectionHandler] = useState({}); // to avoid error when rowSelection and setRowSelection is undefined
  const [isDomLoaded, setIsDomLoaded] = useState(false);

  const table = useMantineReactTable({
    columns,
    data: data,
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableFacetedValues: true,
    enableFullScreenToggle: false,
    // enableGrouping: true, // This is what causing the console error
    enablePinning: true,
    enableRowActions: renderRowActionMenuItems ? true : false,
    enableRowSelection: isCheckBoxVisible ? true : false,
    getRowId: (originalRow) =>
      isCheckBoxVisible ? originalRow[template[0].accessorKey] : null,
    state: {
      rowSelection:
        rowSelection === undefined ? rowSelectionHandler : rowSelection,
      isLoading: !isDomLoaded,
    },
    onRowSelectionChange:
      setRowSelection === undefined ? setRowSelectionHandler : setRowSelection,

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

    renderRowActionMenuItems: renderRowActionMenuItems,
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
            {isFullscreen && <MRT_ToggleFullScreenButton table={table} />}
          </Flex>
        </Flex>
      );
    },
  });

  useEffect(() => {
    setIsDomLoaded(true);
  }, []);

  if (!isDomLoaded) return <Loader />;

  return (
    <div className='my-4'>
      <Label className='font-medium text-2xl'>{title}</Label>
      <p className='text-sm text-zinc-400'>{description}</p>
      <div className='mt-4'>
        <div className='transition-all duration-1000'>
          {/* Changed theme to our design colors */}
          <MantineProvider
            theme={{
              primaryColor: 'yellow',
              primaryShade: 8,
              colors: {
                yellow: [
                  '#5F370E',
                  '#975A16',
                  '#B7791F',
                  '#D69E2E',
                  '#ECC94B',
                  '#F6E05E',
                  '#FAF089',
                  '#FEFCBF',
                  '#FACC15',
                  '#EAB308',
                ],
                gray: [
                  '#F9FAFB',
                  '#F3F4F6',
                  '#E5E7EB',
                  '#D1D5DB',
                  '#9CA3AF',
                  '#6B7280',
                  '#4B5563',
                  '#374151',
                  '#1F2937',
                  '#111827',
                ],
                dark: [
                  '#111827',
                  '#1F2937',
                  '#374151',
                  '#4B5563',
                  '#6B7280',
                  '#9CA3AF',
                  '#D1D5DB',
                  '#E5E7EB',
                  '#F3F4F6',
                  '#F9FAFB',
                ],
                white: [
                  '#FFFFFF',
                  '#E6E6E6',
                  '#CCCCCC',
                  '#B3B3B3',
                  '#999999',
                  '#808080',
                  '#666666',
                  '#4D4D4D',
                  '#333333',
                  '#1A1A1A',
                ],

                black: [
                  '#000000',
                  '#262626',
                  '#4C4C4C',
                  '#737373',
                  '#999999',
                  '#C0C0C0',
                  '#E6E6E6',
                  '#F2F2F2',
                  '#FFFFFF', // Color being used
                ],
              },
            }}
          >
            <MantineReactTable table={table} />
          </MantineProvider>
        </div>
      </div>
    </div>
  );
}

export default TableMRT;
