import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export const Container = forwardRef(({ children, className, ...rest }, ref) => {
  return (
    <div
      className={cn('mx-auto w-full max-w-6xl px-10', className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});

Container.displayName = 'Container';
