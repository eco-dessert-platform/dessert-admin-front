'use client';

import useUserCountQueries from '@/src/domains/analysis/queries/useUserCountQueries';
import { Card, CardContent, CardHeader } from '@/src/shared/components/ui/card';

function UserCountSection() {
  const [{ data: allUser }, { data: newUser }] = useUserCountQueries();

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
