import * as React from 'react';
import { Minus, Plus } from 'lucide-react';
import { Bar, BarChart, ResponsiveContainer } from 'recharts';

import { Button } from '@/src/shared/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from '@/src/shared/components/ui/drawer';

import { navigations } from './constants';
import Link from 'next/link';
import PATH from '@/src/shared/constants/path';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavigationDrawer({ open, setOpen }: Props) {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

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
                <Button key={href} size={'lg'} variant="link" className="text-foreground">
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
