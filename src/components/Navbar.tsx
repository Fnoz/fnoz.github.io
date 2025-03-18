'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed w-full z-50 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 items-center">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <div className="relative w-16 h-16">
              <Image
                src="/logo.png"
                alt="INII Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <span className="text-2xl ubuntu-bold text-[#120652]">
              I<span className="text-[#FFAC3C]">N</span>II
            </span>
          </Link>
        </div>

        <div className="flex lg:flex-1 lg:justify-end">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:fnoz@inii.tech"
            className="text-sm font-semibold leading-6 text-[#120652] hover:text-[#363561]"
          >
            Email <span className="text-[#FFAC3C]">Us</span>
          </motion.a>
        </div>
      </nav>
    </header>
  );
} 