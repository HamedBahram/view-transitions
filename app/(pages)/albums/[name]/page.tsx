import { Link } from 'next-view-transitions'

import { AlbumArtwork } from '@/components/album-artwork'
import { Album, listenNowAlbums, madeForYouAlbums } from '@/data/albums'

export default function AlbumPage({ params }: { params: { name: string } }) {
  const albums = [...listenNowAlbums, ...madeForYouAlbums]
  const album = albums.find(album => album.slug === params.name) as Album

  return (
    <section className='py-12'>
      {/* Back button */}
      <Link href='/' className='text-sm text-gray-500 hover:text-gray-700'>
        &larr; Back
      </Link>

      <div className='mt-4'>
        <AlbumArtwork
          album={album}
          className='w-[250px]'
          aspectRatio='portrait'
          width={250}
          height={330}
        />
      </div>
    </section>
  )
}
