import React from "react";
import blogs from "@/utils/constants/blogs.json";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

const BlogPage = ({ params }: Props) => {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-foreground">Blog not found</h1>
        <p className="text-muted-foreground mt-3">
          The blog you’re looking for doesn’t exist.
        </p>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12">
      {/* Hero Image */}
      {blog.image && (
        <div className="overflow-hidden rounded-xl shadow-sm">
          <Image
            src={blog.image}
            alt={blog.title}
            width={1200}
            height={600}
            unoptimized
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      )}

      {/* Blog Header */}
      <header className="mt-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
          {blog.title}
        </h1>
        <div className="mt-4 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          {blog.author_image && (
            <Image
              src={blog.author_image}
              alt={blog.author_name || "Author"}
              width={40}
              height={40}
              className="rounded-full"
              unoptimized
            />
          )}
          <span className="font-medium text-foreground">{blog.author_name}</span>
          <span>•</span>
          <span>{blog.date_published || "Unknown date"}</span>
        </div>
      </header>

      {/* Intro */}
      {blog.intro?.length > 0 && (
        <section className="prose prose-neutral dark:prose-invert max-w-none mt-10 leading-relaxed">
          {blog.intro.map((paragraph: string, idx: number) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </section>
      )}

      {/* Sections */}
      {blog.sections?.map((section: any, idx: number) => (
        <section
          key={idx}
          className="prose prose-neutral dark:prose-invert max-w-none mt-10 leading-relaxed"
        >
          {section.heading && <h2>{section.heading}</h2>}
          {section.content?.map((para: string, i: number) => (
            <p key={i}>{para}</p>
          ))}
          {section.points?.length > 0 && (
            <ul>
              {section.points.map((point: any, pIdx: number) => (
                <li key={pIdx}>
                  <strong>{point.title}:</strong> {point.description}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {/* Final Thought */}
      {blog.final_thought && (
        <section className="mt-12 p-6 bg-muted rounded-xl">
          <p className="text-lg font-medium text-foreground text-center">
            {blog.final_thought}
          </p>
        </section>
      )}
    </article>
  );
};

export default BlogPage;
