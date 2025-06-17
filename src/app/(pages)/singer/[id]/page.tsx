import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import Section1 from "./Section1";

export default async function SingerDetailPage({params} :any) {
  const { id } = params;
  return (
    <>
    {/* Section1: SingerInfo */}
      <Section1 id={id}/>

      {/* Section2: Danh sách bài hát của ca sĩ */}
      <Section2 id ={id}/>
    </>
  );
}