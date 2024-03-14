import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/components/logo';
import { chevronRightIcon } from '@/public/icons';
import { cn } from '@/lib/utils';

export default function NavigationBar() {
  return (
    <nav className="navbar flex justify-center px-4 sticky top-0 transition-all z-40">
      <div className="w-300 max-w-full flex items-center justify-between h-20 transition-all">
        <Logo />
        <ul className="flex gap-[30px] font-medium text-gray items-center">
          <li className="hover:text-purple hover:font-semibold transition-[font-weight] duration-200">
            <Link href="/generator">Generator</Link>
          </li>
          <li className="hover:text-purple hover:font-semibold transition-[font-weight] duration-200">
            <Link href="/docs">Docs</Link>
          </li>
          <li className="hover:text-purple hover:font-semibold transition-[font-weight] duration-200">
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <button
              className={cn(
                'group relative bg-purple text-white px-4 py-[6px] rounded-[14px] leading-5 flex items-center gap-2 overflow-hidden',
                'before:absolute before:bg-[#473797] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded-[14px]',
                'before:transition-[width] before:duration-300 hover:before:w-full',
              )}
            >
              <p className="z-10 pr-4 font-semibold transition-[padding] group-hover:px-2 duration-300">Sign In</p>
              <Image
                className="z-10 right-4 group-hover:-right-2 transition-[right] duration-300 absolute"
                src={chevronRightIcon}
                alt="chevron-right"
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}