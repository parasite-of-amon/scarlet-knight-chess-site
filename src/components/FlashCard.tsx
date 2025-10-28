import { useState } from "react";

interface FlashCardProps {
  title: string;
  content: string;
  bgColor?: string;
}

export const FlashCard = ({ title, content, bgColor = "bg-white" }: FlashCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-64 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div
          className={`absolute w-full h-full ${bgColor} rounded-lg shadow-lg p-6 flex items-center justify-center backface-hidden border-2 border-gray-200`}
        >
          <h3 className="font-serif text-2xl font-bold text-center">{title}</h3>
        </div>

        <div
          className={`absolute w-full h-full bg-yellow-50 rounded-lg shadow-lg p-6 flex items-center justify-center backface-hidden rotate-y-180 border-2 border-yellow-500`}
        >
          <p className="text-gray-700 text-center leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
};
