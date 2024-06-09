'use client';

import { Tabs, TabsList, TabsTrigger } from '@/src/shared/components/ui/tabs';
import PATH from '@/src/shared/constants/path';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function AnalysisTab() {
  const { inflow, activate, revenue, recommendation, revisit } = PATH;
  const pathname = usePathname();

  return (
    <Tabs value={pathname} className="mb-4">
      <TabsList>
        <TabsTrigger value={inflow.href} asChild>
          <Link href={inflow.href}>{inflow.name}</Link>
        </TabsTrigger>
        <TabsTrigger value={activate.href} asChild>
          <Link href={activate.href}>{activate.name}</Link>
        </TabsTrigger>
        <TabsTrigger value={revisit.href} asChild>
          <Link href={revisit.href}>{revisit.name}</Link>
        </TabsTrigger>
        <TabsTrigger value={revenue.href} asChild>
          <Link href={revenue.href}>{revenue.name}</Link>
        </TabsTrigger>
        <TabsTrigger value={recommendation.href} asChild>
          <Link href={recommendation.href}>{recommendation.name}</Link>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default AnalysisTab;
