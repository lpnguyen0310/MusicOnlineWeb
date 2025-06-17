"use client";
import SongItem from "@/app/components/song/SongItem";
import SongItemDetail from "@/app/components/song/SongItemDetail";
import Title from "@/app/components/title/Title";
import { useEffect, useState } from "react";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { authFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
export default function Section1() {
    const [dataFinal, setDataFinal] = useState<any>();
    const data = [
        {
            image: "/demo/image-6.png",
            title: "Cô Phòng",
            singer: "Hồ Quang Hiếu, Huỳnh Văn",
            time: "3:45"
        },
        {
            image: "/demo/image-6.png",
            title: "Cô Phòng",
            singer: "Hồ Quang Hiếu, Huỳnh Văn",
            time: "3:45"
        },
        {
            image: "/demo/image-6.png",
            title: "Cô Phòng",
            singer: "Hồ Quang Hiếu, Huỳnh Văn",
            time: "3:45"
        }
    ]
    useEffect(() => {
        // Kiểm tra xem người dùng đã đăng nhập hay chưa

        onAuthStateChanged(authFirebase, (user) => {
            if (user) {
                const userId = user.uid;
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
                            singer: "Hồ Quang Hiếu, Huỳnh Văn",
                            listen: data[key].listen || 0,
                            singerId: data[key].singerId,
                            categoryId: data[key].categoryId,
                            time: data[key].time || "3:45",
                            audio: data[key].audio,
                            wishlist: data[key].wishlist,
                        }));
                        // Nên làm ở BE
                        // Lọc ra những bài hát có wishlist là true và thuộc về người dùng hiện tại
                        songsArray = songsArray.filter(item => item.wishlist && item.wishlist[userId]);
                        setDataFinal(songsArray);
                    }
                })
            }
        });


    }, []);


    return (
        <>
            <div className="mt-[30px]">
                <Title text="Danh sách bài hát yêu thích" />
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