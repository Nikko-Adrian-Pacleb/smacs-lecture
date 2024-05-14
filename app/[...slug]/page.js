import React from "react";
import fs from "fs";
import matter from "gray-matter";
import getPostMetaData from "@/utils/getPostMetadata";
import MarkdownRenderer from "@/utils/markdownRenderer"; // Adjust path as needed

function getPostContent(slug) {
  const folder = `notes/${slug[0]}/`;
  const file = folder + `${slug[1]}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export default function PhysicsChapter(props) {
  const slug = props.params.slug;
  let found = true;
  let post;
  if (slug.length === 1) {
    try {
      post = getPostMetaData(`notes/${slug[0]}`);
    } catch {
      found = false;
    }
  } else {
    try {
      post = getPostContent(slug);
    } catch {
      found = false;
    }
  }
  return (
    <main className="flex w-full justify-center px-52">
      {found ? (
        <div>
          {slug.length === 1 ? (
            <div>
              {post.map((chapter, chapterIndex) => {
                return (
                  <div key={chapterIndex}>
                    <a
                      href={`/${slug}/${chapter.slug}`}
                    >{`${chapter.title}`}</a>
                  </div>
                );
              })}
            </div>
          ) : (
            <article
              className="
              [&_h1]:h1-note
              [&_h2]:h2-note
              [&_h3]:h3-note
              [&_h4]:h4-note
              [&_h5]:h5-note
              [&_h6]:h6-note
              [&_p]:p-note
              [&_a]:a-note
              [&_ul]:ul-note
              [&_ol]:ol-note
              [&_blockquote]:blockquote-note
              [&_code]:code-note
              [&_pre]:pre-note
              [&_img]:img-note
              [&_table]:table-note
              [&_th]:th-note
              [&_td]:td-note
              
            "
            >
              <MarkdownRenderer content={post.content} />
            </article>
          )}
        </div>
      ) : (
        <div>Page Not Found</div>
      )}
    </main>
  );
}
