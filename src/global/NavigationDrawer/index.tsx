import * as React from 'react';

import Link from 'next/link';
import { Button } from '@/src/shared/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle
} from '@/src/shared/components/ui/drawer';

import { navigations } from './constants';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavigationDrawer({ open, setOpen }: Props) {
  return (
    <Drawer open={open} onOpenChange={setOpen} direction="left">
      <DrawerContent className="mr-14">
        <div className="h-screen w-full max-w-sm py-5">
          <DrawerHeader>
            <DrawerTitle>BBANGLE ADMIN</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <section className="flex flex-col gap-2">
              {navigations.map(({ href, name }) => (
                <Button key={href} size="lg" variant="link" className="text-foreground">
                  <Link href={href}>{name}</Link>
                </Button>
              ))}
            </section>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
