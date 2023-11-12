import { Loader2 } from 'lucide-react';

function Loader() {
  return (
    <section className='w-full h-screen flex justify-center items-center'>
      <Loader2 className='w-10 h-10 animate-spin' />
    </section>
  );
}
export default Loader;
