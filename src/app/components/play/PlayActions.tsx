"use client";
import { FaBackwardStep, FaPause, FaPlay } from "react-icons/fa6";
export default function PlayActions() {
    const handlePlay =() => {
        const elementPlayAudio = document.querySelector(".play-audio");
        if(elementPlayAudio){
            const elementButtonPlay:any = elementPlayAudio.querySelector(".inner-button-play");
            // Tìm thể audio để dừng và phát nhạc
            const elementAudio:any = elementPlayAudio.querySelector(".inner-audio");


            if(elementButtonPlay.classList.contains("play")){
                elementButtonPlay.classList.remove("play");
                elementAudio.pause(); // Dừng nhạc
            }else{
                elementButtonPlay.classList.add("play");
                elementAudio.play(); // Phát nhạc
            }
        }
    }
    return (
        <>
            <div className="flex items-center justify-center mb-[10px]">
                <button className="text-[16px] text-white">
                    <FaBackwardStep />
                </button>
                <button
                    onClick={handlePlay}

                    className="text-[16px] text-white w-[32px] h-[32px] bg-[#00ADEF] rounded-full 
                inline-flex items-center justify-center mx-[42px] inner-button-play ">
                    <FaPlay className="inner-icon-play" />
                    <FaPause className="inner-icon-pause" />
                </button>
                <button className="text-[16px] text-white">
                    <FaBackwardStep />
                </button>
            </div>
        </>
    );
}