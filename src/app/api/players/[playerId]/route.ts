import { getPlayerInfo } from "@/config/api/premierLeague";

export async function GET(
  req: Request,
  { params }: { params: { playerId: string } }
) {
  try {
    const info = await getPlayerInfo(params?.playerId || "");

    if (!info) {
      return Response.json({ message: "An error occurred" }, { status: 500 });
    }

    return Response.json({ playerInfo: info }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
