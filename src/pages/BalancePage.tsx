import { RegenApi } from "@regen-network/api/lib";
import useAllBalance from "hooks/queries/useAllBalance";

type BalancePageProps = {
    regenApi?: RegenApi;
    address?: string;
};

const BalancePage = ({ regenApi, address }: BalancePageProps) => {
    const balance = useAllBalance({ address, api: regenApi });

    return (
        <div>
            {balance ? (
                <code>{JSON.stringify(balance)}</code>
            ) : (
                <span>{"Loading ..."}</span>
            )}
        </div>
    );
};

export default BalancePage;
