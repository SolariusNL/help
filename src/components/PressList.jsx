import { PressPostCard } from "./PressPostCard";

export const PressList = ({ posts }) => {
  return (
    <div className="flex flex-col gap-2">
      {posts.map((post) => (
        <PressPostCard key={post.slug} post={post} />
      ))}
    </div>
  );
};
