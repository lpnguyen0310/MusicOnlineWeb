import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";

export default function SongByCategoryPage() {
  return (
    <>
      {/* CardInfo */}
      <CardInfo 
        image="/demo/image-6.png"
        title="Nhạc Trẻ"
        description="Top 100 Nhạc trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc trẻ, được cập nhật hàng ngày. Những ca khúc nhạc trẻ hay nhất hiện nay, được yêu thích nhất hiện nay.
              Dữ liệu được lấy từ Zing MP3, một trong những trang nghe nhạc trực tuyến lớn nhất Việt Nam."
        link=""
      />

      {/* Section2 */}
      <Section2 />
    </>
  );
}