'use client';
export default function Layout({ children }: { children: React.ReactNode }) {
  console.log('layout render');
  return <>{children}</>;
}
