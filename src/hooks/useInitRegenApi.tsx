import { RegenApi } from "@regen-network/api/lib";
import { useEffect } from "react";
import { useStateSetter } from "types/react";
import { getRegenApi } from "utils/regen/getRegenApi";
import { Wallet } from "utils/wallet/wallet.types";

type Props = {
    setRegenApi: useStateSetter<RegenApi | undefined>;
    wallet?: Wallet;
};

const useInitRegenApi = ({ setRegenApi, wallet }: Props) => {
    useEffect(() => {
        const initRegenApi = async () => {
            const api = await getRegenApi({ signer: wallet?.offlineSigner });
            setRegenApi(api);
        };

        if (wallet) {
            initRegenApi();
        }
    }, [wallet, setRegenApi]);
};

export default useInitRegenApi;
