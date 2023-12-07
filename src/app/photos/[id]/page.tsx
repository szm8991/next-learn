import Frame from '@/components/frame';
import swagPhotos, { Photo } from '@/photos';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;
  console.log(id);
  // fetch data
  const product = await new Promise<{ title: string }>(resolve =>
    setTimeout(() => {
      resolve({
        title: 'A Dynamic Metadata',
      });
    }, 1500)
  );

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    openGraph: {
      images: ['/E8txb2yVkAQxRVw.jfif', ...previousImages],
    },
  };
}
export default function PhotoPage({ params: { id } }: Props) {
  const photo: Photo | undefined = swagPhotos.find(p => p.id === id);

  if (!photo) {
    notFound();
  }

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Frame photo={photo} />
      </div>
    </div>
  );
}
