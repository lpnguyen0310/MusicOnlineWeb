import Title from "@/app/components/title/Title";

export default function RegisterPage() {
  return (
    <>
      <div className="w-[500px] mx-auto mt-[60px]">
        <Title text="Đăng Ký Tài Khoản" className="text-center" />
        <form className="">
          <div className="mb-[20px]">
            <label className="block mb-[5px] font-[600] text-[14px]" htmlFor="fullName">
              <span className="text-white">Họ và Tên</span>
              <span className="text-red-500 ml-[5px]">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full bg-white h-[50px] rounded-[5px] px-[16px] font-[600] text-[14px] outline-none"
              required={true}
              placeholder="ví dụ: Lê Văn A"
            />
          </div>
          <div className="mb-[20px]">
            <label className="block mb-[5px] font-[600] text-[14px]" htmlFor="email">
              <span className="text-white">Email</span>
              <span className="text-red-500 ml-[5px]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white h-[50px] rounded-[5px] px-[16px] font-[600] text-[14px] outline-none"
              required={true}
              placeholder="ví dụ: levana@gmail.com"
            />
          </div>
           <div className="mb-[20px]">
            <label className="block mb-[5px] font-[600] text-[14px]" htmlFor="password">
              <span className="text-white">Password</span>
              <span className="text-red-500 ml-[5px]">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-white h-[50px] rounded-[5px] px-[16px] font-[600] text-[14px] outline-none"
              required={true}
            />
          </div>
          <button type="submit" className="rounded-[6px] bg-[#00ADEF] w-full h-[50px] text-white font-[700] text-[16px]">
            Đăng Ký
          </button>
        </form>
      </div>
    </>
  );
}