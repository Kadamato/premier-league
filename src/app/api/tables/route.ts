import {
  configRequest,
  requestAchievement,
} from "@/config/api/premierLeague/config";

export async function GET(
  req: Request
  //   { params }: { params: { weekId: string } }
) {
  const { searchParams } = new URL(req.url);
  //   const startDate = searchParams.get("startDate");
  //   const endDate = searchParams.get("endDate");

  try {
    const resp = await fetch(requestAchievement(), configRequest);
    const data = await resp.json();

    if (!data) {
      return Response.json({ message: "An error occurred" }, { status: 500 });
    }

    const tables = data.tables[0].entries;

    return Response.json({ tables: tables }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
