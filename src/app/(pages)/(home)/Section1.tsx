import SongItem from "@/app/components/song/SongItem";
import Title from "@/app/components/title/Title";

export default function Section1() {
    return (
      <>
            <div className="flex items-start ">
        {/* khối bên trái */}
        <div className="w-[534px]">
          <div className="flex items-center rounded-[15px] bg-cover w-full "
            style={{ backgroundImage: "url('/demo/banner.png')" }}>
            <div className="flex-1 ml-[30px] mr-[34px]">
              <div className="font-[700] text-[32px] text-white">
                EDM
              </div>
              <div className="font-[500] text-[14px] text-white text-opacity-70 mt-[6px]">
                Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
              </div>
            </div>
            <div className="w-[215px] mr-[24px] mt-[40px]">
              <img
                src="/demo/image-2.png"
                alt="Nhạc"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        {/* khối bên phải */}
        <div className="ml-[20px] flex-1">
            <Title text="Nghe Nhiều" />
          <div className="grid grid-cols-1 gap-[8px]">
            {/* Items */}
            <SongItem 
              image ="/demo/image-3.png"
              title="Cô Phòng"
              singer="Hồ Quang Hiếu, Hòa Minzy"
              listen={245000}
            />

            <SongItem 
              image ="/demo/image-4.png"
              title="Hoa Nở Bên Đường"
              singer="Quang Đăng Tuấn, ACV"
              listen={205000}
            />

            <SongItem 
              image ="/demo/image-5.png"
              title="Cô Phòng"
              singer="Lâm Tuấn Vương, Thiên Tuấn"
              listen={245000}
            />
            {/* End Items */}
          </div>
        </div>
      </div>
      </>
    );
}   