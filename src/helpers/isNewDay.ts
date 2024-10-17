export default function isNewDay(date: Date) {
  const lastDate = new Date(date);
  const currentDate = new Date();

  lastDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);

  return lastDate.getTime() < currentDate.getTime();
}
