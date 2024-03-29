import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { contributeImage, subscribeImage } from '@/public';
import { SubscribeForm } from '@/components/subscribe-form';

export default function SubscribeSection() {
  return (
    <section aria-label="subscribe-section" className="mt-30 flex justify-center px-4">
      <div className="w-300 max-w-full flex rounded-3xl overflow-hidden drop-shadow bg-white">
        <div className="flex-1 flex flex-col items-center justify-center p-10 xl:p-20">
          <Image src={subscribeImage} alt="Subscribe" className="h-40 w-auto" />
          <h2 className="font-bold text-3xl mt-2 text-center">Subscribe Newsletter</h2>
          <p className="text-lg leading-7 text-gray text-center mt-2">
            Subscribe and stay informed about everything related to Projectopia.
          </p>
          <SubscribeForm />
        </div>
        <div className="h-full w-[1px] bg-gray/20"></div>
        <div className="flex-1 flex flex-col items-center justify-center p-10 xl:p-20">
          <Image src={contributeImage} alt="Subscribe" className="h-40 w-auto" />
          <h2 className="font-bold text-3xl mt-2 text-center">Contribute Projectopia</h2>
          <p className="text-lg leading-7 text-gray text-center mt-2">
            Broaden your selection by contributing your project&apos;s template to our collection.
          </p>
          <Link
            href="https://github.com/projectopia"
            rel="noopener noreferrer"
            target="_blank"
            className="flex justify-center mt-8"
          >
            <Button
              className={cn(
                'bg-white border border-solid border-purple px-5 py-2 font-medium leading-6 text-purple hover:text-white hover:bg-purple',
                'flex items-center gap-1 group text-base',
              )}
            >
              Get Started
              <ChevronRight size={16} className="text-purple group-hover:text-white transition" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
