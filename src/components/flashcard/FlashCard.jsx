import ReactCardFlip from "react-card-flip";

const FlashCard = ({ isFlipped, handleClick, front, back }) => {
  return (
    <div className="w-full flex justify-center">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div
          className="bg-primary text-white p-4 shadow-lg rounded-lg flex items-center justify-center cursor-pointer h-[250px] w-[200px] md:h-[350px] md:w-[300px]"
          onClick={handleClick}
        >
          <div>
            <h2 className="text-center">{front}</h2>
          </div>
        </div>

        <div
          className="p-4 bg-white shadow-lg text-primary rounded-lg flex items-center justify-center cursor-pointer h-[250px] w-[200px] md:h-[350px] md:w-[300px]"
          onClick={handleClick}
        >
          <div>
            <h2 className="text-center">{back}</h2>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default FlashCard;
