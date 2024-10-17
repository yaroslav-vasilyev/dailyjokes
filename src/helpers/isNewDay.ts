export default function isNewDay(dateTime: number) {
  const lastDate = new Date(dateTime);
  const currentDate = new Date();

  lastDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);

  return lastDate.getTime() < currentDate.getTime();
}
