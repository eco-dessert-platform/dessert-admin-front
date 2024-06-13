import { PropsWithChildren } from 'react';
import AnalysisTab from './_blocks/AnalysisTab';
import DateFilter from './_blocks/DateFilter';

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="my-10 flex w-full flex-col ">
      <div className="z-header sticky top-32 flex items-center justify-between">
        <AnalysisTab />
        <DateFilter />
      </div>
      {children}
    </div>
  );
}

export default Layout;
