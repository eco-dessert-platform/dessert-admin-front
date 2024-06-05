'use client';

import { Tabs, TabsList, TabsTrigger } from '@/src/shared/components/ui/tabs';
import PATH from '@/src/shared/constants/path';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function AnalysisTab() {
  const pathname = usePathname();
  return (
    <Tabs value={pathname} className="mb-4">
      <TabsList>
        <TabsTrigger value={PATH.inflow} asChild>
          <Link href={PATH.inflow}>유입</Link>
        </TabsTrigger>
        <TabsTrigger value={PATH.activate} asChild>
          <Link href={PATH.activate}>활성화</Link>
        </TabsTrigger>
        <TabsTrigger value={PATH.revisit} asChild>
          <Link href={PATH.revisit}>재방문</Link>
        </TabsTrigger>
        <TabsTrigger value={PATH.revenue} asChild>
          <Link href={PATH.revenue}>수익</Link>
        </TabsTrigger>
        <TabsTrigger value={PATH.recommendation} asChild>
          <Link href={PATH.recommendation}>추천</Link>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default AnalysisTab;
