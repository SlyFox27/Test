import { FC, useState } from "react";

type ShipFiltersProps = {
    levels: number[];
    countries: string[];
    types: string[];
    onLevelChange: (level: number) => void;
    onCountryChange: (country: string) => void;
    onTypeChange: (type: string) => void;
    onResetBtnClick: () => void;
};

export const ShipFilters: FC<ShipFiltersProps> = ({
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
            <div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                    <select
                        className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                        onChange={(e) =>
                            handleLevelChange(Number(e.target.value))
                        }
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
            </div>
        </div>
    );
};
