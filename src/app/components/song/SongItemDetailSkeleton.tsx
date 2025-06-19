import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function SongItemDetailSkeleton() {
    return (
        <>
            <div className="flex items-center justify-between bg-[#212121] py-[10px] px-[18px] rounded-[15px] mb-[10px]">
                {/* Left */}
                <div className="w-[40%] flex items-center">
                    {/* Nút play */}
                    <Skeleton circle width={24} height={24} baseColor="#3a3a3a"
                        highlightColor="#4a4a4a" />

                    {/* Ảnh bài hát */}
                    <div className="w-[42px] aspect-square rounded-[8px] truncate mx-[10px]">
                        <Skeleton width="100%" height="100%" baseColor="#3a3a3a"
                            highlightColor="#4a4a4a" />
                    </div>

                    {/* Tiêu đề bài hát */}
                    <Skeleton width={100} height={18} baseColor="#3a3a3a"
                        highlightColor="#4a4a4a" />
                </div>

                {/* Center - Tên ca sĩ */}
                <div className="w-[30%] text-center">
                    <Skeleton width="60%" height={14} baseColor="#3a3a3a"
                        highlightColor="#4a4a4a" />
                </div>

                {/* Right - Thời gian + Heart */}
                <div className="w-[30%] flex items-center justify-end">
                    <Skeleton width={40} height={14} className="mr-[10px]" baseColor="#3a3a3a"
                        highlightColor="#4a4a4a" />
                    <Skeleton circle width={24} height={24} baseColor="#3a3a3a"
                        highlightColor="#4a4a4a" />
                </div>
            </div>
        </>
    );
}