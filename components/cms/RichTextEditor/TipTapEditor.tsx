'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Youtube from '@tiptap/extension-youtube';
import { Button } from '@/components/ui/button';
import {
    Bold, Italic, List, ListOrdered, Quote, Undo, Redo,
    Link as LinkIcon, Image as ImageIcon, Youtube as YoutubeIcon,
    Heading1, Heading2, Code
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface TipTapEditorProps {
    content: string;
    onChange: (content: string) => void;
    placeholder?: string;
    editable?: boolean;
    className?: string;
}

export function TipTapEditor({
    content,
    onChange,
    placeholder,
    editable = true,
    className
}: TipTapEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
            Link.configure({
                openOnClick: false,
            }),
            Youtube.configure({
                controls: false,
            }),
        ],
        content,
        editable,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[200px] p-4',
            },
        },
    });

    if (!editor) {
        return null;
    }

    return (
        <div className={cn("flex flex-col border rounded-md overflow-hidden bg-white", className)}>
            {editable && (
                <div className="flex flex-wrap items-center gap-1 p-2 border-b bg-neutral-50">
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        isActive={editor.isActive('bold')}
                        icon={<Bold className="w-4 h-4" />}
                        title="Negrita"
                    />
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        isActive={editor.isActive('italic')}
                        icon={<Italic className="w-4 h-4" />}
                        title="Cursiva"
                    />
                    <div className="w-px h-6 bg-neutral-300 mx-1" />
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        isActive={editor.isActive('heading', { level: 2 })}
                        icon={<Heading1 className="w-4 h-4" />}
                        title="Título 1"
                    />
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                        isActive={editor.isActive('heading', { level: 3 })}
                        icon={<Heading2 className="w-4 h-4" />}
                        title="Título 2"
                    />
                    <div className="w-px h-6 bg-neutral-300 mx-1" />
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        isActive={editor.isActive('bulletList')}
                        icon={<List className="w-4 h-4" />}
                        title="Lista"
                    />
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        isActive={editor.isActive('orderedList')}
                        icon={<ListOrdered className="w-4 h-4" />}
                        title="Lista Numerada"
                    />
                    <div className="w-px h-6 bg-neutral-300 mx-1" />
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleBlockquote().run()}
                        isActive={editor.isActive('blockquote')}
                        icon={<Quote className="w-4 h-4" />}
                        title="Cita"
                    />
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                        isActive={editor.isActive('codeBlock')}
                        icon={<Code className="w-4 h-4" />}
                        title="Código"
                    />
                    <div className="w-px h-6 bg-neutral-300 mx-1" />
                    <ToolbarButton
                        onClick={() => {
                            const url = window.prompt('URL del enlace:');
                            if (url) {
                                editor.chain().focus().setLink({ href: url }).run();
                            }
                        }}
                        isActive={editor.isActive('link')}
                        icon={<LinkIcon className="w-4 h-4" />}
                        title="Enlace"
                    />
                    <ToolbarButton
                        onClick={() => {
                            const url = window.prompt('URL de la imagen:');
                            if (url) {
                                editor.chain().focus().setImage({ src: url }).run();
                            }
                        }}
                        isActive={false}
                        icon={<ImageIcon className="w-4 h-4" />}
                        title="Imagen"
                    />
                    <ToolbarButton
                        onClick={() => {
                            const url = window.prompt('URL del video de YouTube:');
                            if (url) {
                                editor.chain().focus().setYoutubeVideo({ src: url }).run();
                            }
                        }}
                        isActive={false}
                        icon={<YoutubeIcon className="w-4 h-4" />}
                        title="YouTube"
                    />
                    <div className="flex-grow" />
                    <ToolbarButton
                        onClick={() => editor.chain().focus().undo().run()}
                        isActive={false}
                        icon={<Undo className="w-4 h-4" />}
                        title="Deshacer"
                    />
                    <ToolbarButton
                        onClick={() => editor.chain().focus().redo().run()}
                        isActive={false}
                        icon={<Redo className="w-4 h-4" />}
                        title="Rehacer"
                    />
                </div>
            )}
            <EditorContent editor={editor} className="flex-grow" />
        </div>
    );
}

function ToolbarButton({ onClick, isActive, icon, title }: { onClick: () => void; isActive: boolean; icon: React.ReactNode; title: string }) {
    return (
        <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onClick}
            className={cn(
                "h-8 w-8 p-0",
                isActive ? "bg-neutral-200 text-neutral-900" : "text-neutral-500 hover:text-neutral-900"
            )}
            title={title}
        >
            {icon}
        </Button>
    );
}
