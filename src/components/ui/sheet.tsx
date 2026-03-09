import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { cn } from '../../lib/utils';

export function Sheet({ children }: { children: React.ReactNode }) {
  return <Dialog.Root>{children}</Dialog.Root>;
}

export function SheetTrigger(
  props: React.ComponentPropsWithoutRef<typeof Dialog.Trigger>,
) {
  return <Dialog.Trigger {...props} />;
}

export function SheetContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/40" />
      <Dialog.Content
        className={cn(
          'fixed inset-y-0 right-0 z-50 p-6 w-80 bg-[hsl(var(--muted))] shadow-xl outline-none',
          className,
        )}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export function SheetHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-between items-center mb-4">{children}</div>
  );
}

export function SheetTitle({ children }: { children: React.ReactNode }) {
  return (
    <Dialog.Title className="text-lg font-medium">{children}</Dialog.Title>
  );
}

export function SheetClose(
  props: React.ComponentPropsWithoutRef<typeof Dialog.Close>,
) {
  return <Dialog.Close {...props} />;
}
