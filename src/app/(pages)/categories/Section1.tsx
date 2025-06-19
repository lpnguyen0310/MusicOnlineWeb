"use client";

import CardItem from "@/app/components/card/CardItems";
import CardItemSkeleton from "@/app/components/card/CardItemSkeleton";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1() {

    const [dataFinal, setDataFinal] = useState<any>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const categoriesRef = ref(dbFirebase, 'categories');
        onValue(categoriesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                // Lặp qua bảng singerId xong tìm bản ghi ca sĩ có id đó
                // Chuyển đổi dữ liệu từ object sang mảng
                // Object.keys(data) sẽ lấy tất cả các key của object lặp qua từng key của  object
                const categoriesArray = Object.keys(data).map(key => ({
                    id: key,
                    // ...data[key]
                    image: data[key].image,
                    title: data[key].title,
                    describe: data[key].description,
                    link: `/categories/${key}`,
                }));
                // Nên làm ở BE
                setDataFinal(categoriesArray);
                setLoading(false);
            }
        })

    }, []);

    return (
        <>
            <div className="mt-[30px]">
                <Title text="Danh Mục Bài Hát" />
                <div className="grid grid-cols-5 gap-[20px]">

                    {loading ? (<>

                        {Array(dataFinal?.length && dataFinal.length > 0 ? dataFinal.length : 10)
                            .fill("")
                            .map((_, index) => (
                                <CardItemSkeleton key={index} />
                            ))}
                    </>) : (<>
                        {dataFinal && (
                            <>
                                {dataFinal.map((item: any, index: number) => (
                                    <CardItem
                                        key={index}
                                        {...item}
                                    />
                                ))}
                            </>
                        )
                        }
                    </>)}

                </div>
            </div>
        </>
    );
}