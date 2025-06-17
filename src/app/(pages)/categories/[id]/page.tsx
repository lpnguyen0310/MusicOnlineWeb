import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import SectionCard from "./SectionCard";

export default async function SongByCategoryPage({params} :any) {

  const { id } = await params;
  console.log("Category ID:", id);

  return (
    <>
      {/* CardInfo */}
      <SectionCard id ={id} />

      {/* Section2 */}
      <Section2 id={id} />
    </>
  );
}