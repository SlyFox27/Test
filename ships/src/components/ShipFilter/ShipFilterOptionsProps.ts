type ShipLevelOptionsProps = {
    levels: number[];
    countries: string[];
    types: string[];
    selectedLevelOption: number;
    selectedCountryOption: string;
    selectedTypeOption: string;
    handleLevelChange: (value: number) => void;
    handleCountryChange: (value: string) => void;
    handleTypeChange: (value: string) => void;
    setSelectedLevelOption: (value: number) => void;
    setSelectedCountryOption: (value: string) => void;
    setSelectedTypeOption: (value: string) => void;
    onResetBtnClick: () => void;
};

export default ShipLevelOptionsProps;
