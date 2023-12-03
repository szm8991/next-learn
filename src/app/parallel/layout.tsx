export default async function Layout({
  children,
  left,
  right,
}: {
  children: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {children}
      {left}
      {right}
    </div>
  );
}
