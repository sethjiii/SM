import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import MagicCard from "../ui/magic-card";
import MaxWidthWrapper from "../global/max-width-wrapper";
import blogsData from "@/utils/constants/blogs.json";

// Define types for your blogs.json structure
interface BlogSection {
  heading?: string;
  content: string[];
}

interface Blog {
  slug: string;
  title: string;
  image?: string;
  intro?: string[];
  sections?: BlogSection[];
}

const blogs: Blog[] = blogsData as Blog[];
const Blogs = () => {
  return (
    <section className="bg-gradient-to-b from-background via-muted/20 to-background py-16">
      <MaxWidthWrapper>
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Our Latest <span className="text-primary">Blogs</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Stay updated with fresh insights, resources, and tips from our team.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, id) => {
            // Safe preview text extraction
            const previewText =
              Array.isArray(blog.intro) && blog.intro.length > 0
                ? blog.intro.join(" ")
                : Array.isArray(blog.sections?.[0]?.content)
                ? blog.sections[0].content.join(" ")
                : "";

            return (
              <MagicCard
                key={id}
                className="p-0 md:p-0 relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <Link
                  href={`/resources/blog/${blog.slug}`}
                  className="absolute inset-0 z-10"
                />
                <Card className="group border-0 bg-card hover:bg-card/95 transition-all duration-300">
                  <div className="overflow-hidden h-48">
                    <Image
                      src={blog.image || "/default-image.jpg"}
                      alt={blog.title || "Blog Image"}
                      width={1024}
                      height={1024}
                      unoptimized
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <CardContent className="p-5 flex flex-col">
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {blog.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-muted-foreground leading-relaxed">
                      {previewText.length > 100
                        ? `${previewText.substring(0, 100)}...`
                        : previewText}
                    </CardDescription>
                    <span className="mt-4 inline-block text-primary font-medium group-hover:underline">
                      Read More →
                    </span>
                  </CardContent>
                </Card>
              </MagicCard>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Blogs;
