"use client";
import CardItem from "@/app/components/card/CardItems";
import Title from "@/app/components/title/Title";
import { useEffect, useState } from "react";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import CardItemSkeleton from "@/app/components/card/CardItemSkeleton";

export default function Section2() {

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
                let categoriesArray = Object.keys(data).map(key => ({
                    id: key,
                    // ...data[key]
                    image: data[key].image,
                    title: data[key].title,
                    describe: data[key].description,
                    link: `/categories/${key}`,
                }));
                // Nên làm ở BE
                categoriesArray = categoriesArray.splice(0, 5); // Lấy 3 phần tử đầu tiên
                setDataFinal(categoriesArray);
                setLoading(false);
            }
        })

    }, []);
    return (
        <>
            <div className="mt-[30px]">
                <Title text="Danh Mục Nổi Bật" />
                <div className="grid grid-cols-5 gap-[20px]">
                    {loading ? (<>
                        {Array(5).fill("").map((_, index) => (
                            <CardItemSkeleton key={index} />
                        ))}
                    </>) : (<>
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
                        )
                        }
                    </>)}
                </div>
            </div>
        </>
    );
}