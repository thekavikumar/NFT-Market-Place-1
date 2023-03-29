import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { EthereumClassicTestnetMorden } from "@thirdweb-dev/chains";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={EthereumClassicTestnetMorden}>
      <Component {...pageProps} />{" "}
    </ThirdwebProvider>
  );
}
