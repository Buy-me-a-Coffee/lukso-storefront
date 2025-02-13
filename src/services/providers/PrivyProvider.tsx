import {PrivyProvider} from '@privy-io/react-auth';
import logo from "../../assets/react.svg";

const luksoChain = {
  id: 42,
  name: 'LUKSO',
  network: 'lukso',
  nativeCurrency: {
    decimals: 18,
    name: 'LYX',
    symbol: 'LYX',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.lukso.network'],
    },
  },
  blockExplorers: {
    default: { name: 'LUKSO Explorer', url: 'https://explorer.lukso.network' },
  },
};

export default function Privy({children}: {children: React.ReactNode}) {
  return (
    <PrivyProvider
      appId="cm736z3nx00eq10o87e992e5g"
      config={{
        // Customize Privy's appearance in your app
        appearance: {
          theme: 'light',
          accentColor: '#de2f74',
          logo: logo,
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
        supportedChains: [luksoChain],
        defaultChain: luksoChain,
      }}
    >
      {children}
    </PrivyProvider>
  );
}