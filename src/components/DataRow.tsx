import { ReactNode } from "react";

type Props = {
    name: string;
    value: ReactNode;
};

const DataRow = ({ name, value }: Props) => (
    <div className="flex flex-col sm:flex-row mb-4 items-center">
        <span className="text-lg leading-6 font-medium text-gray-500 mr-2">
            {name}
        </span>
        {value}
    </div>
);

export default DataRow;
