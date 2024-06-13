export const analysisQueryKey = {
  all: ['chart'],
  wish: () => [...analysisQueryKey.all, 'wish'],

  users: () => [...analysisQueryKey.all, 'user'],
  user: (filter: string) => [...analysisQueryKey.users(), filter],

  reviews: () => [...analysisQueryKey.all, 'review'],
  review: (filter: string) => [...analysisQueryKey.reviews(), filter]
};
