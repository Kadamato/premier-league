import { parseISO, format } from "date-fns";

export default function formatTimeByMonthAndDay(time: string) {
  const date = parseISO(time);

  const formattedDate = format(date, "MMMM d");

  return formattedDate;
}
