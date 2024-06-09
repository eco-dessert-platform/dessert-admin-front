'use client';

import * as React from 'react';

import { Button } from '@/src/shared/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/src/shared/components/ui/card';
import { Input } from '@/src/shared/components/ui/input';
import { Label } from '@/src/shared/components/ui/label';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

type FormData = {
  id: string;
  password: string;
};

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: any) => {
    // TODO: authentication process
    console.log({ data });
    router.push('/');
  };

  return (
    <Card className="w-[350px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader className="flex-row gap-1">
          <Image src="/favicon.ico" alt="favicon" width={32} height={32} />
          <CardTitle>BBANGLE ADMIN</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="id">ID</Label>
              <Input id="id" placeholder="ID" {...register('id', { required: true })} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                {...register('password', { required: true })}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="submit">LOGIN</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
