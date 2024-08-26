import { getMatchesOfTheWeek } from "@/config/api/premierLeague";

export async function GET(
  req: Request,
  { params }: { params: { weekId: string } }
) {
  try {
    const matches = await getMatchesOfTheWeek(params?.weekId || "");

    if (!matches) {
      return Response.json({ message: "An error occurred" }, { status: 500 });
    }

    return Response.json({ matches }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
