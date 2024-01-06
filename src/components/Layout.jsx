import { motion } from "framer-motion";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { Navigation } from "@/components/Navigation";
import { Prose } from "@/components/Prose";
import { SectionProvider } from "@/components/SectionProvider";
import clsx from "clsx";

export function Layout({ children, sections = [] }) {
  return (
    <SectionProvider sections={sections}>
      <div className="lg:ml-72 xl:ml-80">
        <motion.header
          layoutScroll
          className={clsx(
            "fixed inset-y-0 left-0 z-40 contents w-72 overflow-y-auto border-r border-zinc-900/10 px-6 pt-4 pb-8 dark:border-white/10 lg:block xl:w-80",
            "scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-thumb-rounded-md dark:scrollbar-track-zinc-900 dark:scrollbar-thumb-zinc-800"
          )}
        >
          <div className="hidden lg:flex">
            <Link href="/" aria-label="Home">
              <Logo className="hidden h-auto lg:block" />
            </Link>
          </div>
          <Header />
          <Navigation className="hidden lg:mt-10 lg:block" />
        </motion.header>
        <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
          <main className="py-16">
            <Prose as="article">{children}</Prose>
          </main>
          <Footer />
        </div>
      </div>
    </SectionProvider>
  );
}
