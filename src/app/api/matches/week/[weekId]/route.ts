import { configRequest, requestMatchesOfTheWeek } from "@/config/api/premierLeague/config";

export async function GET(
  req: Request,
  { params }: { params: { weekId: string } }
) {
  try {
    const matchesOfWeekResp = await fetch(requestMatchesOfTheWeek(params.weekId), configRequest) ;
    const data = await matchesOfWeekResp.json();



    console.log(data)
    // if (!data) {
    //   return Response.json({ message: "Cannot found matches of the week" }, { status: 400 });
    // }

    return Response.json({ matches: data.content }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
