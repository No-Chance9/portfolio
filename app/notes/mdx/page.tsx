"use client";

import MdxContent from "./page.mdx";

export default function NotesMdxPage() {
  return (
    <div className="prose max-w-none prose-headings:scroll-mt-24">
      <MdxContent />
    </div>
  );
}