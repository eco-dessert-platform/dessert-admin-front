export const analysisQueryKey = {
  all: ['chart'],
  wishes: () => [...analysisQueryKey.all, 'wish'],
  wish: (filter: Object) => [...analysisQueryKey.wishes(), 'wish', filter],

  users: () => [...analysisQueryKey.all, 'user'],
  user: (filter: Object) => [...analysisQueryKey.users(), filter],

  reviews: () => [...analysisQueryKey.all, 'review'],
  review: (filter: Object) => [...analysisQueryKey.reviews(), filter]
};
