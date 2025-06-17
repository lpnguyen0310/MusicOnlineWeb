"use client";
import { authFirebase, dbFirebase } from '@/app/firebaseConfig';
import { FaHeart } from 'react-icons/fa';
import { runTransaction, ref } from 'firebase/database';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
export default function ButtonHeart(props: any) {
    const { id,wishlist } = props;
    const [isActive, setIsActive] = useState(false);

    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    useEffect(() => {
        onAuthStateChanged(authFirebase, (user) => {
            if (user) {
                const userId = user.uid;
                if(wishlist && wishlist[userId]) {
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
                className={
                    "w-[34px] h-[34px] rounded-full border inline-flex items-center justify-center text-[15px] text-white ml-[10px] " +
                    (isActive ? "border-[#00ADEF] bg-[#00ADEF]" : "border-white")
                }
            >
                <FaHeart />
            </button>
        </>

    );
}