export const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-xl">FINNRICK RATING™</span>
        <span
          className="size-5 flex items-center justify-center rounded-full border-[1.5px] border-gray-400 text-gray-400 text-sm cursor-pointer"
          title="More info"
        >
          ?
        </span>
      </div>
      <hr className="border-black mb-4" />
    </>
  );
};
