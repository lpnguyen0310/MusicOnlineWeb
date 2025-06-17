"use client";
export default function PlayTime() {
    // Dùng event để cập nhật thời gian hiện tại và tổng thời gian của audio
    const handleChange =(event:any)=>{
        const input = event.target;
        const time = parseFloat(input.value); // Chuyển đổi giá trị input range sang số thự
        const elementAudio:any = document.querySelector(".play-audio .inner-audio");
        elementAudio.currentTime = time; // Cập nhật thời gian hiện tại của audio
        // console.log(input.value); // Lấy giá trị của input range

    }
    return (
        <>
            <div className="mt-[11px] relative inner-play-time">
                <div className="h-[4px] w-[0%] bg-[#00ADEF] rounded-[50px] absolute top-[14px] left-0 inner-current">
                </div>
                <input
                    type="range"
                    min={0}
                    max={0}
                    defaultValue={0}
                    className="w-full h-[3px] bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm inner-total"
                    onChange={handleChange}
                />
            </div>
        </>
    );
}