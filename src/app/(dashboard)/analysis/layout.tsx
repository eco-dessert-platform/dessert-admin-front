import AnalysisTab from '@/src/blocks/analysis/AnalysisTab';
import { PropsWithChildren } from 'react';

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex w-full flex-col">
      <AnalysisTab />
      {children}
    </div>
  );
}

export default Layout;
