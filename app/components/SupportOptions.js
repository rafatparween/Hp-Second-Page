import Image from "next/image";

const supportOptions = [
  {
    id: 1,
    src: "/download.png", // Replace with actual image path
    alt: "Download Drivers",
    text: "Download Drivers >",
  },
  {
    id: 2,
    src: "/tick.png",
    alt: "Check warranty status",
    text: "Check warranty status >",
  },
  {
    id: 3,
    src: "/call.png",
    alt: "Contact us",
    text: "Contact us >",
  },
  {
    id: 4,
    src: "/fix.png",
    alt: "Diagnose & Fix",
    text: "Diagnose & Fix >",
  },
];

const SupportOptions = () => {
  return (
    <div className="max-w-[1280px] mx-auto py-6">
      {/* Top Horizontal Line */}
      <hr className="border-gray-300 mb-6" />

      {/* Icons Container */}
      <div className="flex items-center justify-between bg-white px-10">
        {supportOptions.map((option, index) => (
          <div key={option.id} className="flex flex-col items-center w-1/4 relative">
            {/* Icon */}
            <div className="relative w-[137px] h-[137px]">
              <Image
                src={option.src}
                alt={option.alt}
                layout="fill"
                objectFit="contain"
              />
            </div>

            {/* Text */}
            <p className="text-blue-600 mt-2 text-sm font-medium">
              {option.text}
            </p>

            {/* Vertical Divider (except last item) */}
            {index < supportOptions.length - 1 && (
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[132px] border-l border-gray-300"></div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Horizontal Line */}
      <hr className="border-gray-300 mt-6" />
    </div>
  );
};

export default SupportOptions;
