import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CardItemSkeleton() {
    return (
        <div className="rounded-[15px] overflow-hidden">
            {/* Image Skeleton */}
            <div className="w-full aspect-[1/1] rounded-[15px] mb-[10px]">
                <Skeleton height="100%" width="100%" baseColor="#3a3a3a"
                    highlightColor="#4a4a4a" />
            </div>

            {/* Title */}
            <div className="mb-[6px]">
                <Skeleton height={18} width="80%" baseColor="#3a3a3a"
                    highlightColor="#4a4a4a" />
            </div>

            {/* Description */}
            <Skeleton height={14} width="100%" baseColor="#3a3a3a"
                highlightColor="#4a4a4a" count={2} />
        </div>
    );
}
