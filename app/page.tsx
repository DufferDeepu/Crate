import Navbar from "@/components/navbar";
import WalletGenerator from "@/components/walletGenerator";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto flex flex-col gap-4 p-4 min-h-[92vh]">
      <Navbar />
      <WalletGenerator />
    </main>
  );
}
