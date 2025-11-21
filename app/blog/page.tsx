import { createClient } from "@/utils/supabase/server";

import HeaderLoggedIn from "@/components/HeaderLoggedIn";
import HeaderLoggedOut from "@/components/HeaderLoggedOut";

import SearchableBlog from "./SearchableBlog";
import { blogPosts } from "./blogPosts";




export default async function BlogPage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <main className="flex flex-col gap-5 max-w-6xl px-3 text-xl animate-in">
      {!error ? <HeaderLoggedIn /> : <HeaderLoggedOut />}

      <div className="text-3xl font-semibold text-center mt-4">
        Future Forests Blog
      </div>
      <p className="text-lg font-light text-center text-gray-700 mb-4">
        Tips, workflows, and best practices for modeling and research within the
        Future Forests Cluster of Excellence.
      </p>

      <SearchableBlog posts={blogPosts} />
    </main>
  );
}
