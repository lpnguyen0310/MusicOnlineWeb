"use client";
import SongItem from "@/app/components/song/SongItem";
import SongItemDetail from "@/app/components/song/SongItemDetail";
import Title from "@/app/components/title/Title";
import { FaPlay, FaRegHeart } from "react-icons/fa6";
import { useSearchParams } from "next/navigation";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
export default function Section1() {
    const params = useSearchParams();
    const keywordDefault = params.get("keyword") || "";

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
                    time: data[key].time
                }));

                const regex = new RegExp(keywordDefault, 'i'); // 'i' để không phân biệt chữ hoa chữ thường

                songsArray = songsArray.filter(item => regex.test(item.title) || regex.test(item.singer));
                setDataFinal(songsArray);
            }
        })

    }, [keywordDefault]);

    return (
        <>
            <div className="mt-[30px]">
                <Title text="Kết quả tìm kiếm" />
                {/* List */}
                <div className="grid grid-cols-1 gap-[10xp]">
                    {dataFinal && (
                        <>
                            {dataFinal.map((item: any, index: number) => (
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