import { getScoreMatchesOfTheWeek } from "@/config/api/premierLeague";

export async function GET(
  req: Request,
  { params }: { params: { weekId: string } }
) {
  const { searchParams } = new URL(req.url);
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  try {
    const matches = await getScoreMatchesOfTheWeek(
      params?.weekId || "",
      startDate || "",
      endDate || ""
    );

    if (!matches) {
      return Response.json({ message: "An error occurred" }, { status: 500 });
    }

    return Response.json({ matches }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
