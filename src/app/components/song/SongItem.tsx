import Link from "next/link";
import { FaHeart, FaPlay } from "react-icons/fa6";

export default function SongItem(props: any) {
    const { image, title, singer, listen } = props;

    return (
        <>
            <div className="bg-[#212121] rounded-[15px] p-[10px] flex items-center" >
                {/* ảnh */}
                <div className="w-[76px] aspect-square rounded-[10px] truncate mr-[10px]">
                    <img src={image} alt={title} className="w-full h-full object-cover"/>
                </div>
                {/* thông tin */}
                <div className="flex-1">
                    <div className="mb-[2px]">
                        <Link href="/play" className=
                            "font-[600] text-white text-[16px]">
                            {title}
                        </Link>
                    </div>
                    <div className="font-[400] text-[12px] text-[#FFFFFF80] mb-[5px]">
                        {singer}
                    </div>
                    <div className="font-[400] text-[12px] text-white">
                        {listen.toLocaleString("vi-VN")} lượt nghe
                    </div>
                </div>
                {/* Nút  */}
                <div className="">
                    <button className="w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-[15px] text-white ml-[10px]">
                        <FaPlay />
                    </button>
                    <button className="w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-[15px] text-white ml-[10px]">
                        <FaHeart />
                    </button>
                </div>
            </div>
        </>
    );
}