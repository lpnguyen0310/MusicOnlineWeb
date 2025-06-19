"use client";
import React from 'react';
import CardInfo from "@/app/components/card/CardInfo";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
export default function Section1(props: { id: string }) {
    const { id } = props;
    const [dataFinal, setDataFinal] = useState<any>();

    useEffect(() => {
        const songRef = ref(dbFirebase, "songs/" + id);
        const singerRef = ref(dbFirebase, "singers");
        onValue(singerRef, (singerSnapshot) => {
      const singerData = singerSnapshot.val();
      if (singerData) {
        // Sau khi lấy singer xong, tiếp tục lấy bài hát
        onValue(songRef, (songSnapshot) => {
          const songData = songSnapshot.val();
          if (songData) {
            const singersName: string[] = [];

            if (Array.isArray(songData.singerId)) {
              for (let singerId of songData.singerId) {
                if (singerData[singerId]) {
                  singersName.push(singerData[singerId].title);
                }
              }
            }

            setDataFinal({
              image: songData.image,
              title: songData.title,
              description: singersName.join(', ') 
            });
          }
        });
      }
      });
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
