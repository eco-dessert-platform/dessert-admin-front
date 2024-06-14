'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
import { Button } from '../shared/components/ui/button';
import PATH from '../shared/constants/path';
import NavigationDrawer from './NavigationDrawer';
import { navigations } from './NavigationDrawer/constants';

export default function GlobalHeader() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <>
      <header className="sticky top-0 z-header flex h-[80px] w-full items-center gap-20 bg-background px-5 shadow">
        <section className="flex items-center gap-5">
          <Button
            className="sm:hidden"
            variant="outline"
            size="icon"
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon className="h-4 w-4" />
          </Button>
          <Link className="text-lg font-semibold" href={PATH.home.href}>
            BBANGLE ADMIN
          </Link>
        </section>
        <section className="hidden gap-4 sm:flex">
          {navigations.map(({ href, name }) => (
            <Button key={href} variant="link" asChild>
              <Link href={href}>{name}</Link>
            </Button>
          ))}
        </section>
      </header>
      <NavigationDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
}
