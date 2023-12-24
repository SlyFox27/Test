import { FC } from "react";
import ShipCard from "../ShipCard/ShipCard";
import ShipListProps from "./ShipListProps";

const ShipList: FC<ShipListProps> = ({
    filteredVehicles,
    currentPage,
    itemsPerPage,
}) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentPageVehicles = filteredVehicles.slice(startIndex, endIndex);

    return (
        <div className="grid grid-cols-3 mt-28">
            {currentPageVehicles.map((vehicle, index) => (
                <ShipCard
                    key={index}
                    imageUrl={vehicle.icons.medium}
                    nation={vehicle.nation}
                    title={vehicle.title}
                    level={vehicle.level}
                    type={vehicle.type.title}
                    description={vehicle.description}
                />
            ))}
        </div>
    );
};

export default ShipList;
