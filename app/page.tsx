import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-neutral-900 p-4 md:h-52">
        {/* <AcmeLogo /> */}
        <h4 className='text-xl text-white md:text-3xl md:leading-normal'><strong>Responsive</strong></h4>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-1xl text-gray-800 md:leading-normal`}>
          STRATEGIC RESPONSE MANAGEMENT LEADER
          </p>
          <h2 className='text-6xl w-96'>AI that turns responses into revenue</h2>

          <p className='text-2xl w-96'>Pursue the right opportunities and win more of them. Responsive AI powers bids, questionnaires, and trust centers with insight, accuracy, and speed.
          </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-lime-500 md:text-base"
          >
            <span>Our Dashboard </span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */
          
          
          <Image
          src="/hero-desktop.png"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />}

          
        </div>
      </div>
    </main>
  );
}
