import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

import HeaderLoggedIn from "@/components/HeaderLoggedIn";
import HeaderLoggedOut from "@/components/HeaderLoggedOut";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  /*
  const { data: post, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (!post || error) {
    return notFound(); // Next.js 404 page
  }

    return (
    <main className="max-w-[800px] mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <div className="text-gray-600 text-sm mb-8">
        {new Date(post.date).toLocaleDateString()} • {post.author}
      </div>

      <article className="prose prose-lg">

        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </main>
  );
}
    */

  return (
    <main className="flex flex-col gap-5 max-w-6xl px-3 text-xl animate-in">
      {!error ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
 In real time data will be retrieved from local SQL server to populate this page (currently not implemented): 
 
 <span className="font-bold italic"> {params.slug} </span>
    </main>
  );
}