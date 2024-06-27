import { S3Client } from "@/utils/aws";
import { PutObjectCommand } from "@aws-sdk/client-s3";

interface Props {
  key: string;
  folder: string;
  body: File;
}

export async function uploadFile(args: Props) {
  // get value from arguments
  const { key, folder, body } = args;

  // convert File to Buffer (a place to format integer / small chunk)
  const bytes = await body.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // upload to S3
  try {
    const upload = await S3Client.send(
      new PutObjectCommand({
        Bucket: "nextobject",
        Key: `${folder}/${key}`, // id/file.png -> perlu folder
        ContentType: body.type, // specify as spesific content, not application/octet (otomatic download)
        Body: buffer,
      })
    );
    console.log(upload);
  } catch (error) {
    console.log(error);
  }
}
