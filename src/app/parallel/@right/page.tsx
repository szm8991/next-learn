export default async function Right() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return <div className="h-screen bg-green-500">right page</div>;
}
