"use client";
import Title from "@/app/components/title/Title";
import { authFirebase } from "@/app/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  // Hàm xử lý đăng nhập
  const handleLogin = (event: any) => {
    event.preventDefault();
    // Lấy giá trị từ form
    const email = event.target.email.value;
    const password = event.target.password.value;
    // Code xử lý đăng nhập tài khoản
    signInWithEmailAndPassword(authFirebase, email, password)
      .then((userCredential) => {
        // Đăng nhập thành công
        const user = userCredential.user;
        if(user){
          //console.log("Đăng nhập thành công:", user.email);
          // Điều hướng đến trang chủ sau khi đăng nhập thành công
          router.push("/");
        }
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        //console.error("Lỗi đăng nhập:", errorCode, errorMessage);
        alert("Đăng nhập không thành công. Vui lòng kiểm tra lại email và mật khẩu.");
      });

  }
  return (
    <>
      <div className="w-[500px] mx-auto mt-[60px]">
        <Title text="Đăng Nhập Tài Khoản" className="text-center" />
        <form className="" onSubmit={handleLogin}>
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
              placeholder="Nhập email của bạn "
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
            Đăng nhập
          </button>
        </form>
      </div>

    </>
  );
}