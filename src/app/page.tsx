import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <h1>Hello</h1>
      <Image src={`${process.env.R2_PUBLIC_URL}/nextobject/userId/17.png`} alt="Image" width={300} height={300}/>
    </main>
  );
}
