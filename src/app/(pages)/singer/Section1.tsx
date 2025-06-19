"use client";
import CardItem from "@/app/components/card/CardItems";
import Title from "@/app/components/title/Title";
import { useEffect, useState } from "react";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import React from "react";
import CardItemSkeleton from "@/app/components/card/CardItemSkeleton";
export default function Section1() {

    const [dataFinal, setDataFinal] = useState<any>();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const singersRef = ref(dbFirebase, 'singers');
        onValue(singersRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                // Lặp qua bảng singerId xong tìm bản ghi ca sĩ có id đó
                // Chuyển đổi dữ liệu từ object sang mảng
                // Object.keys(data) sẽ lấy tất cả các key của object lặp qua từng key của  object
                const singersArray = Object.keys(data).map(key => ({
                    id: key,
                    // ...data[key]
                    image: data[key].image,
                    title: data[key].title,
                    describe: data[key].description,
                    link: `/singer/${key}`,
                }));
                // set để cập nhật lại state dataFinal
                setDataFinal(singersArray);
                setLoading(false);
            }
        })

    }, []);
    return (
        <>
            <div className="mt-[30px]">
                <Title text="Danh Sách Ca Sĩ" />
                <div className="grid grid-cols-5 gap-[20px]">
                    {/* Kiểm tra loading có đang tải hay không */}
                    {loading ? (<>
                        {/* Hiển thị skeleton khi đang tải dữ liệu */}
                        {Array(dataFinal?.length && dataFinal.length > 0 ? dataFinal.length : 10)
                            .fill("")
                            .map((_, index) => (
                                <CardItemSkeleton key={index} />
                            ))}

                    </>) : (<>
                        {/* Kiểm tra dataFinal có dữ liệu hay không */}
                        {dataFinal && (
                            <>
                                {dataFinal.map((item: any, index: number) => (
                                    <CardItem
                                        key={index}
                                        // Đây là cú pháp trả ra tất cả các thuộc tính của item 
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