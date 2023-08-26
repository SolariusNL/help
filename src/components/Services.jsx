import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";

const services = [
  {
    href: "/services/framework",
    name: "Framework",
    description:
      "Framework is our free and open source game platform alternative to Roblox.",
  },
  {
    href: "/services/infra",
    name: "Infra",
    description: "Infra is our cloud platform that powers your infrastructure.",
  },
  {
    href: "/services/udmux",
    name: "Udmux",
    description:
      "Udmux is our DDoS mitigation platform that protects your infrastructure.",
  },
];

export function Services() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="services">
        Our services
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-2 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {service.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {service.description}
            </p>
            <p className="mt-4">
              <Button href={service.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
