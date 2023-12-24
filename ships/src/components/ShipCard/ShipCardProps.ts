type Nation = {
    name: string;
    title: string;
    color: string;
    icons: {
        small: string;
        medium: string;
        large: string;
    };
};

type ShipCardProps = {
    imageUrl: string;
    nation: Nation;
    title: string;
    level: number;
    type: string;
    description: string;
};

export default ShipCardProps;
