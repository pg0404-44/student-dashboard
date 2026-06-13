export default function ActivityTile() {
  const cells = Array.from({ length: 35 });

  return (
    <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-4 text-lg font-semibold">
        Learning Activity
      </h2>

      <div className="grid grid-cols-7 gap-2">
        {cells.map((_, index) => (
          <div
            key={index}
            className="h-6 w-6 rounded bg-green-500"
            style={{
             opacity: 0.2 + Math.random() * 0.8
            }}
          />
        ))}
      </div>
    </article>
  );
}