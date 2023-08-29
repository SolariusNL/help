import Image from "next/image";

import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import logoAnalytics from "@/images/products/analytics.svg";
import logoFlow from "@/images/products/flow.svg";
import logoFramework from "@/images/products/framework.svg";
import logoInfra from "@/images/products/infra.svg";
import logoPay from "@/images/products/pay.svg";
import logoVerse from "@/images/products/verse.svg";
import logoVortex from "@/images/products/vortex.svg";

const products = [
  {
    href: "#",
    name: "Framework",
    description:
      "A free and open source game platform for building your dream games.",
    logo: logoFramework,
  },
  {
    href: "#",
    name: "Infra",
    description:
      "A powerful and scalable backend for your games, apps, and websites.",
    logo: logoInfra,
  },
  {
    href: "#",
    name: "Verse",
    description:
      "Verse is a decentralised and encrypted social network for the future.",
    logo: logoVerse,
  },
  {
    href: "#",
    name: "Vortex",
    description:
      "Vortex is a powerful, open source 3D and 2D game engine for Framework.",
    logo: logoVortex,
  },
  {
    href: "#",
    name: "Pay",
    description: "Pay is a simple, secure, and fast no-code payment gateway.",
    logo: logoPay,
  },
  {
    href: "#",
    name: "Flow",
    description:
      "Flow is a comprehensive visual scripting system that transpiles to TypeScript.",
    logo: logoFlow,
  },
  {
    href: "#",
    name: "Analytics",
    description:
      "Analytics is a powerful privacy-focused analytics platform for your suite.",
    logo: logoAnalytics,
  },
];

export function Products() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="official-products">
        Our products
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        {products.map((library) => (
          <div key={library.name} className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {library.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {library.description}
              </p>
              <p className="mt-4">
                <Button href={library.href} variant="text" arrow="right">
                  Read more
                </Button>
              </p>
            </div>
            <Image
              src={library.logo}
              alt=""
              className="h-12 w-12"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
