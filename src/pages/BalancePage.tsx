import { RegenApi } from "@regen-network/api/lib";
import AddressLink from "components/AddressLink";
import Amount from "components/Amount";
import DataRow from "components/DataRow";
import Loader from "components/Loader";
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
            <DataRow
                name="Account address:"
                value={<AddressLink address={address} />}
            />
            {balance ? (
                <DataRow
                    name="Amount:"
                    value={
                        <Amount
                            amount={formatAmount({
                                amount: balance.balances[0]?.amount ?? "0",
                            })}
                        />
                    }
                />
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default BalancePage;
