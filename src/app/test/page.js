import TableMRT from '@/components/layouts/table-mrt';
import { Button } from '@/components/ui/button';
import {
    fakeCollegeStudents,
    fakeCollegeStudentsRowActions,
    template,
} from '@/lib/constants/fake-table-data';

const TestingOnly = () => {
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
                    <Button className=' text-[#0F172A]' variant='outline'>
                        Click
                    </Button>
                }
                RowActions={
                    <>
                        {fakeCollegeStudentsRowActions.map((rowAction) => {
                            return (
                                <Button
                                    key={rowAction.label}
                                    className='text-[#0F172A] justify-between'
                                    variant='ghost'
                                >
                                    {rowAction.label}
                                    {rowAction.icon}
                                </Button>
                            );
                        })}
                    </>
                }
            />
        </div>
    );
};

export default TestingOnly;
