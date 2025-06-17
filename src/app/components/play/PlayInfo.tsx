export default function PlayInfo() {
    return (
        <>
            <div className="flex items-center w-[218px]">
                <div className="w-[49px] rounded-[14px] aspect-square truncate" >
                    <img
                        src="#"
                        alt="#"
                        className="w-full h-full object-cover inner-image"
                    />
                </div>
                <div className="flex-1 ml-[12px]">
                    <div className="font-[700] text-white mb-[2px] text-[15px] inner-title">

                    </div>
                    <div className="font-[700] text-[12px] text-white text-opacity-70 italic inner-singer">

                    </div>
                </div>
            </div>
        </>
    );
}