// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const res = await fetch(
//       "https://script.google.com/macros/s/AKfycbxkFYjecw6XXIYwZCI21Sfj2u8v6O2FedrQE9lW8XY3-CI_8bCn-m4gll-3wSYD30I/exec",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(body),
//       }
//     );

//     const text = await res.text(); // 👈 đổi từ json -> text

//     return NextResponse.json({
//       success: true,
//       raw: text,
//     });
//   } catch (err) {
//     return NextResponse.json({
//       success: false,
//       error: "API error",
//     });
//   }
// }