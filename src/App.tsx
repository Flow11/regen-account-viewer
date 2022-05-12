import { RegenApi } from "@regen-network/api/lib";
import BalancePage from "pages/BalancePage";
import React, { useEffect, useState } from "react";
import { getRegenApi } from "utils/regen/getRegenApi";
import { connectWallet } from "utils/wallet/connectWallet";
import { Wallet } from "utils/wallet/wallet.types";

function App() {
    const [wallet, setWallet] = useState<Wallet>();
    const [regenApi, setRegenApi] = useState<RegenApi>();

    useEffect(() => {
        connectWallet({ setWallet });
    }, [setWallet]);

    useEffect(() => {
        const initRegenApi = async () => {
            const api = await getRegenApi({ signer: wallet?.offlineSigner });
            setRegenApi(api);
        };

        if (wallet) {
            initRegenApi();
        }
    }, [wallet]);

    return (
        <div className="flex items-center justify-center">
            <h1 className="text-2xl font-bold">Account Viewer APP</h1>
            <BalancePage address={wallet?.address} regenApi={regenApi} />
        </div>
    );
}

export default App;
