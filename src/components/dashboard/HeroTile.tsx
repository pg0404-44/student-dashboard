export default function HeroTile() {
  return (
   <article
  className="
    relative
    overflow-hidden
    rounded-3xl
    border
    border-zinc-800
    bg-zinc-900
    p-8
  "
>
  <div
    className="
      absolute
      -right-20
      -top-20
      h-60
      w-60
      rounded-full
      bg-purple-500/20
      blur-3xl
    "
  />

  <h1 className="relative text-4xl font-bold">
    Welcome Back, Praniti 👋
  </h1>

  <p className="relative mt-4 text-zinc-400">
    🔥 14 Day Learning Streak
  </p>
</article>
  );
}