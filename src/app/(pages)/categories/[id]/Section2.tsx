"use client";
import SongItem from "@/app/components/song/SongItem";
import SongItemDetail from "@/app/components/song/SongItemDetail";
import Title from "@/app/components/title/Title";
import { FaPlay, FaRegHeart } from "react-icons/fa6";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
export default function Section2(props: { id: string }) {

    const { id } = props;
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
                    singer: "Hồ Quang Hiếu, Huỳnh Văn", // Tạm thời để cứng
                    listen: data[key].listen || 0,
                    singerId: data[key].singerId,
                    categoryId: data[key].categoryId,
                    time: data[key].time,
                    audio: data[key].audio
                }));
                songsArray = songsArray.filter(item => item.categoryId === id);
                setDataFinal(songsArray);
            }
        })

    }, []);

    return (
        <>
            <div className="mt-[30px]">
                <Title text="Danh sách bài hát" />
                {/* List */}
                <div className="grid grid-cols-1 gap-[10xp]">
                    {dataFinal && (
                        <>
                            {dataFinal.map((item:any, index:number) => (
                                <SongItemDetail
                                    key={index}
                                    {...item}
                                />
                            ))}
                        </>
                    )}


                </div>
            </div>

        </>
    );
}