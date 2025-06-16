import type { Metadata } from "next";
import "./globals.css";
import Sider from "./components/sider/Sider";
import Search from "./components/search/Search";
import Play from "./components/play/Play";

export const metadata: Metadata = {
  title: "Project 5",
  description: "Đây là dự án nghe nhạc trực tuyến",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="bg-[#292929]">
        <div className="container mx-auto px-30">
          <div className="flex">
            <div className="w-[280px]">
              <Sider />
            </div>
            <div className="flex-1 ml-[20px]">
              <Search />
              <main className="mb-[120px] mt-[30px]">
                {children}
              </main>
            </div>
          </div>
        </div>
        <Play />
      </body>
    </html>
  );
}
