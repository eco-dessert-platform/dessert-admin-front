'use client';

import { dateFilterParamsState } from '@/src/domains/analysis/atoms/date-filter';
import {
  useAllUserCountQuery,
  useNewUserCountQuery
} from '@/src/domains/analysis/queries/useUserCountQueries';
import { Card, CardContent, CardHeader } from '@/src/shared/components/ui/card';
import { useRecoilValue } from 'recoil';

function UserCountSection() {
  const dateRange = useRecoilValue(dateFilterParamsState);
  const { data: newUser } = useNewUserCountQuery(dateRange);
  const { data: allUser } = useAllUserCountQuery();

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">유저 수</h1>
      <div className="flex gap-4">
        <Card className="w-80">
          <CardHeader>총 회원 수</CardHeader>
          <CardContent>{allUser?.count}</CardContent>
        </Card>
        <Card className="w-80">
          <CardHeader>신규 회원 수</CardHeader>
          <CardContent>{newUser?.count}</CardContent>
        </Card>
      </div>
    </section>
  );
}

export default UserCountSection;
