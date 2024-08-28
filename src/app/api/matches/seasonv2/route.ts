import {
  configRequest,
  requestAllMatches,
} from "@/config/api/premierLeague/config";

export async function GET(req: Request) {
  //   const { searchParams } = new URL(req.url);
  //   const page = Number(searchParams.get("page")) || 0;
  //   const size = Number(searchParams.get("size")) || 2;

  try {
    const recentMatchesResp = await fetch(requestAllMatches(), configRequest);
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
