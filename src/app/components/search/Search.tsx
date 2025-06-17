"use client";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useRouter, useSearchParams } from "next/navigation";
export default function Search() {
    // Dùng router để điều hướng đến trang tìm kiếm không reload lại trang
    const router  = useRouter();

    // Dùng useSearchParams để lấy các tham số trong URL để hiện thị giá trị mặc định trong ô tìm kiếm
    const params = useSearchParams();
    const keywordDefault = params.get("keyword") || "";


    const handleSearch = (event:any)=>{
         event.preventDefault();
         const  keyword = event.target.keyword.value;
         console.log("Searching for:", keyword);
        if(keyword){
            router.push(`/search?keyword=${keyword}`);

        }
    }
    return (
        <>
            <form
                onSubmit={handleSearch}
                className=" bg-[#212121] rounded-[50px] mt-[20px] sticky top-[20px] left-[20px] z-[999] py-[15px] px-[30px] flex items-center ">
                <input
                    type="text"
                    name="keyword"
                    placeholder="Tìm kiếm bài hát, nghệ sĩ, album..."
                    className="order-2 text-[16px] font-[600] text-white bg-transparent outline-none flex-1 "
                    defaultValue={keywordDefault}
                />
                <button
                    type="submit"
                    className="order-1 text-white mr-[20px]"
                />
                <FaMagnifyingGlass className="text-white text-[22px]" />

            </form>

        </>
    );
}