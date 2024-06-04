import GlobalHeader from '@/src/global/GlobalHeader';

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GlobalHeader />
      <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:p-24">
        {children}
      </main>
    </>
  );
}
