import { RegenApi } from "@regen-network/api/lib";
import useInitRegenApi from "hooks/useInitRegenApi";
import useInitWaller from "hooks/useInitWallet";
import BalancePage from "pages/BalancePage";
import React, { useState } from "react";
import { Wallet } from "utils/wallet/wallet.types";

function App() {
    const [wallet, setWallet] = useState<Wallet>();
    const [regenApi, setRegenApi] = useState<RegenApi>();

    // Could be used along with React.createContext to avoid props drilling
    useInitWaller({ setWallet });
    useInitRegenApi({ setRegenApi, wallet });

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">
                REGEN Redwood Account Viewer APP 🌱
            </h1>
            <BalancePage address={wallet?.address} regenApi={regenApi} />
        </div>
    );
}

export default App;
