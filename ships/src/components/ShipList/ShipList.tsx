import { FC, useState } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";
import client from "../../apollo";

import { ShipCard } from "../ShipCard/ShipCard";
import { ShipFilters } from "../ShipFilters/ShipFilters";
import { ShipNotFound } from "../ShipNotFound/ShipNotFound";

const SHIPLIST_QUERY = gql`
    {
        vehicles {
            title
            description
            icons {
                large
                medium
            }
            level
            type {
                name
                title
                icons {
                    default
                }
            }
            nation {
                name
                title
                color
                icons {
                    small
                    medium
                    large
                }
            }
        }
    }
`;

type Vehicle = {
    title: string;
    description: string;
    icons: {
        large: string;
        medium: string;
    };
    level: number;
    type: {
        name: string;
        title: string;
        icons: {
            default: string;
        };
    };
    nation: {
        name: string;
        title: string;
        color: string;
        icons: {
            small: string;
            medium: string;
            large: string;
        };
    };
};

const ShipList: FC = () => {
    const [selectedLevel, setSelectedLevel] = useState<number>(0);
    const [selectedCountry, setSelectedCountry] = useState<string>("");
    const [selectedType, setSelectedType] = useState<string>("");
    const resetFilters = () => {
        setSelectedLevel(0);
        setSelectedCountry("");
        setSelectedType("");
    };

    const { data, loading, error } = useQuery(SHIPLIST_QUERY, { client });
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
        new Set<string>(data.vehicles.map((vehicle: Vehicle) => vehicle.type.title))
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

    return (
        <>
            <nav className="fixed top-0 w-full">
                <ShipFilters
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
                <div className="grid grid-cols-3 mt-28">
                    {filteredVehicles.map((vehicle: Vehicle, index: number) => (
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
            ) : (
                <ShipNotFound />
            )}
        </>
    );
};

export default ShipList;
