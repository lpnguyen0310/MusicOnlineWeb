"use client";
import React from 'react';
import CardInfo from "@/app/components/card/CardInfo";
import Title from '@/app/components/title/Title';
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { LuYoutube } from 'react-icons/lu';
export default function Section2(props: { id: string }) {
    const { id } = props;
    const [dataFinal, setDataFinal] = useState<any>();

    useEffect(() => {
        const songRef = ref(dbFirebase, "songs/" + id);
        onValue(songRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setDataFinal({
                    lyric: data.lyric,
                });
            }
        })

    }, []);
    return (
        <>
            {dataFinal && (
                <>
                    <div className="mt-[30px]">
                        <Title text="Lời bài hát" />
                        <div className="bg-[#212121] rounded-[15px] p-[20px] text-white font-[500]  text-[14px]">
                            {dataFinal.lyric}
                        </div>
                    </div>


                </>
            )
            }

        </>
    );
}
