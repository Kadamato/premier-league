import { parse, format } from "date-fns";

export default function formatTime(time: string) {
  const date = parse(time, "EEE dd MMM yyyy", new Date());

  const formattedDate = format(date, "yyyy-MM-dd");

  return formattedDate;
}
