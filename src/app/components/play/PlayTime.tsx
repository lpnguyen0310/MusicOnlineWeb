export default function PlayTime() {
    return (
        <>
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
        </>
    );
}