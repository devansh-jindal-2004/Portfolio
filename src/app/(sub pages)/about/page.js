import Image from "next/image";
import bg from "../../../../public/background/about-background.png"
import RenderModel from "@/components/RenderModel";
import Hat from "@/components/models/Hat";

export default function About() {
  return (
    <>
      <Image src={bg} alt="background image" className="-z-50 w-full fixed top-0 left-0 h-full object-center object-cover opacity-25" />
      <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <Hat />
        </RenderModel>

      </div>
    </>
  );
}
