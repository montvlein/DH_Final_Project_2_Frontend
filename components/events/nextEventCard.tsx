import Link from 'next/link';
import Image from 'next/image';

const NextEventCard: React.FC = function () {
  const cat = {
    title: 'id',
    img: 'https://6.soompi.io/wp-content/uploads/image/20230824065223_2023082406_blackpink-2.png?s=900x600&e=t'
  };
  return (
    <article className='rounded-2xl overflow-hidden shadow-xl max-w-sm'>
      <Link href={`event/${cat.title}`} className='relative lg:max-h-none '>
        <Image
          src={cat.img}
          alt={cat.title}
          width={344}
          height={197}
          className='object-cover w-full'
        />
        <div className='p-4 flex gap-6'>
          <p className='flex flex-col items-center font-bold'>
            <span className='text-blue-500'>APR</span>
            <span className='text-3xl'>14</span>
          </p>
          <div className='text-base'>
            <h4 className='mb-2'>Wonder Girls 2010 Wonder Girls World Tour San Francisco</h4>
            <p className='text-sm font-normal text-gray-600'>
              We’ll get you directly seated and inside for you to enjoy the show.
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default NextEventCard;
