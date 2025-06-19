"use client";
import SongItemDetail from "@/app/components/song/SongItemDetail";
import Title from "@/app/components/title/Title";
import { useEffect, useState } from "react";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { authFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import SongItemDetailSkeleton from "@/app/components/song/SongItemDetailSkeleton";
export default function Section1() {
    const [dataFinal, setDataFinal] = useState<any>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Kiểm tra xem người dùng đã đăng nhập hay chưa
        // Lấy thời gian từ audio 
        const getAudioDuration = (audioUrl: string): Promise<number> => {
            return new Promise((resolve, reject) => {
                const audio = new Audio(audioUrl);
                audio.onloadedmetadata = () => {
                    resolve(audio.duration);
                };
                audio.onerror = (error) => {
                    reject(error);
                };
            });
        };
        onAuthStateChanged(authFirebase, (user) => {
            if (user) {
                const userId = user.uid;
                const songsRef = ref(dbFirebase, 'songs');
                const singerRef = ref(dbFirebase, 'singers');

                // Lấy dữ liệu ca sĩ trước
                onValue(singerRef, (singerSnapshot) => {
                    const singerData = singerSnapshot.val();

                    // Sau đó lấy bài hát
                    onValue(songsRef, async (snapshot) => {
                        const data = snapshot.val();
                        if (data && singerData) {
                            // Duyệt từng bài hát
                            const songsArray = await Promise.all(
                                Object.keys(data).map(async (key) => {
                                    const song = data[key];

                                    // Lấy tên ca sĩ từ singerId[]
                                    const singersName: string[] = [];
                                    if (Array.isArray(song.singerId)) {
                                        for (const id of song.singerId) {
                                            if (singerData[id]) {
                                                singersName.push(singerData[id].title);
                                            }
                                        }
                                    }

                                    // Tính thời lượng nếu có audio
                                    let time = "0:00";
                                    if (song.audio) {
                                        try {
                                            const duration = await getAudioDuration(song.audio);
                                            const minutes = Math.floor(duration / 60);
                                            const seconds = Math.floor(duration % 60);
                                            time = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
                                        } catch (e) {
                                            console.error("Lỗi tính thời lượng:", e);
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
                                        audio: song.audio,
                                        wishlist: song.wishlist,
                                        time,
                                        link: `/song/${key}`
                                    };
                                })
                            );

                            // Lọc bài hát wishlist thuộc user
                            const filteredSongs = songsArray.filter(
                                item => item.wishlist && item.wishlist[userId]
                            );

                            setDataFinal(filteredSongs);
                            setLoading(false);
                        }
                    });
                });
            }
        });
    }, []);


    return (
        <>
            <div className="mt-[30px]">
                <Title text="Danh sách bài hát yêu thích" />
                {/* List */}
                <div className="grid grid-cols-1 gap-[10xp]">
                    {loading ? (<>
                        {Array(dataFinal?.length || 3)
                            .fill("")
                            .map((_, index) => (
                                <SongItemDetailSkeleton key={index} />
                            ))}
                    </>) : (<>
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
                    </>)}

                </div>
            </div>

        </>
    );
}