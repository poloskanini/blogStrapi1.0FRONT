import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold text-custom-purple mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Désolé, cette page n&apos;existe pas.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-full bg-custom-purple text-white font-medium hover:bg-custom-purple/80 transition"
        >
          Retour à l&apos;accueil
        </Link>
      </main>
      <Footer />
    </>
  );
}
