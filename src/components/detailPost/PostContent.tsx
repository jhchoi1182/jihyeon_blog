"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {oneDark} from 'react-syntax-highlighter/dist/esm/styles/prism'

type PostContentProps = {
  content: string;
};

export default function PostContent({ content }: PostContentProps) {
  return (
    <ReactMarkdown
      className="prose max-w-none dark:text-slate-100"
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const {children, ...rest} = props
          return (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              language={"python"}
              style={oneDark}
            >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
          )
        },
        img: (image) => (
          <img
            className="object-contain object-left-top"
            src={image.src || ""}
            alt={image.alt || ""}
          />
        ),
        h2: ({ children }) => (
          <h2 className="dark:text-slate-100">{children}</h2>
        ),
        a: ({ children }) => <a className="text-river">{children}</a>,
        strong: ({ children }) => (
          <strong className="font-bold dark:text-slate-100">{children}</strong>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
