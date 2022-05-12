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
        <div className="flex flex-col items-center justify-center bg-gray-50 min-h-screen px-4 overflow-hidden">
            <h1 className="text-center text-xl sm:text-4xl font-extrabold text-gray-900 mb-2">
                REGEN Account Viewer APP 🌱
            </h1>
            <h2 className="text-md sm:text-xl text-gray-500 mb-4">
                REDWOOD Tesnet
            </h2>
            <BalancePage address={wallet?.address} regenApi={regenApi} />
        </div>
    );
}

export default App;
