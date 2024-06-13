'use client';

import { dateFilterParamsState } from '@/src/domains/analysis/atoms/date-filter';
import useUserCountQueries from '@/src/domains/analysis/queries/useUserCountQueries';
import { Card, CardContent, CardHeader } from '@/src/shared/components/ui/card';
import { useRecoilValue } from 'recoil';

function UserCountSection() {
  const dateRange = useRecoilValue(dateFilterParamsState);
  const [{ data: allUser }, { data: newUser }] = useUserCountQueries(dateRange);

  return (
    <section className="flex gap-4">
      <Card className="w-80">
        <CardHeader>총 회원 수</CardHeader>
        <CardContent>{allUser?.memberCount}</CardContent>
      </Card>
      <Card className="w-80">
        <CardHeader>신규 회원 수</CardHeader>
        <CardContent>{newUser?.memberCount}</CardContent>
      </Card>
    </section>
  );
}

export default UserCountSection;
