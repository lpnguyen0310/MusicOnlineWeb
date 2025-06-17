import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";

export default  function SingerDetailPage() {
 
  return (
    <>
      <CardInfo 
        image="/demo/image-6.png"
        title="Sơn Tùng M-TP"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      {/* Section2: Danh sách bài hát của ca sĩ */}
      <Section2 />
    </>
  );
}