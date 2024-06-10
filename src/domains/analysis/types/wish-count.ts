export interface WishCountResponse {
  dateAndCount: { date: string; count: number }[];
  total: number;
  average: number;
}
