"use client";
import Title from "@/app/components/title/Title";
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";
export default function RegisterPage() {
  // Sử dụng useRouter để điều hướng không bị load lại trang
  const router = useRouter();
  const handleRegister =(event:any)=>{
    event.preventDefault();
    // Lấy giá trị từ form
    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Code xử lý đăng ký tài khoản
    createUserWithEmailAndPassword(authFirebase, email, password)
      .then((userCredential) => {
        // tạo user thành công
        const user = userCredential.user;
        // Lưu thông tin người dùng vào Realtime Database
        set(ref(dbFirebase,'users/' + user.uid),{
          fullName: fullName,
        }).then(()=>{
          router.push("/");
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error during registration:", errorCode, errorMessage);
      });
    }
     
  return (
    <>
      <div className="w-[500px] mx-auto mt-[60px]">
        <Title text="Đăng Ký Tài Khoản" className="text-center" />
        <form className="" onSubmit={handleRegister}>
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