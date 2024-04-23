import Image from 'next/image'
import { Link } from 'next-view-transitions'

import { Album, listenNowAlbums, madeForYouAlbums } from '@/data/albums'

export default function AlbumPage({ params }: { params: { name: string } }) {
  const mergedAlbums = [...listenNowAlbums, ...madeForYouAlbums]
  const mapFromAlbums = new Map(mergedAlbums.map(album => [album.slug, album]))
  const uniqueAlbums = Array.from(mapFromAlbums.values())
  const album = uniqueAlbums.find(album => album.slug === params.name) as Album

  return (
    <section className='py-12'>
      <Link href='/' className='text-sm text-gray-500 hover:text-gray-700'>
        &larr; Back
      </Link>

      <div className='mt-4'>
        <div className='overflow-hidden rounded-md'>
          <Image
            src={album.cover}
            alt={album.name}
            width={250}
            height={330}
            className='aspect-[3/4] h-auto w-auto object-cover'
          />
        </div>

        <div className='mt-2 space-y-1 text-sm'>
          <h3 className='font-medium leading-none'>{album.name}</h3>
          <p className='text-xs text-muted-foreground'>{album.artist}</p>
        </div>
      </div>
    </section>
  )
}
