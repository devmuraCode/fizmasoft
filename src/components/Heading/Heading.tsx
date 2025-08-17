"use client";

interface HeadingProps {
  text: string;
  highlights?: string[];
  highlightClass?: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  text,
  highlights = [],
  highlightClass = "text-blue-400",
  className = "",
}) => {
  return (
    <h1 className={`heading ${className}`}>
      {text.split(" ").map((word, index) => {
        const cleanWord = word.replace(/[.,]/g, "");
        const isHighlighted = highlights.includes(cleanWord);

        return (
          <span key={index} className={isHighlighted ? highlightClass : ""}>
            {word}{" "}
          </span>
        );
      })}
    </h1>
  );
};

export default Heading;
