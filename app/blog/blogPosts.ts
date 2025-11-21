// src/data/blogPosts.ts

export type BlogPost = {
  slug: string;
  title: string;
  date: string;        // ISO string or "YYYY-MM-DD"
  author: string;
  topics: string[];    // e.g. ["LLMs", "SES modeling"]
  summary: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "llms-overview",
    title: "Large Language Models: Potential, Limitations, and Best Practices",
    date: "2025-11-19",
    author: "Julius Fenn",
    topics: ["LLMs", "RAG"],
    summary:
  "An introduction to the strengths and weaknesses of Large Language Models in research, discussing where they add value, where they fail, and how to apply best practices—such as RAG, validation, and human oversight—to ensure scientifically robust results."
},
  {
    slug: "psychometrics-overview",
    title: "Analyzing Survey Data: A Practical Introduction to Psychometrics",
    date: "2025-11-20",
    author: "Julius Fenn",
    topics: ["Psychometrics", "Survey Design", "Measurement Models"],
    summary:
      "A concise overview of psychometric concepts—including reliability, validity, factor models, latent profile analysis and item response theory.",
  },

  // add more posts here
];
