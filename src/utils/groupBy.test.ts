import { groupBy } from "./groupBy";

const list = [
  {
    id: Math.floor(Math.random() * 10),
    pubDatetime: new Date("2024-06-12T09:21:00.000+08:00"),
  },
  {
    id: Math.floor(Math.random() * 10),
    pubDatetime: new Date("2024-06-13T09:21:00.000+08:00"),
  },
  {
    id: Math.floor(Math.random() * 10),
    pubDatetime: new Date("2024-07-12T09:21:00.000+08:00"),
  },
  {
    id: Math.floor(Math.random() * 10),
    pubDatetime: new Date("2024-09-01T22:50:00.000+08:00"),
  },
  {
    id: Math.floor(Math.random() * 10),
    pubDatetime: new Date("2023-09-01T22:50:00.000+08:00"),
  },
];

const groupByYear = groupBy(list, item => {
  const year = item.pubDatetime.getFullYear();
  return year;
});

for (const year in groupByYear) {
  console.log("year", year);
  // @ts-ignore
  const yearGroup = groupByYear[year];
  console.log("yearGroup", yearGroup);
  const groupByMonth = groupBy(
    yearGroup,
    (item: any) => item.pubDatetime.getMonth() + 1
  );
  console.log("groupByMonth", groupByMonth);
}
