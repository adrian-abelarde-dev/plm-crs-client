import TableMRT from '@/components/layouts/table-mrt';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
    fakeCollegeStudents,
    fakeCollegeStudentsRowActions,
} from '@/lib/constants/fake-table-data';

const TestingOnly = () => {
    const template = [
        {
            accessorKey: 'studentNumber',
            id: 'email',
            header: 'Email',
            filterVariant: 'autocomplete',
        },
        {
            accessorKey: 'firstName',
            id: 'firstName',
            header: 'First Name',
            filterVariant: 'fuzzy',
        },
        {
            accessorKey: 'middleName',
            id: 'middlName',
            header: 'Middle Name',
            filterVariant: 'fuzzy',
        },
        {
            accessorKey: 'lastName',
            id: 'lastName',
            header: 'Last Name',
            filterVariant: 'fuzzy',
        },
        {
            accessorKey: 'registrationCode',
            id: 'registrationCode',
            header: 'Registration Code',
            filterVariant: 'select',
        },
    ];

    return (
        <div>
            <TableMRT
                template={template}
                data={fakeCollegeStudents}
                title={'Students'}
                searchPlaceholder={'Search students'}
                RightButtons={
                    <Button
                        className='bg-[#FBBF24] text-[#0F172A]'
                        variant='outline'
                    >
                        Add Class
                    </Button>
                }
                LeftButtons={
                    <Button
                        className='bg-[#FBBF24] text-[#0F172A]'
                        variant='outline'
                    >
                        Shit
                    </Button>
                }
                RowActions={
                    <div className='flex flex-col w-[14.75rem]'>
                        <Label className='my-[0.62rem] ml-3 font-bold'>
                            Actions
                        </Label>

                        {fakeCollegeStudentsRowActions.map((rowAction) => {
                            return (
                                <Button
                                    key={rowAction}
                                    className='text-[#0F172A] justify-start'
                                    variant='ghost'
                                >
                                    {rowAction}
                                </Button>
                            );
                        })}
                    </div>
                }
            />
        </div>
    );
};

export default TestingOnly;
