"use client";
import { authFirebase, dbFirebase } from '@/app/firebaseConfig';
import { runTransaction, ref } from 'firebase/database';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FaHeart, FaRegHeart } from "react-icons/fa6";

export default function ButtonHeart2(props: any) {
    const { id, wishlist } = props;
    const [isActive, setIsActive] = useState(false);

    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    useEffect(() => {
        onAuthStateChanged(authFirebase, (user) => {
            if (user) {
                const userId = user.uid;
                if (wishlist && wishlist[userId]) {
                    setIsActive(true);
                }
            }
        });
    }, [])

    const handleAddWishList = () => {
        const userId = authFirebase.currentUser?.uid;
        console.log("Thêm vào danh sách yêu thích", id);
        console.log("User ID:", userId);
        if (id && userId) {
            const songRef = ref(dbFirebase, `/songs/${id}`);

            runTransaction(songRef, (song) => {
                if (song) {
                    if (song.wishlist && song.wishlist[userId]) {
                        song.wishlist[userId] = null;
                        setIsActive(false);
                    } else {
                        if (!song.wishlist) {
                            song.wishlist = {};
                        }
                        song.wishlist[userId] = true;
                        setIsActive(true);
                    }
                }
                return song;
            });
        }

    }
    return (
        <>
            <button 
             onClick={handleAddWishList}
             className={"text-[20px] " + 
                (isActive ? " text-[#00ADEF]" : " text-white")
             }>
            {isActive ? <FaHeart /> : <FaRegHeart />}
            </button>
        </>

    );
}