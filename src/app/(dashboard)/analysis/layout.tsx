import { PropsWithChildren } from 'react';
import AnalysisTab from './_blocks/AnalysisTab';

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex w-full flex-col">
      <AnalysisTab />
      {children}
    </div>
  );
}

export default Layout;
