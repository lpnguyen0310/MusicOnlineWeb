export default function Title(props: { text: string }) {
    const { text } = props;
    return (
        <>
            <div className="font-[700] text-[24px] text-white mb-[20px] capacillize">
                {text}
            </div>
        </>
    );
}