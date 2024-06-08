import UserCountSection from './_blocks/UserCountSection';
import WishCountChart from './_blocks/WishCountChart';

function UserActivatePage() {
  return (
    <section className="flex flex-col gap-20">
      <UserCountSection />
      <WishCountChart />
    </section>
  );
}

export default UserActivatePage;
