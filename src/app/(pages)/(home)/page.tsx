import SongItem from "@/app/components/song/SongItem";
import Title from "@/app/components/title/Title";
import Link from "next/link";
import { FaHeart, FaPlay } from "react-icons/fa6";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default function HomePage() {
  return (
    <>
      {/* Section 1: Banner Home*/}
      <Section1 />
      {/* Section 2: Danh mục nổi bật */}
      <Section2 />
      {/* Section 3: Ca sĩ nổi bật */}
      <Section3 />
    </>
  );
}
