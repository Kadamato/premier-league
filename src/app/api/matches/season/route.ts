import { getMatches } from "@/config/api/premierLeague";

export async function GET(req: Request) {
  try {
    const matches = await getMatches();

    if (!matches) {
      return Response.json({ message: "An error occurred" }, { status: 500 });
    }

    return Response.json({ matches }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
