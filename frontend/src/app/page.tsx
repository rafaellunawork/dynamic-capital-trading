export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 text-white">
      <h1 className="text-4xl font-bold tracking-tight">Dynamic Capital</h1>
      <p className="mt-3 text-lg text-gray-400">Coming Soon</p>
      <div className="mt-6 flex gap-3">
        <span className="rounded-full bg-brand-600 px-4 py-1.5 text-sm font-medium">BTC</span>
        <span className="rounded-full bg-brand-600 px-4 py-1.5 text-sm font-medium">ETH</span>
        <span className="rounded-full bg-brand-600 px-4 py-1.5 text-sm font-medium">SOL</span>
      </div>
    </main>
  );
}
