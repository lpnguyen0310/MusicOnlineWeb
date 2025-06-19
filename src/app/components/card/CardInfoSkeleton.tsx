import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CardInfoSkeleton() {
  return (
    <div className="flex items-center">
      {/* Hình ảnh */}
      <div className="w-[180px] aspect-square rounded-[15px] truncate overflow-hidden">
        <Skeleton
          height="100%"
          width="100%"
          baseColor="#3a3a3a"
          highlightColor="#4a4a4a"
        />
      </div>

      {/* Nội dung */}
      <div className="flex-1 ml-[20px]">
        <Skeleton
          height={35}
          width="60%"
          className="mb-[10px]"
          baseColor="#3a3a3a"
          highlightColor="#4a4a4a"
        />
        <Skeleton
          count={2}
          height={14}
          width="90%"
          baseColor="#3a3a3a"
          highlightColor="#4a4a4a"
        />
      </div>
    </div>
  );
}
