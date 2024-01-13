import Link from "next/link";
import { Tag } from "./Tag";

export const PressPostCard = ({ post }) => {
  const { title, subtitle, date, slug } = post;

  return (
    <article className="flex h-full w-full flex-col items-start justify-between">
      <header className="mb-8 flex w-full flex-col items-start justify-between">
        <div className="mb-6">
          <h3 className="text-2xl">
            <Link href={`/press/${slug}`}>{title}</Link>
          </h3>
          <h4 className="text-base leading-4 tracking-tight text-gray-600 dark:text-gray-400">
            {subtitle}
          </h4>
        </div>
        <Tag color="zinc">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Tag>
      </header>
    </article>
  );
};
