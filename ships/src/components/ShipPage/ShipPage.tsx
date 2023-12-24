import { FC, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import client from "../../apollo";
import ShipPageQuery from "./ShipPageQuery";
import ShipList from "../ShipList/ShipList";
import ShipFilter from "../ShipFilter/ShipFilter";
import ShipNotFound from "../ShipNotFound/ShipNotFound";
import PaginationControls from "../PaginationControls/PaginationControls";
import Vehicle from "./Vehicle";

const itemsPerPage = 9;

const ShipPage: FC = () => {
    const [selectedLevel, setSelectedLevel] = useState<number>(0);
    const [selectedCountry, setSelectedCountry] = useState<string>("");
    const [selectedType, setSelectedType] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const resetFilters = () => {
        setSelectedLevel(0);
        setSelectedCountry("");
        setSelectedType("");
        setCurrentPage(1);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedLevel, selectedCountry, selectedType]);

    const { data, loading, error } = useQuery(ShipPageQuery, { client });
    console.log("DATA", data);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const levels: number[] = Array.from(
        new Set<number>(data.vehicles.map((vehicle: Vehicle) => vehicle.level))
    );
    const countries: string[] = Array.from(
        new Set<string>(
            data.vehicles.map((vehicle: Vehicle) => vehicle.nation.title)
        )
    );
    const types: string[] = Array.from(
        new Set<string>(
            data.vehicles.map((vehicle: Vehicle) => vehicle.type.title)
        )
    );

    const filteredVehicles = data.vehicles.filter((vehicle: Vehicle) => {
        const levelMatch =
            selectedLevel === 0 || vehicle.level === selectedLevel;
        const countryMatch =
            selectedCountry === "" || vehicle.nation.title === selectedCountry;
        const typeMatch =
            selectedType === "" || vehicle.type.title === selectedType;

        return levelMatch && countryMatch && typeMatch;
    });
    console.log("filteredVehicles", filteredVehicles);

    const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <nav className="fixed top-0 w-full">
                <ShipFilter
                    levels={levels}
                    countries={countries}
                    types={types}
                    onLevelChange={setSelectedLevel}
                    onCountryChange={setSelectedCountry}
                    onTypeChange={setSelectedType}
                    onResetBtnClick={resetFilters}
                />
            </nav>
            {filteredVehicles.length ? (
                <>
                    <ShipList
                        filteredVehicles={filteredVehicles}
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                    />
                    <PaginationControls
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </>
            ) : (
                <ShipNotFound />
            )}
        </>
    );
};

export default ShipPage;
