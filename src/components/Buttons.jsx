const Buttons = () => {
  return (
    <>
      <div className="space-x-6 text-center text-xs md:text-xl text-black p-4">
        <button className="rounded-full bg-black px-5 py-3 text-white">
          Home
        </button>
        <button>Images</button>
        <button>Popular</button>
        <button>Custom</button>
      </div>
    </>
  );
};

export default Buttons;
