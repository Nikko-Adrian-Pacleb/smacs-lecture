// components/MarkdownRenderer.js
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css";

const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex, rehypeRaw]} // Enable raw HTML processing
      components={{
        iframe: ({ node, ...props }) => (
          <iframe {...props} style={{ maxWidth: "100%" }} />
        ),
      }}
    />
  );
};

export default MarkdownRenderer;
