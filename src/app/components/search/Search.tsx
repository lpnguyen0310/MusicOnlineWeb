import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search() {
    return (
        <>
            <form className=" bg-[#212121] rounded-[50px] mt-[20px] sticky top-[20px] left-[20px] z-[999] py-[15px] px-[30px] flex items-center ">
                <input
                type="text"
                name="keyword"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, album..."
                className="order-2 text-[16px] font-[600] text-white bg-transparent outline-none flex-1 "
                
                />
                <button 
                type="submit"
                className="order-1 text-white mr-[20px]"
                />
                <FaMagnifyingGlass className ="text-white text-[22px]" />

            </form>
        
        </>
    );
}