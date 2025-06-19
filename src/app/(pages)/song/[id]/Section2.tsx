"use client";
import React from 'react';
import Title from '@/app/components/title/Title';
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
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
                        <div className="bg-[#212121] rounded-[15px] p-[20px] text-white font-[500] text-[14px] whitespace-pre-line h-[300px] overflow-y-auto pr-[4px] lyrics-box ">
                            {dataFinal.lyric.split("\\n").map((line: string, index: number) => (
                                <p key={index} className="mb-[4px]">{line}</p>
                            ))}
                        </div>
                    </div>


                </>
            )
            }

        </>
    );
}
