export const gradAssessmentHistoryTemplate = [
  // yearTerm, totalTuition, paidAmount, balance
  {
    accessorKey: 'yearTerm',
    id: 'yearTerm',
    header: 'Year/Term',
    filterVariant: 'multi-select',
  },
  {
    accessorKey: 'totalTuition',
    id: 'totalTuition',
    header: 'Total Tuition',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'paidAmount',
    id: 'paidAmount',
    header: 'Paid Amount',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'balance',
    id: 'balance',
    header: 'Balance',
    filterVariant: 'fuzzy',
  },
];
