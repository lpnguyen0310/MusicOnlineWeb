"use client";
import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";
import { FaHeart, FaHouse, FaMusic, FaPodcast, FaRightFromBracket, FaUser, FaUserPlus } from "react-icons/fa6";

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
            link: "/wishlist"
        },
        {
            icon: <FaRightFromBracket />,
            title: "Đăng Xuất",
            link: "/logout"
        },
        {
            icon: <FaUser />,
            title: "Đăng Nhập",
            link: "/login"
        },
        {
            icon: <FaUserPlus />,
            title: "Đăng Ký",
            link: "/register"
        },

    ]


    const pathname = usePathname();
    console.log("Current Pathname:", pathname);


    return (
        <>
            <nav className="py-[30px] px-[20px]">
                <ul className="">
                    {menu.map((item, index) => (
                        <li className="mb-[30px]" key={index}>
                            <Link
                                href={item.link}
                                className={"flex items-center hover:text-[#00ADEF] capitalize " +
                                    (pathname === item.link ? "text-[#00ADEF]" : "text-white")
                                }
                            >
                                <span className="text-[20px] mr-[20px]">
                                    {item.icon}
                                </span>
                                <span className="font-[700] text-[16px]">
                                    {item.title}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}