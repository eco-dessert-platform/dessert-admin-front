import DemoTable from '../domains/demo/tables/DemoTable';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:p-24">
      <DemoTable />
    </main>
  );
}
