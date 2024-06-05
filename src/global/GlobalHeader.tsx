import Link from 'next/link';
import { Button } from '../shared/components/ui/button';
import PATH from '../shared/constants/path';

export default function GlobalHeader() {
  return (
    <header className="sticky top-0 flex h-[80px] w-full items-center gap-20 bg-foreground px-5">
      <section>
        <Link className="text-lg text-background" href={PATH.home}>
          BBANGLE ADMIN
        </Link>
      </section>
      <section className="flex gap-4">
        <Button asChild variant="link" className="text-background">
          <Link href={PATH.activate}>통계/분석</Link>
        </Button>
        <Button asChild variant="link" className="text-background">
          <Link href={PATH.user}>회원 관리</Link>
        </Button>
        <Button asChild variant="link" className="text-background">
          <Link href={PATH.review}>리뷰 관리</Link>
        </Button>
      </section>
    </header>
  );
}
