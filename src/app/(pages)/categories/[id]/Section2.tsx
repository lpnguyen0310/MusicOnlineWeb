"use client";
import SongItem from "@/app/components/song/SongItem";
import SongItemDetail from "@/app/components/song/SongItemDetail";
import Title from "@/app/components/title/Title";
import { FaPlay, FaRegHeart } from "react-icons/fa6";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import SongItemDetailSkeleton from "@/app/components/song/SongItemDetailSkeleton";
export default function Section2(props: { id: string }) {

    const { id } = props;
    const [dataFinal, setDataFinal] = useState<any>();
    // load skeleton
    const [loading, setLoading] = useState(true);

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
                            const singersName = [];
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
                                // ...data[key]
                                image: data[key].image,
                                title: data[key].title,
                                singer: singersName.join(', '), // Nối tên ca sĩ bằng dấu phẩ
                                listen: data[key].listen || 0,
                                singerId: data[key].singerId,
                                categoryId: data[key].categoryId,
                                audio: data[key].audio,
                                wishlist: data[key].wishlist,
                                time: song.audio ? getAudioDuration(song.audio).then(duration => {
                                    const minutes = Math.floor(duration / 60);
                                    const seconds = Math.floor(duration % 60);
                                    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
                                }) : '0:00',
                            }
                        })
                        songsArray = songsArray.filter(item => item.categoryId === id);
                        // Cặp dữ liệu với tên bài hát
                        setDataFinal(songsArray);
                        setLoading(false);

                    }
                })
            }
        })
    }, []);

    return (
        <>
            <div className="mt-[30px]">
                <Title text="Danh sách bài hát" />
                {/* List */}
                <div className="grid grid-cols-1 gap-[10xp]">

                    {loading ? (<>
                        {Array(dataFinal?.length || 3   )
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