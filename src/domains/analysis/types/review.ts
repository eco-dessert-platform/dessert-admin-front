export interface ReviewChartData {
  date: string;
  value: number;
}

export interface ReviewCount {
  dateAndCount: { date: string; count: number }[];
  total: number;
  average: number;
}

export type ReviewAccCount = {
  date: string;
  count: number;
}[];
