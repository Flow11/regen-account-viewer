import { useEffect } from "react";
import { useStateSetter } from "types/react";
import { connectWallet } from "utils/wallet/connectWallet";
import { Wallet } from "utils/wallet/wallet.types";

type Props = {
    setWallet: useStateSetter<Wallet | undefined>;
};

const useInitWaller = ({ setWallet }: Props) => {
    useEffect(() => {
        try {
            connectWallet({ setWallet });
        } catch (e) {
            console.error(e);
            // try one more time
            setTimeout(() => connectWallet({ setWallet }), 1000);
        }
    }, [setWallet]);
};

export default useInitWaller;
