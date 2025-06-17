"use client";
import { FaVolumeHigh } from "react-icons/fa6";
export default function PlayVolumn() {
    const handleChange = (event:any) =>{
        const elementPlayAudio = document.querySelector(".play-audio");
        if(elementPlayAudio){

            // Lấy giá trị của input range và chuyển đổi sang số thực
            const volume = parseFloat(event.target.value); 
            const elementAudio:any = elementPlayAudio.querySelector(".inner-audio");
            const elementVolumnCurrent:any = elementPlayAudio.querySelector(".inner-volumn .inner-current"); 
            
            // Volumn là thuộc tính âm lượng của audio, nó nhận giá trị từ 0 đến 1
            elementAudio.volume= volume / 100; 
            // Cập nhật chiều rộng của thanh hiện tại
            elementVolumnCurrent.style.width = `${volume}%`; 
        }

    }
    return (
        <>
            <div className="w-[184px] flex items-end inner-volumn">
                <button className="text-[16px] text-white">
                    <FaVolumeHigh />
                </button>
                <div className="ml-[6px] relative">
                    <div className="h-[4px] w-[100%] bg-[#00ADEF] rounded-[50px] absolute top-[14px] left-0 inner-current">
                    </div>
                    <input
                        type="range"
                        min={0}
                        max={100}
                        defaultValue={100}
                        className="w-full h-[3px] bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm inner-total"
                        onChange={handleChange}
                    />
                </div>
            </div>
        </>
    );
}