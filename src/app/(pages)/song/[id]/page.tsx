import CardInfo from "@/app/components/card/CardInfo";
import Title from "@/app/components/title/Title";
import Section3 from "./Section3";

export default function SongDetailPage() {
  return (
    <>
      {/* Card info */}
      <CardInfo 
        image="/demo/image-6.png"
        title="Cô Phòng"
        description="Hồ Quang Hiếu, Huỳnh Văn"
        link=""
      />
      {/* Lời Bài Hát  */}  
      <div className="mt-[30px]">
        <Title text="Lời bài hát" />
        <div className="bg-[#212121] rounded-[15px] p-[20px] text-white font-[500]  text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, placeat labore veritatis dignissimos reiciendis explicabo fugit, laboriosam accusantium tempore nihil delectus cumque illum asperiores doloribus accusamus animi! Similique, accusantium et.
        </div>
      </div>

      {/* Bài hát cùng danh mục */}

      <Section3 />
    </>
  );
}