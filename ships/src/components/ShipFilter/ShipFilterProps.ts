type ShipFilterProps = {
    levels: number[];
    countries: string[];
    types: string[];
    onLevelChange: (level: number) => void;
    onCountryChange: (country: string) => void;
    onTypeChange: (type: string) => void;
    onResetBtnClick: () => void;
};

export default ShipFilterProps;
