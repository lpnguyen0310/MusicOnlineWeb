import { FaBackwardStep, FaPlay, FaVolumeHigh } from "react-icons/fa6";

export default function Play() {
    return (
        <>
            <div className="bg-[#212121] border-t border-[#494949] fixed bottom-0 left-0 w-full py-[20px] z-[999]">
                <div className="container mx-auto px-30 flex items-center justify-between">
                    {/* khói bên trái */}
                    <div className="flex items-center w-[218px]">
                        <div className="w-[49px] rounded-[14px] aspect-square truncate" >
                            <img src="/demo/image-1.png" alt="Nhạc" className="w-full h-full object-fit" />
                        </div>
                        <div className="flex-1 ml-[12px]">
                            <div className="font-[700] text-white mb-[2px] text-[15px]">
                                Cô phòng
                            </div>
                            <div className="font-[700] text-[12px] text-white text-opacity-70 italic">
                                Hồ Quang Hiếu, Huỳnh Văn
                            </div>
                        </div>
                    </div>

                    {/* khói ở giữa */}
                    <div className="flex-1 mx-[67px]">
                        <div className="flex items-center justify-center mb-[10px]">
                            <button className="text-[16px] text-white">
                                <FaBackwardStep />
                            </button>
                            <button className="text-[16px] text-white w-[32px] h-[32px] bg-[#00ADEF] rounded-full inline-flex items-center justify-center mx-[42px]">
                                <FaPlay />
                            </button>
                            <button className="text-[16px] text-white">
                                <FaBackwardStep />
                            </button>
                        </div>
                        {/* thanh tiến độ */}
                        <div className="mt-[11px] relative">
                            <div className="h-[4px] w-[50%] bg-[#00ADEF] rounded-[50px] absolute top-[14px] left-0">

                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                defaultValue={50}
                                className="w-full h-[3px] bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm"
                            />
                        </div>
                    </div>
                    {/* khói bên phải */}
                    <div className="w-[184px] flex items-end">
                        <button className="text-[16px] text-white">
                            <FaVolumeHigh />
                        </button>
                        <div className="ml-[6px] relative">
                            <div className="h-[4px] w-[50%] bg-[#00ADEF] rounded-[50px] absolute top-[14px] left-0">
                            </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    defaultValue={50}
                                    className="w-full h-[3px] bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </>
            );
}