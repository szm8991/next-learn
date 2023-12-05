export default async function Page() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return (
    <div>
      <h1 className="text-black text-3xl font-bold">About</h1>
    </div>
  );
}
