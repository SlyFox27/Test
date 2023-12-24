import { FC } from "react";
import ShipCardProps from "./ShipCardProps";

const ShipCard: FC<ShipCardProps> = ({
    imageUrl,
    nation,
    title,
    level,
    type,
    description,
}) => {
    return (
        <div className="m-7 max-w-xl rounded overflow-hidden shadow-lg">
            <img src={nation.icons.medium} alt={`Flag: ${nation.title}`} />
            <img className="w-full" src={imageUrl} alt={title} />
            <h2 className="font-bold text-xl mb-2">{title}</h2>
            <h3 className="font-bold text-md mb-2">{nation.title}</h3>
            <h3 className="font-bold text-md mb-2">
                Level {level} {type}
            </h3>
            <div className="px-6 py-4">
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
};

export default ShipCard;
