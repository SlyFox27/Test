import { FC } from "react";
import ShipLevelOptionsProps from "./ShipFilterOptionsProps";

const ShipFilterOptions: FC<ShipLevelOptionsProps> = ({
    levels,
    countries,
    types,
    handleLevelChange,
    handleCountryChange,
    handleTypeChange,
    selectedLevelOption,
    selectedCountryOption,
    selectedTypeOption,
    setSelectedLevelOption,
    setSelectedCountryOption,
    setSelectedTypeOption,
    onResetBtnClick
}) => (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        <select
            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            onChange={(e) => handleLevelChange(Number(e.target.value))}
            value={selectedLevelOption}
        >
            <option value="0">Any Level</option>
            {levels
                .sort(function compareNumbers(a, b) {
                    return a - b;
                })
                .map((level) => (
                    <option key={level} value={level}>
                        {`Level ${level}`}
                    </option>
                ))}
        </select>

        <select
            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            onChange={(e) => handleCountryChange(e.target.value)}
            value={selectedCountryOption}
        >
            <option value="">Any Country</option>
            {countries.sort().map((country) => (
                <option key={country} value={country}>
                    {country}
                </option>
            ))}
        </select>

        <select
            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            onChange={(e) => handleTypeChange(e.target.value)}
            value={selectedTypeOption}
        >
            <option value="">Any Type</option>
            {types.sort().map((type) => (
                <option key={type} value={type}>
                    {type}
                </option>
            ))}
        </select>

        <span>
            <button
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md w-2/4"
                onClick={() => {
                    onResetBtnClick();
                    setSelectedLevelOption(0);
                    setSelectedCountryOption("");
                    setSelectedTypeOption("");
                }}
            >
                Reset
            </button>
        </span>
    </div>
);

export default ShipFilterOptions;
