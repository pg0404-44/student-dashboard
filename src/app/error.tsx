"use client";

export default function Error({
  error,
}: {
  error: Error;
}) {
  return (
    <main className="p-10 text-white">
      <h1>Something went wrong.</h1>
      <p>{error.message}</p>
    </main>
  );
}