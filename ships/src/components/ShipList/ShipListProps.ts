import Vehicle from "../ShipPage/Vehicle";

type ShipListProps = {
    filteredVehicles: Vehicle[];
    currentPage: number;
    itemsPerPage: number;
};

export default ShipListProps;
