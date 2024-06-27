import { uploadFile } from "@/services/file.services";
import { NextRequest } from "next/server";
// import { z } from "zod";

// const bodySchema = z.object({
//   file: z.instanceof(File),
// });

export async function PUT(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File; // FormEntry || null -> String | File

  console.log(file);

  await uploadFile({
    key: file.name,
    folder: "userId",
    body: file,
  })

  return Response.json({ message: "OK" });
}
