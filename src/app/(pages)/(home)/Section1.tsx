"use client";
import SongItem from "@/app/components/song/SongItem";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
export default function Section1() {
  const [dataFinal, setDataFinal] = useState<any>();

  useEffect(() => {
    const songsRef = ref(dbFirebase, 'songs');
    onValue(songsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {

        // Lặp qua bảng singerId xong tìm bản ghi ca sĩ có id đó
        

        // Chuyển đổi dữ liệu từ object sang mảng
        // Object.keys(data) sẽ lấy tất cả các key của object lặp qua từng key của  object
        let songsArray = Object.keys(data).map(key => ({
          id: key,
          // ...data[key]
          image: data[key].image,
          title: data[key].title,
          singer: "",
          listen: data[key].listen || 0,
          singerId: data[key].singerId,
          link: `/song/${key}`
        }));
        // Nên làm ở BE
        songsArray = songsArray.splice(0, 3); // Lấy 3 phần tử đầu tiên
        setDataFinal(songsArray);
        console.log(songsArray);
      }
    })

  }, []);
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
            {dataFinal && (
              <>
                {dataFinal.map((item:any) => (
                  <SongItem
                    key = {item.id}
                    image={item.image}
                    title={item.title}
                    singer={item.singer}
                    listen={item.listen}
                    link={item.link}
                  />
                ))}
              </>
            )}

          </div>
        </div>
      </div>
    </>
  );
}   