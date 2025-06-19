"use client";
import SongItem from "@/app/components/song/SongItem";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import SongItemSkeleton from "./SongItemSkeleton";
export default function Section1() {
  const [dataFinal, setDataFinal] = useState<any>();
  // Áp dụng loading-sle

  useEffect(() => {
    const songsRef = ref(dbFirebase, 'songs');
    // Lấy data từ bảng songs
    const singerRef = ref(dbFirebase, 'singers');

    // Lấy dữ liệu từ bảng songs
    onValue(singerRef, (singerSnapshot) => {
      const singerData = singerSnapshot.val();
      if (singerData) {
        // Nếu có dữ liệu ca sĩ, tiếp tục lấy dữ liệu bài hát
        onValue(songsRef, (snapshot) => {
          const data = snapshot.val();
          if (data && singerData) {
            let songsArray = Object.keys(data).map(key => {
              // Lấy thông tin bài hát từ data
              const song = data[key];
              // Lặp qua song.id để lấy thông tin ca sĩ
              const  singersName = [];
              // Kiểm tra nếu singerId là mảng và lấy tên ca sĩ tương ứng
              if (song.singerId && Array.isArray(song.singerId)) {
                // Nếu singerId là mảng, lặp qua từng id để lấy tên ca sĩ
                for (let id of song.singerId) {
                  // Kiểm tra nếu id tồn tại trong dữ liệu ca sĩ
                  if (singerData[id]) {
                    // Thêm tên ca sĩ vào mảng singersName
                    singersName.push(singerData[id].title);
                  }
                }
              }
              return {
                id: key,
                image: song.image,
                title: song.title,
                singer: singersName.join(', '), // Nối tên ca sĩ thành 1 chuỗi
                listen: song.listen || 0,
                singerId: song.singerId,
                link: `/song/${key}`,
                audio: song.audio,
                wishlist: song.wishlist
              }
            })
            // Lấy 3 bài hát đầu tiên
            songsArray = songsArray.slice(0, 3);
            // Cặp dữ liệu với tên bài hát
            setDataFinal(songsArray);

          }
        })
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
          <div className="grid grid-cols-1 gap-[8px]" song-list="">
            {dataFinal ? (<>

              {dataFinal && (
                <>
                  {dataFinal.map((item: any) => (
                    <SongItem
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      title={item.title}
                      singer={item.singer}
                      listen={item.listen}
                      link={item.link}
                      audio={item.audio}
                      wishlist={item.wishlist}
                    />
                  ))}
                </>
              )}

            </>) : (<>
              {Array(3).fill("").map((_, index) => (
                <SongItemSkeleton key={index} />
              ))}
            </>)}



          </div>
        </div>
      </div>
    </>
  );
}   