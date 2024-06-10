import GlobalHeader from '@/src/global/GlobalHeader';
import RootLayoutProvider from '@/src/global/RootLayoutProvider';

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootLayoutProvider>
      <>
        <GlobalHeader />
        <main className="flex min-h-screen flex-col items-center justify-start p-5 sm:p-10">
          {children}
        </main>
      </>
    </RootLayoutProvider>
  );
}
