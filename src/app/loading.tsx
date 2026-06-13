export default function Loading() {
  return (
    <main className="min-h-screen bg-black p-6">
      <div className="grid gap-4 lg:grid-cols-4">

        <div className="h-56 animate-pulse rounded-3xl bg-zinc-900" />

        <div className="h-56 animate-pulse rounded-3xl bg-zinc-900" />

        <div className="h-56 animate-pulse rounded-3xl bg-zinc-900" />

        <div className="h-56 animate-pulse rounded-3xl bg-zinc-900" />

      </div>
    </main>
  );
}