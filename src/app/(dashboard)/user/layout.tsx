import UserTab from '@/src/blocks/user/UserTab';
import { PropsWithChildren } from 'react';

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex w-full flex-col">
      <UserTab />
      {children}
    </div>
  );
}

export default Layout;
