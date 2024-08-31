export default function formatVietNamTimeV3(time: string) {
  let minutes = time.split("'")[0];

  minutes = parseInt(minutes, 10).toString();

  return `${minutes}'`;
}
