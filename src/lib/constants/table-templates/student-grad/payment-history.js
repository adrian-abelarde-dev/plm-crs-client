export const gradPaymentHistoryTemplate = [
  {
    accessorKey: 'paidInstallment',
    id: 'paidInstallment',
    header: 'Paid/Installment',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'modeOfPayment',
    id: 'modeOfPayment',
    header: 'Mode of Payment',
    filterVariant: 'multi-select',
  },
  {
    accessorKey: 'yearTerm',
    id: 'yearTerm',
    header: 'Year/Term',
    filterVariant: 'multi-select',
  },
  {
    accessorKey: 'datePaid',
    id: 'datePaid',
    header: 'Date Paid',
    filterVariant: 'date',
  },
  {
    accessorKey: 'paidAmount',
    id: 'paidAmount',
    header: 'Paid Amount',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'excess',
    id: 'excess',
    header: 'Excess',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'status',
    id: 'status',
    header: 'Status',
    filterVariant: 'select',
  },
];
