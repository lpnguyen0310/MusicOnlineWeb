"use client";
import CardInfo from "@/app/components/card/CardInfo";
import { useEffect, useState } from "react";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import CardInfoSkeleton from "@/app/components/card/CardInfoSkeleton";

export default function Section1(props: { id: string }) {

    const { id } = props;

    const [dataFinal, setDataFinal] = useState<any>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const singerRef = ref(dbFirebase, "singers/" + id);
        onValue(singerRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setDataFinal({
                    image: data.image,
                    title: data.title,
                    description: data.description,
                });
                setLoading(false);
            }
        })

    }, []);
    return (
        <>
            {loading ? (<>
                <CardInfoSkeleton />
            </>) : (<>
                {dataFinal && (
                    <CardInfo
                        image={dataFinal.image}
                        title={dataFinal.title}
                        description={dataFinal.description}
                    />
                )}
            </>)}
        </>
    );
}