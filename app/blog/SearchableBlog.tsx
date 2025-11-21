"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { BlogPost } from  "@/app/blog/blogPosts";

type Props = {
  posts: BlogPost[];
};

export default function SearchableBlog({ posts }: Props) {
  const [search, setSearch] = useState("");
  const [topicFilter, setTopicFilter] = useState<string>("all");

  const allTopics = useMemo(() => {
    const topics = new Set<string>();
    posts.forEach((p) => p.topics.forEach((t) => topics.add(t)));
    return Array.from(topics).sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    const term = search.toLowerCase();

    return posts
      .filter((post) => {
        const matchesSearch =
          post.title.toLowerCase().includes(term) ||
          post.summary.toLowerCase().includes(term) ||
          post.author.toLowerCase().includes(term) ||
          post.topics.some((t) => t.toLowerCase().includes(term));

        const matchesTopic =
          topicFilter === "all" || post.topics.includes(topicFilter);

        return matchesSearch && matchesTopic;
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first
  }, [posts, search, topicFilter]);

  return (
    <section className="mt-6 space-y-4">
      {/* Controls */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Search by title, topic, author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-2/3 rounded-md border px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-gray-500"
        />

        <select
          value={topicFilter}
          onChange={(e) => setTopicFilter(e.target.value)}
          className="w-full md:w-1/3 rounded-md border px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <option value="all">All topics</option>
          {allTopics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      {/* Results */}
      <div className="mt-4 space-y-4">
        {filteredPosts.length === 0 && (
          <p className="text-base text-gray-600">
            No posts found for the current search and filters.
          </p>
        )}

        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <h2 className="text-xl font-semibold">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:underline hover:text-gray-800"
                >
                  {post.title}
                </Link>
              </h2>
              <div className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString("de-DE")} · {post.author}
              </div>
            </div>

            <p className="mt-2 text-base text-gray-700">{post.summary}</p>

            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              {post.topics.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-gray-100 px-3 py-1 text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
