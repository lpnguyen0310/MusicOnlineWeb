import SongItem from "@/app/components/song/SongItem";
import SongItemDetail from "@/app/components/song/SongItemDetail";
import Title from "@/app/components/title/Title";
import { FaPlay, FaRegHeart } from "react-icons/fa6";

export default function Section2() {

    const data =[
        {
            image: "/demo/image-6.png",
            title: "Cô Phòng",
            singer: "Hồ Quang Hiếu, Huỳnh Văn",
            time: "3:45"
        },
        {
            image: "/demo/image-6.png",
            title: "Cô Phòng",
            singer: "Hồ Quang Hiếu, Huỳnh Văn",
            time: "3:45"
        },
        {
            image: "/demo/image-6.png",
            title: "Cô Phòng",
            singer: "Hồ Quang Hiếu, Huỳnh Văn",
            time: "3:45"
        }
    ]
    return (
      <>
        <div className="mt-[30px]">
            <Title text="Danh sách bài hát" />
            {/* List */}
            <div className="grid grid-cols-1 gap-[10xp]">
                {data.map((item,index)=>(
                    <SongItemDetail
                        key={index}
                        {...item}
                    />
                ))}
              
            </div>
        </div>

      </>
    );
}