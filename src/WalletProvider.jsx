import { createAppKit } from "@reown/appkit/react";
import { bsc } from "@reown/appkit/networks";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

const projectId = "11122997d03999ce33f0f85fb93ee6d7";
const networks = [bsc];
const wagmiAdapter = new WagmiAdapter({ networks, projectId });
const queryClient = new QueryClient();

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata: {
    name: "HANA",
    description: "HANA ecosystem",
    url: window.location.origin,
  },
  features: {
    analytics: true,
  },
});

export default function WalletProvider({ children }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
