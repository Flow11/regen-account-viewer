import { RegenApi } from "@regen-network/api/lib";
import useAllBalance from "hooks/queries/useAllBalance";
import { formatAmount } from "utils/format/formatAmout";

type BalancePageProps = {
    regenApi?: RegenApi;
    address?: string;
};

const BalancePage = ({ regenApi, address }: BalancePageProps) => {
    const balance = useAllBalance({ address, api: regenApi });

    return (
        <div className="text-center">
            <div>
                Account address:{" "}
                <a
                    href={`https://redwood.regen.aneka.io/accounts/${address}`}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-blue-500"
                >
                    {address ?? "Loading ..."}
                </a>
            </div>

            {balance ? (
                <span>
                    {`Amount: ${formatAmount({
                        amount: balance.balances[0]?.amount ?? "0",
                    })} REGEN`}
                </span>
            ) : (
                <span>{"Loading ..."}</span>
            )}
        </div>
    );
};

export default BalancePage;
