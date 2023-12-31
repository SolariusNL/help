import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { forwardRef } from "react";

import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import {
  MobileNavigation,
  useIsInsideMobileNavigation,
  useMobileNavigationStore,
} from "@/components/MobileNavigation";
import { ModeToggle } from "@/components/ModeToggle";
import { MobileSearch, Search } from "@/components/Search";
import useUserStore from "@/stores/user-store";
import Image from "next/image";

function TopLevelNavItem({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}

export const Header = forwardRef(function Header({ className }, ref) {
  let { isOpen: mobileNavIsOpen } = useMobileNavigationStore();
  let isInsideMobileNavigation = useIsInsideMobileNavigation();

  let { scrollY } = useScroll();
  let bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9]);
  let bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8]);

  const { user, isLoading } = useUserStore();

  return (
    <motion.div
      ref={ref}
      className={clsx(
        className,
        "fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:z-30 lg:px-8",
        !isInsideMobileNavigation &&
          "backdrop-blur-sm dark:backdrop-blur lg:left-72 xl:left-80",
        isInsideMobileNavigation
          ? "bg-white dark:bg-zinc-900"
          : "bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]"
      )}
      style={{
        "--bg-opacity-light": bgOpacityLight,
        "--bg-opacity-dark": bgOpacityDark,
      }}
    >
      <div
        className={clsx(
          "absolute inset-x-0 top-full h-px transition",
          (isInsideMobileNavigation || !mobileNavIsOpen) &&
            "bg-zinc-900/7.5 dark:bg-white/7.5"
        )}
      />
      <Search />
      <div className="flex items-center gap-1 lg:hidden">
        <MobileNavigation />
        <Link href="/" aria-label="Home">
          <Logo className="ml-2" id="logo" key="logo" />
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <nav className="hidden md:block">
          <ul role="list" className="flex items-center gap-8">
            <TopLevelNavItem href="https://wiki.solarius.me">
              API
            </TopLevelNavItem>
            <TopLevelNavItem href="https://status.solarius.me">
              Status
            </TopLevelNavItem>
            <TopLevelNavItem href="https://framework.solarius.me/support">
              Support
            </TopLevelNavItem>
          </ul>
        </nav>
        <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
        <div className="flex gap-4">
          <MobileSearch />
          <ModeToggle />
        </div>
        <div className="hidden min-[416px]:contents">
          {isLoading ? (
            <div className="h-7 w-12 animate-pulse rounded-full bg-zinc-100 dark:bg-zinc-800" />
          ) : user ? (
            <div className="flex items-center gap-3">
              <Image
                src={`https://media.solarius.me/${user.avatarUri}`}
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {user.username}
              </span>
            </div>
          ) : (
            <Link href="/login">
              <Button>Sign in</Button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
});
