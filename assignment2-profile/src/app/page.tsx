import Image from "next/image";
import picture from "./data/pic.jpeg"
export default function Home() {
  return (
    <div className="flex justify-around font-bold">
    <div>
    <h1 className="text-3xl pt-40">Hello It's me</h1>
    <h1 className="text-7xl pt-10"> <span> Maheen Sheikh</span> </h1>
    <h1 className="text-4xl pt-5">And I'm a <span className="text-orange-400"> Frontend Developer</span> </h1>
    </div>
    <div className="imagecontainer">
        <Image className="rounded-full"
          src={picture}
          alt={"maheen"}
          width={400}
          height={400}
        />
    </div>
  </div>
  );
}
