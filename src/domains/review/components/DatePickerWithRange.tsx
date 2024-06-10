'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { ko } from 'date-fns/locale';

import { cn } from '@/src/shared/lib/utils';
import { Button } from '@/src/shared/components/ui/button';
import { Calendar } from '@/src/shared/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/src/shared/components/ui/popover';
import { useRecoilState, useRecoilValue } from 'recoil';
import { reviewCountChartFilterDates } from '../atoms';
import { ReviewChartData } from '../types';

export function DatePickerWithRange({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = useRecoilState(reviewCountChartFilterDates);

  // console.log(date);

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !date?.from && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date?.to ? (
                <>
                  {format(date.from, 'PPP', { locale: ko })} -{' '}
                  {format(date.to, 'PPP', { locale: ko })}
                </>
              ) : (
                format(date.from, 'PPP', { locale: ko })
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            locale={ko}
            defaultMonth={date?.from}
            selected={date}
            onSelect={(selected) => {
              if (!selected) return;

              setDate({
                from: selected?.from,
                to: selected?.to
              });
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
