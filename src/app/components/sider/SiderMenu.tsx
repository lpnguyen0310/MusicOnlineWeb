"use client";
import { authFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { FaHeart, FaHouse, FaMusic, FaPodcast, FaRightFromBracket, FaUser, FaUserPlus } from "react-icons/fa6";
import SiderMenuItem from "./SiderMenuItem";

export default function SiderMenu() {

    // Menu items for the sidebar
    const menu = [
        {
            icon: <FaHouse />,
            title: "Trang chủ",
            link: "/"
        },
        {
            icon: <FaMusic />,
            title: "Danh mục bài hát",
            link: "/categories"
        },
        {
            icon: <FaPodcast />,
            title: "Ca sĩ",
            link: "/singer"
        },
        {
            icon: <FaHeart />,
            title: "Bài Hát Yêu Thích",
            link: "/wishlist",
            // Chỉ hiển thị nếu người dùng đã đăng nhập
            isLogin: true
        },
        {
            icon: <FaRightFromBracket />,
            title: "Đăng Xuất",
            link: "/logout",
            // Chỉ hiển thị nếu người dùng đã đăng nhập
            isLogin: true
        },
        {
            icon: <FaUser />,
            title: "Đăng Nhập",
            link: "/login",
            // Chỉ hiển thị nếu người dùng chưa đăng nhập
            isLogin: false
        },
        {
            icon: <FaUserPlus />,
            title: "Đăng Ký",
            link: "/register",
            // Chỉ hiển thị nếu người dùng chưa đăng nhập
            isLogin: false
        },

    ]



    const [isLogin, setIsLogin] = useState<boolean>();
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    useEffect(() => {
        onAuthStateChanged(authFirebase, (use) => {
            if (use) {
                setIsLogin(true);
            } else {
                setIsLogin(false);
            }
        });
    }, [])
    console.log("isLogin: ", isLogin);


    return (
        <>
            <nav className="py-[30px] px-[20px]">
                <ul className="">
                    {menu.map((item, index) => (
                        <SiderMenuItem
                            item={item}
                            isLogin={isLogin}
                            key={index}
                        />
                    ))}
                </ul>
            </nav>
        </>
    );
}