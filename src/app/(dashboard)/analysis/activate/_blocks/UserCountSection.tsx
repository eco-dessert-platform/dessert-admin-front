import userService from '@/src/domains/user/queries/service';
import { Card, CardContent, CardHeader } from '@/src/shared/components/ui/card';

async function UserCountSection() {
  const [{ memberCount: allMemberCount }, { memberCount: newMemberCount }] = await Promise.all([
    userService.getAllUserCount(),
    userService.getNewUserCount()
  ]);

  return (
    <section className="flex gap-4">
      <Card className="w-80">
        <CardHeader>총 회원 수</CardHeader>
        <CardContent>{allMemberCount}</CardContent>
      </Card>
      <Card className="w-80">
        <CardHeader>총 회원 수</CardHeader>
        <CardContent>{newMemberCount}</CardContent>
      </Card>
    </section>
  );
}

export default UserCountSection;
