'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/src/shared/lib/utils';
import { Button } from '@/src/shared/components/ui/button';
import { Calendar } from '@/src/shared/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/src/shared/components/ui/popover';
import { DateRange } from 'react-day-picker';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  dateRange: DateRange;
  onDateRangeChange: (dateRange: DateRange) => void;
}

export function DatePickerWithRange({ className, dateRange, onDateRangeChange }: Props) {
  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !dateRange?.from && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {/* eslint-disable-next-line no-nested-ternary */}
            {dateRange?.from ? (
              dateRange?.to ? (
                <>
                  {format(dateRange.from, 'PPP', { locale: ko })} -{' '}
                  {format(dateRange.to, 'PPP', { locale: ko })}
                </>
              ) : (
                format(dateRange.from, 'PPP', { locale: ko })
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
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={onDateRangeChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
