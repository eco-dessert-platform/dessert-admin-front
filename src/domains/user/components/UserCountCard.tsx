import { Card, CardContent, CardHeader } from '@/src/shared/components/ui/card';

interface Props {
  title: string;
  count: number;
}

function UserCountCard({ title, count }: Props) {
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardContent>{count}</CardContent>
    </Card>
  );
}

export default UserCountCard;
