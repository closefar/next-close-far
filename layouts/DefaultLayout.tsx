import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function DefaultLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-auto">{children}</main>
      <Footer />
    </div>
  );
}
