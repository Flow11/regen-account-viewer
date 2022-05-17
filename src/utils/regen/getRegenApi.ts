import { RegenApi } from '@regen-network/api/lib'
import { OfflineSigner } from '@cosmjs/proto-signing'
import { REDWOOD_RPC_ENDPOINT } from './regen.constans'

interface GetRegenApiParams {
  signer?: OfflineSigner
}

export const getRegenApi = async ({
  signer
}: GetRegenApiParams): Promise<RegenApi | undefined> => {
  const api = await RegenApi.connect({
    connection: {
      type: 'tendermint',
      endpoint: REDWOOD_RPC_ENDPOINT,
      signer: signer
    }
  })
  return api
}
