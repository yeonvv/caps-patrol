import NextPage from "@/components/next-page";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="tracking-widest">
      <Component {...pageProps} />
    </div>
  );
}
