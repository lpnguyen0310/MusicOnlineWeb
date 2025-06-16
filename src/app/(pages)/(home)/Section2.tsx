import CardItem from "@/app/components/card/CardItems";
import Title from "@/app/components/title/Title";

export default function Section2() {

    const data = [
        {
            image: "/demo/image-6.png",
            title: "Nhạc Trẻ",
            description: "Những ca khúc nhạc trẻ hay nhất hiện nay",
            link: "",
        },
        {
            image: "/demo/image-7.png",
            title: "Nhạc Trẻ",
            description: "Những ca khúc nhạc trẻ hay nhất hiện nay",
            link: "",
        },
        {
            image: "/demo/image-8.png",
            title: "Nhạc Trẻ",
            description: "Những ca khúc nhạc trẻ hay nhất hiện nay",
            link: "",
        },
        {
            image: "/demo/image-9.png",
            title: "Nhạc Trẻ",
            description: "Những ca khúc nhạc trẻ hay nhất hiện nay",
            link: "",
        },
        {
            image: "/demo/image-10.png",
            title: "Nhạc Trẻ",
            description: "Những ca khúc nhạc trẻ hay nhất hiện nay",
            link: "",
        },

    ]
    return (
        <>
            <div className="mt-[30px]">
                <Title text="Danh Mục Nổi Bật" />
                <div className="grid grid-cols-5 gap-[20px]">
                    {data.map((item, index) => (
                        <CardItem
                            key={index}
                            // image={item.image}
                            // title={item.title}
                            // description={item.description}
                            // link={item.link}
                            // Đây là cú pháp trả ra tất cả các thuộc tính của item 
                            {...item}
                        />
                    ))}

                </div>
            </div>
        </>
    );
}