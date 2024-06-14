import moment from 'moment';

export const isDateInRange = ({ date, from, to }: { date: Date; from?: Date; to?: Date }) => {
  if (!from && !to) return false;

  const startOfToday = moment(from ?? to)
    .startOf('day')
    .toDate();
  const endOfToday = moment(to ?? from)
    .endOf('day')
    .toDate();

  return date >= startOfToday && date <= endOfToday;
};
