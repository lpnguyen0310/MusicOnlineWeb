"use client";
import { FaBackwardStep, FaForwardStep, FaPause, FaPlay } from "react-icons/fa6";
export default function PlayActions() {
    const handlePlay = () => {
        const elementPlayAudio = document.querySelector(".play-audio");
        if (elementPlayAudio) {
            const elementButtonPlay: any = elementPlayAudio.querySelector(".inner-button-play");
            // Tìm thể audio để dừng và phát nhạc
            const elementAudio: any = elementPlayAudio.querySelector(".inner-audio");


            if (elementButtonPlay.classList.contains("play")) {
                elementButtonPlay.classList.remove("play");
                elementAudio.pause(); // Dừng nhạc
            } else {
                elementButtonPlay.classList.add("play");
                elementAudio.play(); // Phát nhạc
            }
        }
    };

    // Hàm xử lý sự kiện khi nhấn nút next
    const handleNext = () => {
        // Tìm thẻ play-audio, đây là thẻ cha của các thành phần phát nhạc
        const elementPlayAudio: any = document.querySelector(".play-audio");
        // Lấy thuộc tính song-id từ thẻ play-audio
        const idSongCurrent = elementPlayAudio.getAttribute("song-id");

        if (idSongCurrent) {
            // Tìm tất cả các thẻ song-list
            const songList: any = document.querySelector("[song-list]");
            if (songList) {
                // Lấy phần tử song-list đầu tiên 
                const elementSongCurrent = songList.querySelector(`[data-song="${idSongCurrent}"]`);
                // Tìm phần tử song-list tiếp theo
                const elementSongNext = elementSongCurrent.nextElementSibling;
                // Nếu có phần tử song-list tiếp theo thì click vào nút play của nó
                if (elementSongNext) {
                    // Tìm nút play trong phần tử song-list tiếp theo 
                    const buttonPlay = elementSongNext.querySelector(".inner-button-play");
                    buttonPlay.click();
                }
            }
        }
    };

    // Hàm xử lý sự kiện khi nhấn nút previous
    const handlePrevious = () => {
        // Tìm thẻ play-audio, đây là thẻ cha của các thành phần phát nhạc
        const elementPlayAudio: any = document.querySelector(".play-audio");
        // Lấy thuộc tính song-id từ thẻ play-audio
        const idSongCurrent = elementPlayAudio.getAttribute("song-id");

        if (idSongCurrent) {
            // Tìm tất cả các thẻ song-list
            const songList: any = document.querySelector("[song-list]");
            if (songList) {
                // Lấy phần tử song-list đầu tiên 
                const elementSongCurrent = songList.querySelector(`[data-song="${idSongCurrent}"]`);
                //  Tìm phần tử song-list trước đó
                const elementSongPrevious = elementSongCurrent.previousElementSibling;
                // Nếu có phần tử song-list tiếp theo thì click vào nút play của nó
                if (elementSongPrevious) {
                    // Tìm nút play bài trước đó
                    const buttonPlay = elementSongPrevious.querySelector(".inner-button-play");
                    buttonPlay.click();
                }
            }
        }
    }
    return (
        <>
            <div className="flex items-center justify-center mb-[10px]">
                <button className="text-[16px] text-white" onClick={handlePrevious}>
                    <FaBackwardStep />
                </button>
                <button
                    onClick={handlePlay}

                    className="text-[16px] text-white w-[32px] h-[32px] bg-[#00ADEF] rounded-full 
                inline-flex items-center justify-center mx-[42px] inner-button-play ">
                    <FaPlay className="inner-icon-play" />
                    <FaPause className="inner-icon-pause" />
                </button>
                <button className="text-[16px] text-white" onClick={handleNext}>
                    <FaForwardStep />
                </button>
            </div>
        </>
    );
}