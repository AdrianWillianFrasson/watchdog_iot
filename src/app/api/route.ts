import { type NextRequest } from "next/server";

// ----------------------------------------------------------------------------
export async function GET(_request: NextRequest) {
  try {
    const response = await fetch(`${process.env.GOOGLE_SCRIPT_URL}?data=true`, { method: "GET" });

    if (response.ok) {
      const data = await response.json().catch((_) => ({}));
      return Response.json(data, { status: 200 });
    } else {
      return new Response("Error!", { status: response.status });
    }
  } catch (error) {
    console.log(`[ERROR] [/api] (GET): ${error}`);
    return new Response("Error!", { status: 400 });
  }
}
