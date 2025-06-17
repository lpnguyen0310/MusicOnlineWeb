"use client";
import { authFirebase } from "@/app/firebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LogoutPage() {
    const router = useRouter();

    // Hàm xử lý đăng xuất
    useEffect(() => {
        signOut(authFirebase).then(() => {
            router.push("/login");
        })
    });
    return (
        <>

        </>
    );
}