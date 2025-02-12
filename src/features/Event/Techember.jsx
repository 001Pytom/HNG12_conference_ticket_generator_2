function Techember() {
  return (
    <div className="flex flex-col items-center gap-2 border-[2px] p-3 md:p-6  rounded-3xl text-center border-custom border-solid  backdrop-blur-14 bg-custom-gradient-2">
      <h1 className="font-roadrage font-normal text-5xl md:text-6xl">
        Techember Fest ”25{" "}
      </h1>
      <p className="max-w-[340px] font-roboto text-sm md:text-base">
        Join us for an unforgettable experience at [Event Name]! Secure your
        spot now.
      </p>
      <p className="font-roboto text-sm md:text-base">
        📍 [Event Location] <span className="px-4">||</span>March 15, 2025 |
        7:00 PM
      </p>
    </div>
  );
}

export default Techember;
