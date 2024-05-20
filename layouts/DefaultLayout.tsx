import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function DefaultLayout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="h-full">{children}</main>
      <Footer />
    </div>
  );
}
