const obj = Object();
type GroupKey = keyof typeof obj;
// eslint-disable-next-line no-unused-vars
type Callback<T> = (item: T, index?: number) => GroupKey;

function groupBy<T>(list: T[], callback: Callback<T>): Record<keyof T, T[]> {
  const res: Record<GroupKey, T[]> = {};
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const groupKey = callback(item, i);
    if (!res[groupKey]) {
      res[groupKey] = [];
    }
    res[groupKey].push(item);
  }
  return res;
}

export { groupBy };
