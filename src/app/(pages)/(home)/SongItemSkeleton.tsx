import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SongItemSkeleton() {
    return (
        <div className="bg-[#212121] rounded-[15px] p-[10px] flex items-center">
            {/* ảnh */}
            <div className="w-[76px] aspect-square rounded-[10px] truncate mr-[10px]">
                <Skeleton className="w-full h-full "  baseColor="#3a3a3a"
          highlightColor="#4a4a4a" />
            </div>

            {/* thông tin */}
            <div className="flex-1">
                <div className="mb-[2px]">
                    <Skeleton height={18} width="70%" baseColor="#3a3a3a"
                        highlightColor="#4a4a4a" />
                </div>
                <div className="mb-[5px]">
                    <Skeleton height={14} width="50%"  baseColor="#3a3a3a"
          highlightColor="#4a4a4a" />
                </div>
                <div>
                    <Skeleton height={14} width="40%"   baseColor="#3a3a3a"
          highlightColor="#4a4a4a"/>
                </div>
            </div>

            {/* nút */}
            <div className="ml-[10px] flex gap-[6px]">
                <Skeleton circle width={34} height={34}   baseColor="#3a3a3a"
          highlightColor="#4a4a4a"/>
                <Skeleton circle width={34} height={34}  baseColor="#3a3a3a"
          highlightColor="#4a4a4a" />
            </div>
        </div>
    );
}
