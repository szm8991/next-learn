'use client';

import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <ProfileDetail />
    </Suspense>
  );
}
async function ProfileDetail() {
  throw new Promise(resolve => {});
  console.log('ProfileDetail call');
  await new Promise(resolve => setTimeout(resolve, 2000));
  return <h1>Profile detail</h1>;
}
