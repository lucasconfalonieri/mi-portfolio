import { FaAws, FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { BiLogoFirebase, BiLogoTypescript } from "react-icons/bi";
import { SiSelenium, SiSamsung, SiMysql, SiTerraform, SiExpo, SiTensorflow, SiSvelte } from "react-icons/si";

export const skillIcons = [
  { label: "AWS", Icon: FaAws },
  { label: "TypeScript", Icon: BiLogoTypescript },
  { label: "Selenium", Icon: SiSelenium },
  { label: "Node.js", Icon: FaNode },
  { label: "Svelte", Icon: SiSvelte },
  { label: "React", Icon: FaReact },
  { label: "MySQL", Icon: SiMysql },
  { label: "Firebase", Icon: BiLogoFirebase },
  { label: "Tizen", Icon: SiSamsung },
  { label: "Terraform", Icon: SiTerraform },
  { label: "Expo", Icon: SiExpo },
  { label: "TensorFlow", Icon: SiTensorflow },
] as const;
