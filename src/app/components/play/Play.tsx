import { FaBackwardStep, FaPlay, FaVolumeHigh } from "react-icons/fa6";
import PlayAudio from "./PlayAudio";
import PlayInfo from "./PlayInfo";
import PlayActions from "./PlayActions";
import PlayTime from "./PlayTime";
import PlayVolumn from "./PlayVolumn";

export default function Play() {
    return (
        <>
            <div className="bg-[#212121] border-t border-[#494949] hidden fixed bottom-0 left-0 w-full py-[20px] z-[999] play-audio">
                <PlayAudio />
                <div className="container mx-auto px-30 flex items-center justify-between">
                    {/* khói bên trái */}
                    <PlayInfo />

                    {/* khói ở giữa */}
                    <div className="flex-1 mx-[67px]">
                        <PlayActions />
                        {/* thanh tiến độ */}
                        <PlayTime />
                    </div>
                    {/* khói bên phải */}
                    <PlayVolumn />
                </div>
            </div>

        </>
    );
}