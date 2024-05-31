import UserCountCard from '@/src/domains/user/components/UserCountCard';
import userService from '@/src/domains/user/queries/service';

async function UserPage() {
  const allUserCount = await userService.getAllUserCount();

  return (
    <>
      <UserCountCard title="총 회원 수" count={allUserCount.memberCount} />
    </>
  );
}

export default UserPage;
