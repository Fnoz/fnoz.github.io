'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <span className="text-2xl ubuntu-bold text-[#262450]">
              INII
            </span>
          </Link>
        </div>

        <div className="flex lg:flex-1 lg:justify-end">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:fnoz@inii.tech"
            className="rounded-full bg-[#262450] px-5 py-2.5 text-sm ubuntu-medium text-white shadow-sm hover:bg-[#363561] transition-colors"
          >
            Contact Us
          </motion.a>
        </div>
      </nav>
    </header>
  );
} 