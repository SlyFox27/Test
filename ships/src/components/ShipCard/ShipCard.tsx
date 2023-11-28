import { FC, PropsWithChildren } from "react";

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

type ShipCardProps = PropsWithChildren<{
    imageUrl: string;
    nation: Nation;
    title: string;
    level: number;
    type: string;
    description: string;
}>;

export const ShipCard: FC<ShipCardProps> = (props) => {
    const { imageUrl, nation, title, level, type, description } = props;

    return (
        <div className={`m-7 max-w-xl rounded overflow-hidden shadow-lg `}>
            <img src={nation.icons.small} alt={nation.title} />
            <img className="w-full" src={imageUrl} alt={title} />
            <h2 className="font-bold text-xl mb-2">{title}</h2>
            <h3 className={`font-bold text-md mb-2`}>{nation.title}</h3>
            <h3 className="font-bold text-md mb-2">
                Level {level} {type}
            </h3>
            <div className="px-6 py-4">
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
};
