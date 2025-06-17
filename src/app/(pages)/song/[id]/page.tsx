import CardInfo from "@/app/components/card/CardInfo";
import Title from "@/app/components/title/Title";
import Section3 from "./Section3";
import Section1 from "./Section1";
import Section2 from "./Section2";

export default async function SongDetailPage({params} :any) {
   const { id } = await params;
  return (
    <>
      {/* Card info */}
      <Section1 id ={id} />
      {/* Lời Bài Hát  */}  
      <Section2 id={id} />

      {/* Bài hát cùng danh mục */}

      <Section3 id={id}/>
    </>
  );
}