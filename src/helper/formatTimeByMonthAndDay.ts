import { parseISO, format } from "date-fns";

//  format month and day

export default function formatTimeByMonthAndDay(time: string) {
  const date = parseISO(time);

  const formattedDate = format(date, "MMMM d");

  return formattedDate;
}
