"use client";
import { FaPlay } from "react-icons/fa";
export default function ButtonPlay(props: any) {
    const { id, audio,image,title,singer,listen,link } = props;
        console.log("RENDERING BUTTON PLAY", id, audio); // 👈 THÊM LOG NÀY

    const handlePlay = () => {
        const elementPlayAudio = document.querySelector(".play-audio")
        if(elementPlayAudio){

            // Phát nhạc 
            const elementAudio:any = elementPlayAudio.querySelector(".inner-audio");
            const elementSource:any = elementPlayAudio.querySelector(".innser-source");
            elementSource.src = audio; 
            // dùng load để  cập nhật nguồn mới cho audio 
            elementAudio.load();
            // dùng play để phát nhạc
            elementAudio.play();

            // Hiển thị khối play-audio
            if(elementPlayAudio.classList.contains("hidden")){
                elementPlayAudio.classList.remove("hidden");
            }

            // Hiển thi ảnh, tên bài hát và ca sĩ khi phát nhạc
            const elementImage:any = elementPlayAudio.querySelector(".inner-image");
            elementImage.src = image;
            elementImage.alt = title;

            // Hiển thị tên bài hát
            const elementTitle:any = elementPlayAudio.querySelector(".inner-title");
            elementTitle.innerHTML = title;
            // Hiển thị tên ca sĩ
            const elementSinger:any = elementPlayAudio.querySelector(".inner-singer");
            elementSinger.innerHTML = singer;

            // Thêm class play vào button inner-button-play
            const elementButtonPlay:any = elementPlayAudio.querySelector(".inner-button-play");
            elementButtonPlay.classList.add("play");

        }   
    }
    return (
        <>
            <button
                onClick={handlePlay}
                className="w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-[15px] text-white ml-[10px]">
                <FaPlay />
            </button>
        </>
    );
}