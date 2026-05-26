"use client";

import React, { useCallback } from "react";
import type {
  BlogContentBlock,
  BlogBlockHeading,
  BlogBlockParagraph,
  BlogBlockImage,
  BlogBlockQuote,
  BlogBlockList,
  BlogBlockCode,
  BlogBlockCallout,
  BlogBlockCarousel,
  BlogBlockImageContent,
  HeadingLevel,
  CalloutVariant,
} from "@/types/blog";

const BLOCK_OPTIONS: { value: BlogContentBlock["type"]; label: string }[] = [
  { value: "heading", label: "Heading" },
  { value: "paragraph", label: "Paragraph" },
  { value: "image", label: "Image" },
  { value: "carousel", label: "Carousel" },
  { value: "imageContent", label: "Image + Content" },
  { value: "quote", label: "Quote" },
  { value: "list", label: "List" },
  { value: "code", label: "Code" },
  { value: "divider", label: "Divider" },
  { value: "callout", label: "Callout" },
];

function createDefaultBlock(type: BlogContentBlock["type"]): BlogContentBlock {
  switch (type) {
    case "heading":
      return { type: "heading", level: 2, text: "" };
    case "paragraph":
      return { type: "paragraph", text: "" };
    case "image":
      return { type: "image", url: "", alt: "", caption: "" };
    case "quote":
      return { type: "quote", text: "", author: "" };
    case "list":
      return { type: "list", items: [""], ordered: false };
    case "code":
      return { type: "code", code: "", language: "" };
    case "divider":
      return { type: "divider" };
    case "callout":
      return { type: "callout", text: "", variant: "info" };
    case "carousel":
      return { type: "carousel", images: [{ url: "", alt: "", caption: "" }] };
    case "imageContent":
      return { type: "imageContent", imageUrl: "", heading: "", description: "", reverse: false };
    default:
      return { type: "paragraph", text: "" };
  }
}

interface BlockEditorProps {
  blocks: BlogContentBlock[];
  onChange: (blocks: BlogContentBlock[]) => void;
  onImageUpload?: (file: File) => Promise<string | null>;
}

export default function BlockEditor({
  blocks,
  onChange,
  onImageUpload,
}: BlockEditorProps) {
  const addBlock = useCallback(
    (type: BlogContentBlock["type"]) => {
      onChange([...blocks, createDefaultBlock(type)]);
    },
    [blocks, onChange]
  );

  const updateBlock = useCallback(
    (index: number, block: BlogContentBlock) => {
      const next = [...blocks];
      next[index] = block;
      onChange(next);
    },
    [blocks, onChange]
  );

  const removeBlock = useCallback(
    (index: number) => {
      onChange(blocks.filter((_, i) => i !== index));
    },
    [blocks, onChange]
  );

  const moveBlock = useCallback(
    (index: number, dir: "up" | "down") => {
      const next = [...blocks];
      const j = dir === "up" ? index - 1 : index + 1;
      if (j < 0 || j >= next.length) return;
      [next[index], next[j]] = [next[j], next[index]];
      onChange(next);
    },
    [blocks, onChange]
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-slate-600 self-center">Add block:</span>
        {BLOCK_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => addBlock(opt.value)}
            className="px-3.5 py-2 text-sm font-medium rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-[#1959FA]/5 hover:border-[#1959FA]/30 hover:text-[#1959FA] transition-colors"
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {blocks.length === 0 && (
          <div className="py-8 px-4 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50 text-center">
            <p className="text-sm text-slate-500">No blocks yet. Click a block type above to add content.</p>
          </div>
        )}
        {blocks.map((block, index) => (
          <BlockCard
            key={index}
            block={block}
            index={index}
            total={blocks.length}
            onUpdate={(b) => updateBlock(index, b)}
            onRemove={() => removeBlock(index)}
            onMoveUp={() => moveBlock(index, "up")}
            onMoveDown={() => moveBlock(index, "down")}
            onImageUpload={onImageUpload}
          />
        ))}
      </div>
    </div>
  );
}

function BlockCard({
  block,
  index,
  total,
  onUpdate,
  onRemove,
  onMoveUp,
  onMoveDown,
  onImageUpload,
}: {
  block: BlogContentBlock;
  index: number;
  total: number;
  onUpdate: (b: BlogContentBlock) => void;
  onRemove: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onImageUpload?: (file: File) => Promise<string | null>;
}) {
  const label =
    block.type === "heading"
      ? `Heading H${block.level}`
      : block.type.charAt(0).toUpperCase() + block.type.slice(1);

  return (
    <div className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-slate-100">
        <span className="text-xs font-medium text-slate-600">
          {index + 1}. {label}
        </span>
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            onClick={onMoveUp}
            disabled={index === 0}
            className="p-2 rounded-lg hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed text-slate-500 transition-colors"
            title="Move up"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
          </button>
          <button
            type="button"
            onClick={onMoveDown}
            disabled={index === total - 1}
            className="p-2 rounded-lg hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed text-slate-500 transition-colors"
            title="Move down"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          <button
            type="button"
            onClick={onRemove}
            className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
            title="Remove"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      </div>
      <div className="p-4">
        {block.type === "heading" && (
          <HeadingEditor block={block} onChange={onUpdate as (b: BlogBlockHeading) => void} />
        )}
        {block.type === "paragraph" && (
          <ParagraphEditor block={block} onChange={onUpdate as (b: BlogBlockParagraph) => void} />
        )}
        {block.type === "image" && (
          <ImageEditor
            block={block}
            onChange={onUpdate as (b: BlogBlockImage) => void}
            onImageUpload={onImageUpload}
          />
        )}
        {block.type === "quote" && (
          <QuoteEditor block={block} onChange={onUpdate as (b: BlogBlockQuote) => void} />
        )}
        {block.type === "list" && (
          <ListEditor block={block} onChange={onUpdate as (b: BlogBlockList) => void} />
        )}
        {block.type === "code" && (
          <CodeEditor block={block} onChange={onUpdate as (b: BlogBlockCode) => void} />
        )}
        {block.type === "divider" && (
          <p className="text-sm text-slate-500">Horizontal line (no options)</p>
        )}
        {block.type === "callout" && (
          <CalloutEditor block={block} onChange={onUpdate as (b: BlogBlockCallout) => void} />
        )}
        {block.type === "carousel" && (
          <CarouselEditor
            block={block}
            onChange={onUpdate as (b: BlogBlockCarousel) => void}
            onImageUpload={onImageUpload}
          />
        )}
        {block.type === "imageContent" && (
          <ImageContentEditor
            block={block}
            onChange={onUpdate as (b: BlogBlockImageContent) => void}
            onImageUpload={onImageUpload}
          />
        )}
      </div>
    </div>
  );
}

function CarouselEditor({
  block,
  onChange,
  onImageUpload,
}: {
  block: BlogBlockCarousel;
  onChange: (b: BlogBlockCarousel) => void;
  onImageUpload?: (file: File) => Promise<string | null>;
}) {
  const [uploading, setUploading] = React.useState<number | null>(null);

  const addImage = () => {
    onChange({ ...block, images: [...block.images, { url: "", alt: "", caption: "" }] });
  };

  const updateImage = (index: number, updates: Partial<{ url: string; alt?: string; caption?: string }>) => {
    const images = [...block.images];
    images[index] = { ...images[index], ...updates };
    onChange({ ...block, images });
  };

  const removeImage = (index: number) => {
    if (block.images.length <= 1) return;
    onChange({ ...block, images: block.images.filter((_, i) => i !== index) });
  };

  const handleFile = async (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !onImageUpload) return;
    setUploading(index);
    try {
      const url = await onImageUpload(file);
      if (url) updateImage(index, { url });
    } finally {
      setUploading(null);
    }
  };

  return (
    <div className="space-y-3">
      <p className="text-xs text-slate-500">Add multiple images for a carousel. Drag to reorder (move up/down).</p>
      {block.images.map((img, i) => (
        <div key={i} className="p-3 rounded-lg border border-slate-200 bg-slate-50/50 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-600">Image {i + 1}</span>
            <button
              type="button"
              onClick={() => removeImage(i)}
              disabled={block.images.length <= 1}
              className="text-red-500 hover:text-red-700 text-xs disabled:opacity-40"
            >
              Remove
            </button>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFile(i, e)}
            className="text-xs"
          />
          {uploading === i && <span className="text-xs text-slate-500">Uploading…</span>}
          <input
            type="url"
            value={img.url}
            onChange={(e) => updateImage(i, { url: e.target.value })}
            placeholder="Image URL"
            className={inputClass()}
          />
          <input
            type="text"
            value={img.alt ?? ""}
            onChange={(e) => updateImage(i, { alt: e.target.value })}
            placeholder="Alt text"
            className={inputClass()}
          />
          <input
            type="text"
            value={img.caption ?? ""}
            onChange={(e) => updateImage(i, { caption: e.target.value })}
            placeholder="Caption (optional)"
            className={inputClass()}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addImage}
        className="text-sm text-[#1959FA] hover:underline font-medium"
      >
        + Add image
      </button>
    </div>
  );
}

function ImageContentEditor({
  block,
  onChange,
  onImageUpload,
}: {
  block: BlogBlockImageContent;
  onChange: (b: BlogBlockImageContent) => void;
  onImageUpload?: (file: File) => Promise<string | null>;
}) {
  const [uploading, setUploading] = React.useState(false);
  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !onImageUpload) return;
    setUploading(true);
    try {
      const url = await onImageUpload(file);
      if (url) onChange({ ...block, imageUrl: url });
    } finally {
      setUploading(false);
    }
  };
  return (
    <div className="space-y-3">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={!!block.reverse}
          onChange={(e) => onChange({ ...block, reverse: e.target.checked })}
          className="rounded border-slate-300 text-[#1959FA]"
        />
        <span className="text-sm text-slate-600">Reverse layout (heading left, image right)</span>
      </label>
      <div>
        <label className="block text-xs text-slate-500 mb-1">Image</label>
        <input type="file" accept="image/*" onChange={handleFile} className="text-xs" />
        {uploading && <span className="text-xs text-slate-500 ml-2">Uploading…</span>}
      </div>
      <input
        type="url"
        value={block.imageUrl}
        onChange={(e) => onChange({ ...block, imageUrl: e.target.value })}
        placeholder="Image URL"
        className={inputClass()}
      />
      <input
        type="text"
        value={block.imageAlt ?? ""}
        onChange={(e) => onChange({ ...block, imageAlt: e.target.value })}
        placeholder="Image alt text"
        className={inputClass()}
      />
      <input
        type="text"
        value={block.heading}
        onChange={(e) => onChange({ ...block, heading: e.target.value })}
        placeholder="Heading"
        className={inputClass()}
      />
      <textarea
        value={block.description}
        onChange={(e) => onChange({ ...block, description: e.target.value })}
        placeholder="Description"
        rows={3}
        className={inputClass() + " resize-y"}
      />
    </div>
  );
}

function inputClass() {
  return "w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#1959FA] focus:border-[#1959FA] outline-none text-sm transition-shadow";
}

function HeadingEditor({
  block,
  onChange,
}: {
  block: BlogBlockHeading;
  onChange: (b: BlogBlockHeading) => void;
}) {
  return (
    <div className="space-y-2">
      <select
        value={block.level}
        onChange={(e) => onChange({ ...block, level: Number(e.target.value) as HeadingLevel })}
        className={inputClass() + " max-w-[120px]"}
      >
        <option value={1}>Heading 1</option>
        <option value={2}>Heading 2</option>
        <option value={3}>Heading 3</option>
      </select>
      <input
        type="text"
        value={block.text}
        onChange={(e) => onChange({ ...block, text: e.target.value })}
        placeholder="Heading text"
        className={inputClass()}
      />
    </div>
  );
}

function ParagraphEditor({
  block,
  onChange,
}: {
  block: BlogBlockParagraph;
  onChange: (b: BlogBlockParagraph) => void;
}) {
  return (
    <textarea
      value={block.text}
      onChange={(e) => onChange({ ...block, text: e.target.value })}
      placeholder="Paragraph text"
      rows={3}
      className={inputClass() + " resize-y"}
    />
  );
}

function ImageEditor({
  block,
  onChange,
  onImageUpload,
}: {
  block: BlogBlockImage;
  onChange: (b: BlogBlockImage) => void;
  onImageUpload?: (file: File) => Promise<string | null>;
}) {
  const [uploading, setUploading] = React.useState(false);
  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !onImageUpload) return;
    setUploading(true);
    try {
      const url = await onImageUpload(file);
      if (url) onChange({ ...block, url });
    } finally {
      setUploading(false);
    }
  };
  return (
    <div className="space-y-2">
      <div>
        <label className="block text-xs text-gray-500 mb-1">Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFile}
          className="text-sm text-gray-500 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:bg-blue-50 file:text-[#1959FA]"
        />
        {uploading && <span className="text-xs text-gray-500 ml-2">Uploading…</span>}
      </div>
      <input
        type="url"
        value={block.url}
        onChange={(e) => onChange({ ...block, url: e.target.value })}
        placeholder="Image URL"
        className={inputClass()}
      />
      <input
        type="text"
        value={block.alt ?? ""}
        onChange={(e) => onChange({ ...block, alt: e.target.value })}
        placeholder="Alt text"
        className={inputClass()}
      />
      <input
        type="text"
        value={block.caption ?? ""}
        onChange={(e) => onChange({ ...block, caption: e.target.value })}
        placeholder="Caption (optional)"
        className={inputClass()}
      />
    </div>
  );
}

function QuoteEditor({
  block,
  onChange,
}: {
  block: BlogBlockQuote;
  onChange: (b: BlogBlockQuote) => void;
}) {
  return (
    <div className="space-y-2">
      <textarea
        value={block.text}
        onChange={(e) => onChange({ ...block, text: e.target.value })}
        placeholder="Quote text"
        rows={2}
        className={inputClass() + " resize-y"}
      />
      <input
        type="text"
        value={block.author ?? ""}
        onChange={(e) => onChange({ ...block, author: e.target.value })}
        placeholder="Author (optional)"
        className={inputClass()}
      />
    </div>
  );
}

function ListEditor({
  block,
  onChange,
}: {
  block: BlogBlockList;
  onChange: (b: BlogBlockList) => void;
}) {
  const updateItem = (i: number, value: string) => {
    const items = [...block.items];
    items[i] = value;
    onChange({ ...block, items });
  };
  const addItem = () => onChange({ ...block, items: [...block.items, ""] });
  const removeItem = (i: number) =>
    onChange({ ...block, items: block.items.filter((_, j) => j !== i) });
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <label className="text-xs text-gray-500">Ordered list</label>
        <input
          type="checkbox"
          checked={block.ordered}
          onChange={(e) => onChange({ ...block, ordered: e.target.checked })}
          className="rounded border-gray-300 text-[#1959FA]"
        />
      </div>
      {block.items.map((item, i) => (
        <div key={i} className="flex gap-2">
          <input
            type="text"
            value={item}
            onChange={(e) => updateItem(i, e.target.value)}
            placeholder={`Item ${i + 1}`}
            className={inputClass()}
          />
          <button
            type="button"
            onClick={() => removeItem(i)}
            className="px-2 rounded hover:bg-red-50 text-red-600 shrink-0"
          >
            ✕
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addItem}
        className="text-sm text-[#1959FA] hover:underline"
      >
        + Add item
      </button>
    </div>
  );
}

function CodeEditor({
  block,
  onChange,
}: {
  block: BlogBlockCode;
  onChange: (b: BlogBlockCode) => void;
}) {
  return (
    <div className="space-y-2">
      <input
        type="text"
        value={block.language ?? ""}
        onChange={(e) => onChange({ ...block, language: e.target.value })}
        placeholder="Language (e.g. javascript, html)"
        className={inputClass()}
      />
      <textarea
        value={block.code}
        onChange={(e) => onChange({ ...block, code: e.target.value })}
        placeholder="Code"
        rows={6}
        className={inputClass() + " resize-y font-mono"}
        spellCheck={false}
      />
    </div>
  );
}

function CalloutEditor({
  block,
  onChange,
}: {
  block: BlogBlockCallout;
  onChange: (b: BlogBlockCallout) => void;
}) {
  return (
    <div className="space-y-2">
      <select
        value={block.variant}
        onChange={(e) =>
          onChange({ ...block, variant: e.target.value as CalloutVariant })
        }
        className={inputClass() + " max-w-[140px]"}
      >
        <option value="info">Info</option>
        <option value="warning">Warning</option>
        <option value="success">Success</option>
      </select>
      <textarea
        value={block.text}
        onChange={(e) => onChange({ ...block, text: e.target.value })}
        placeholder="Callout text"
        rows={2}
        className={inputClass() + " resize-y"}
      />
    </div>
  );
}
