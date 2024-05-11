import React from "react";
import fs from "fs";
import matter from "gray-matter";
import getPostMetaData from "@/utils/getPostMetadata";
import MarkdownRenderer from "@/utils/markdownRenderer"; // Adjust path as needed

function getPostContent(slug) {
  const folder = "physics/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetaData("physics");
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetaData({ params }) {
  const id = params?.slug ? ": " + params?.slug : "";
  return {
    title: `SMACS Lecture ${id.replaceAll("_", " ")}`,
  };
}

export default function PhysicsChapter(props) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <main>
      <article>
        <MarkdownRenderer content={post.content} />
      </article>
    </main>
  );
}
