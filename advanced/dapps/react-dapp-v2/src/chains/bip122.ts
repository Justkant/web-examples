import { JsonRpcRequest } from "@walletconnect/jsonrpc-utils";
import {
  ChainMetadata,
  ChainRequestRender,
  ChainsMap,
  NamespaceMetadata,
} from "../helpers";

export const Bip122ChainData: ChainsMap = {
  ["000000000019d6689c085ae165831e93"]: {
    id: "bip122:000000000019d6689c085ae165831e93",
    name: "Bitcoin",
    rpc: [""],
    slip44: 0,
    testnet: false,
  },
  ["12a765e31ffd4059bada1e25190f6e98"]: {
    id: "bip122:12a765e31ffd4059bada1e25190f6e98",
    name: "Litecoin",
    rpc: [""],
    slip44: 2,
    testnet: false,
  },
  ["82bc68038f6034c0596b6e313729793a"]: {
    id: "bip122:82bc68038f6034c0596b6e313729793a",
    name: "Dogecoin",
    rpc: [""],
    slip44: 3,
    testnet: false,
  },
  ["000000000933ea01ad0ee984209779ba"]: {
    id: "bip122:000000000933ea01ad0ee984209779ba",
    name: "Bitcoin Testnet",
    rpc: [""],
    slip44: 1,
    testnet: true,
  },
};

export const Bip122Metadata: NamespaceMetadata = {
  ["000000000019d6689c085ae165831e93"]: {
    logo: "/assets/bitcoin.svg",
    rgb: "247, 147, 26",
  },
  ["000000000933ea01ad0ee984209779ba"]: {
    logo: "/assets/bitcoin.svg",
    rgb: "247, 147, 26",
  },
  ["12a765e31ffd4059bada1e25190f6e98"]: {
    logo: "/assets/litecoin.svg",
    rgb: "52, 93, 175",
  },
  ["82bc68038f6034c0596b6e313729793a"]: {
    logo: "/assets/dogecoin.svg",
    rgb: "101, 209, 150",
  },
};

export function getChainMetadata(chainId: string): ChainMetadata {
  const reference = chainId.split(":")[1];
  const metadata = Bip122Metadata[reference];
  if (typeof metadata === "undefined") {
    throw new Error(`No chain metadata found for chainId: ${chainId}`);
  }
  return metadata;
}

export function getChainRequestRender(
  request: JsonRpcRequest
): ChainRequestRender[] {
  return [
    { label: "Method", value: request.method },
    {
      label: "params",
      value: JSON.stringify(request.params, null, "\t"),
    },
  ];
}