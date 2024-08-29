import {
  configRequest,
  requestAllMatches,
} from "@/config/api/premierLeague/config";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") ?? 0;
  const size = searchParams.get("size") ?? 40;

  try {
    const recentMatchesResp = await fetch(
      requestAllMatches(Number(page), Number(size)),
      configRequest
    );
    const data = await recentMatchesResp.json();

    if (!data)
      return Response.json(
        { message: "Cannot found any matches" },
        { status: 404 }
      );

    return Response.json({ matches: data.content }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "An error occurred" }, { status: 500 });
  }
}
