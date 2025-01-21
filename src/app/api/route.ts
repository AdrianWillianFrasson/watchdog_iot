import { type NextRequest } from "next/server";

// ----------------------------------------------------------------------------
export async function GET(_request: NextRequest) {
  try {
    const response = await fetch(`${process.env.GOOGLE_SCRIPT_URL}?data=true`, { method: "GET" });

    if (response.ok) {
      const data = await response.json().catch((_) => ({}));
      return Response.json(data, { status: 200 });
    }
  } catch (error) {
    console.log(`[ERROR] GET: ${error}`);
    return new Response("Error!", { status: 400 });
  }
}
