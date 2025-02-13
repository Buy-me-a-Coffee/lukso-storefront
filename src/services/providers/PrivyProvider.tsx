import {PrivyProvider} from '@privy-io/react-auth';
import logo from "../../assets/react.svg";

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
        loginMethodsAndOrder: {
          primary: ['universal_profile']
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}