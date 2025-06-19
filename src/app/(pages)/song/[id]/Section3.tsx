"use client";

import SongItemDetail from "@/app/components/song/SongItemDetail";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
export default function Section3(props: { id: string }) {


    const { id } = props;
    const [dataFinal, setDataFinal] = useState<any>();

    useEffect(() => {
        const songRef = ref(dbFirebase, "songs/" + id);
        const singerRef = ref(dbFirebase, "singers");
        const songsRef = ref(dbFirebase, "songs");

        // Lấy dữ liệu ca sĩ
        onValue(singerRef, (singerSnapshot) => {
            const singerData = singerSnapshot.val();

            // Lấy thông tin bài hát hiện tại
            onValue(songRef, (songSnapshot) => {
                // Kiểm tra nếu bài hát hiện tại và dữ liệu ca sĩ đã được lấy
                const currentSong = songSnapshot.val();
                if (currentSong && singerData) {
                    // Lấy id danh mục của bài hát hiện tại
                    const currentCategoryId = currentSong.categoryId;

                    // Lấy tất cả bài hát
                    onValue(songsRef, (snapshot) => {
                        const allSongs = snapshot.val();
                        if (allSongs) {
                            let songsArray = Object.keys(allSongs).map(key => {
                                const song = allSongs[key];
                                let singersName: string[] = [];

                                if (Array.isArray(song.singerId)) {
                                    for (let sid of song.singerId) {
                                        if (singerData[sid]) {
                                            singersName.push(singerData[sid].title);
                                        }
                                    }
                                }
                                return {
                                    id: key,
                                    image: song.image,
                                    title: song.title,
                                    singer: singersName.join(', '),
                                    listen: song.listen || 0,
                                    singerId: song.singerId,
                                    categoryId: song.categoryId,
                                    time: song.time
                                };
                            });

                            // Lọc bài hát cùng danh mục, khác id hiện tại
                            songsArray = songsArray.filter(item =>
                                item.categoryId === currentCategoryId && item.id !== id
                            );

                            setDataFinal(songsArray);
                        }
                    });
                }
            });
        });
    }, [id]);

    return (
        <>
            <div className="mt-[30px]">
                <Title text="Bài Hát Cùng Danh Mục" />
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