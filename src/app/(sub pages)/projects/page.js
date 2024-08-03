import Image from "next/image";
import bg from "../../../../public/background/projects-background.png"
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Staff from "@/components/models/Wand";

export default function projects() {
  return (
    <>
      <Image src={bg} alt="background image" className="-z-50 w-full fixed top-0 left-0 h-full object-center object-cover opacity-25" />

      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-20 -left-24 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>

      </div>
    </>
  );
}
