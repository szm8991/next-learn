export default async function Left() {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return <div className="h-screen bg-red-500">left page</div>;
}
