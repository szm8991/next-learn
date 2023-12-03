import Frame from '@/components/frame';
import swagPhotos, { Photo } from '@/photos';
import { notFound } from 'next/navigation';
export default function PhotoPage({ params: { id } }: { params: { id: string } }) {
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
