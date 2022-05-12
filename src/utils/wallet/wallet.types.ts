import { OfflineSigner } from "@cosmjs/proto-signing";

export interface Wallet {
    offlineSigner?: OfflineSigner;
    address: string;
}
