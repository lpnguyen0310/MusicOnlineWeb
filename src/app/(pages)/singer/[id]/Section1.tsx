"use client";
import CardInfo from "@/app/components/card/CardInfo";
import { useEffect, useState } from "react";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default function Section1(props: { id: string }) {

    const { id } = props;

    const [dataFinal, setDataFinal] = useState<any>();

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
            }
        })

    }, []);
    return (
        <>
            {dataFinal && (
                <CardInfo
                    image={dataFinal.image}
                    title={dataFinal.title}
                    description={dataFinal.description}
                />
            )}
        </>
    );
}