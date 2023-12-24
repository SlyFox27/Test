import { FC, useState } from "react";
import ShipFilterProps from "./ShipFilterProps";
import ShipFilterOptions from "./ShipFilterOptions";

const ShipFilter: FC<ShipFilterProps> = ({
    levels,
    countries,
    types,
    onLevelChange,
    onCountryChange,
    onTypeChange,
    onResetBtnClick,
}) => {
    const [selectedLevelOption, setSelectedLevelOption] = useState<number>(0);
    const [selectedCountryOption, setSelectedCountryOption] =
        useState<string>("");
    const [selectedTypeOption, setSelectedTypeOption] = useState<string>("");

    const handleLevelChange = (value: number) => {
        setSelectedLevelOption(value);
        onLevelChange(value);
    };
    const handleCountryChange = (value: string) => {
        setSelectedCountryOption(value);
        onCountryChange(value);
    };
    const handleTypeChange = (value: string) => {
        setSelectedTypeOption(value);
        onTypeChange(value);
    };

    return (
        <div className="w-full md:w-full shadow p-5 bg-white backdrop-blur-xl">
            <h1 className="font-bold text-3xl bg-white">Ships</h1>
            <ShipFilterOptions
                levels={levels}
                countries={countries}
                types={types}
                selectedLevelOption={selectedLevelOption}
                selectedCountryOption={selectedCountryOption}
                selectedTypeOption={selectedTypeOption}
                handleLevelChange={handleLevelChange}
                handleCountryChange={handleCountryChange}
                handleTypeChange={handleTypeChange}
                setSelectedLevelOption={setSelectedLevelOption}
                setSelectedCountryOption={setSelectedCountryOption}
                setSelectedTypeOption={setSelectedTypeOption}
                onResetBtnClick={onResetBtnClick}
            />

        </div>
    );
};

export default ShipFilter;
