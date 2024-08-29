import { format, addHours, parse } from "date-fns";

export default function formatVietNamTimeV2(time: string) {
  // time = time.split(",")[0] + " " + time.split(",")[1].split(" ")[0];
  const dayTime = time.split(",")[0];
  const bstHourTime = time.split(",")[1];
  const hourTime = bstHourTime.split(" ")[1];

  const date = parse(dayTime, "EEE dd MMM yyyy", new Date());

  const formattedDate = format(date, "yyyy-MM-dd");

  const newTime = `${formattedDate} ${hourTime}`;

  const date1 = parse(newTime, "yyyy-MM-dd HH:mm", new Date());
  const vietnamDate = addHours(date1, 7);

  let formattedDate1 = format(vietnamDate, "'Th' e, dd/MM");
  formattedDate1 = formattedDate1.replace("Th 1", "Cn");

  return formattedDate1;
}
