'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          h1: ({ ...props }) => <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4" {...props} />,
          h2: ({ ...props }) => <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4" {...props} />,
          h3: ({ ...props }) => <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3" {...props} />,
          h4: ({ ...props }) => <h4 className="text-xl font-bold text-gray-900 mt-4 mb-2" {...props} />,
          p: ({ ...props }) => <p className="text-gray-700 mb-4 leading-relaxed" {...props} />,
          ul: ({ ...props }) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
          ol: ({ ...props }) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
          li: ({ ...props }) => <li className="text-gray-700" {...props} />,
          strong: ({ ...props }) => <strong className="font-bold text-gray-900" {...props} />,
          em: ({ ...props }) => <em className="italic" {...props} />,
          code: ({ inline, ...props }: any) =>
            inline ? (
              <code className="bg-gray-100 text-red-600 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
            ) : (
              <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono text-sm" {...props} />
            ),
          pre: ({ ...props }) => <pre className="mb-4" {...props} />,
          blockquote: ({ ...props }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4" {...props} />
          ),
          table: ({ ...props }) => (
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200" {...props} />
            </div>
          ),
          thead: ({ ...props }) => <thead className="bg-gray-50" {...props} />,
          tbody: ({ ...props }) => <tbody className="bg-white divide-y divide-gray-200" {...props} />,
          tr: ({ ...props }) => <tr {...props} />,
          th: ({ ...props }) => (
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props} />
          ),
          td: ({ ...props }) => <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900" {...props} />,
          a: ({ ...props }) => (
            <a className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer" {...props} />
          ),
          hr: ({ ...props }) => <hr className="my-8 border-gray-300" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
