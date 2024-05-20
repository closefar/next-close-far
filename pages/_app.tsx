import "../styles/globals.css";
import DefaultLayout from "../layouts/DefaultLayout";

// Import FCL config
import "../config/fcl";
import { ThemeProvider } from "@material-tailwind/react";

function MyApp({ Component, pageProps }) {
  return (
    <div className="text-[#212925] font-ysabeau">
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </div>
  );
}

export default MyApp;
