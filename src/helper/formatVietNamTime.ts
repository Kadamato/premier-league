import { parse, format, addHours } from "date-fns";

//  format hour and minute from BST to Vietnam time

export default function formatVietNamTime(time: string) {
  const bstDate = parse(time, "HH:mm", new Date());

  const utcDate = addHours(bstDate, -1);

  const vietnamTime = addHours(utcDate, 7);

  const formattedTime = format(vietnamTime, "HH:mm");

  return formattedTime;
}
