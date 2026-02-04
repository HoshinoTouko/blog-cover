import { notFound } from "next/navigation";
import { FaCalendar, FaTag, FaUser } from "react-icons/fa";
import { siteConfig } from "@/config";
import { getPostData } from "@/lib/posts";

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const post = await getPostData(slug);

    if (!post) {
        return notFound();
    }

    return (
        <article className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Featured Image */}
            {post.image && (
                <div className="relative h-[350px] md:h-[500px] w-full group overflow-hidden">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white w-full">
                        <div className="flex flex-wrap items-center gap-6 text-sm mb-4 opacity-90 font-medium">
                            <span className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg">
                                <FaCalendar className="text-primary" /> {post.date}
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg">
                                <FaUser className="text-secondary" /> {siteConfig.author.name}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-md">
                            {post.title}
                        </h1>
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="p-8 md:p-16 prose prose-lg md:prose-xl dark:prose-invert max-w-none 
        prose-headings:font-bold prose-headings:tracking-tight
        prose-a:text-primary hover:prose-a:text-red-600 prose-a:transition-colors
        prose-img:rounded-2xl prose-img:shadow-lg
        prose-pre:bg-gray-900 prose-pre:border prose-pre:border-white/10">
                <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            </div>

            {/* Tags Footer */}
            <div className="px-8 md:px-16 pb-16">
                <div className="flex flex-wrap gap-3">
                    {post.tags.map((tag: string) => (
                        <span key={tag} className="px-4 py-1.5 bg-gray-50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 rounded-xl text-sm font-semibold border border-gray-100 dark:border-gray-600 transition-all hover:border-primary hover:text-primary">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}
