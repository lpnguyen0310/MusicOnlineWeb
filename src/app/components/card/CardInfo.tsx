export default function CardInfo(props: any) {
    const { image, title, description} = props;
    return (
        <>
        <div className="flex items-center">
        <div className="w-[180px] aspect-square rounded-[15px] truncate">
          <img 
            src={image}
            alt="Nhạc trẻ"
            className="w-full h-full object-cover"
          
          />
        </div>
        <div className="flex-1 ml-[20px]">
            <h1 className="font-[700] text-[35px] text-[#00ADEF]">
              {title}
            </h1>
            <div className="font-[400] text-[14px] text-[#EFEEE0] mt-[10px]">
                {description}
            </div>
        </div>
      </div>
        </>
    );
}