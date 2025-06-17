export default function Title(props: { text: string, className?: string }) {
    const { text, className = ""} = props;
    return (
        <>
            <div className={"font-[700] text-[24px] text-white mb-[20px] capacillize " + className}>
                {text}
            </div>
        </>
    );
}