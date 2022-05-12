import { useEffect } from "react";
import { useStateSetter } from "types/react";
import { connectWallet } from "utils/wallet/connectWallet";
import { Wallet } from "utils/wallet/wallet.types";

type Props = {
    setWallet: useStateSetter<Wallet | undefined>;
};

const useInitWaller = ({ setWallet }: Props) => {
    useEffect(() => {
        connectWallet({ setWallet });
    }, [setWallet]);
};

export default useInitWaller;
