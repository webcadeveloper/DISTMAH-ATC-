'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Youtube from '@tiptap/extension-youtube';
import { Table } from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { common, createLowlight } from 'lowlight';
import { useCallback, useEffect, useState } from 'react';
import {
    Bold,
    Italic,
    Underline as UnderlineIcon,
    Strikethrough,
    Code,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    List,
    ListOrdered,
    Quote,
    Minus,
    Image as ImageIcon,
    Link as LinkIcon,
    Youtube as YoutubeIcon,
    Table as TableIcon,
    AlignLeft,
    AlignCenter,
    AlignRight,
    Highlighter,
    Undo,
    Redo,
    Trash2,
    RowsIcon,
    ColumnsIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import TurndownService from 'turndown';

const lowlight = createLowlight(common);

interface TiptapEditorProps {
    content: string;
    onChange: (markdown: string) => void;
    onImageUpload?: (file: File) => Promise<string>;
    placeholder?: string;
}

const turndownService = new TurndownService({
    headingStyle: 'atx',
    hr: '---',
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
});

turndownService.addRule('tableCell', {
    filter: ['th', 'td'],
    replacement: function (content) {
        return ' ' + content.trim() + ' |';
    }
});

turndownService.addRule('tableRow', {
    filter: 'tr',
    replacement: function (content) {
        return '|' + content + '\n';
    }
});

turndownService.addRule('table', {
    filter: 'table',
    replacement: function (content) {
        const rows = content.trim().split('\n').filter(row => row.length > 0);
        if (rows.length === 0) return '';

        const headerRow = rows[0];
        const colCount = (headerRow.match(/\|/g) || []).length - 1;
        const separator = '|' + ' --- |'.repeat(colCount);

        return '\n' + rows[0] + separator + '\n' + rows.slice(1).join('\n') + '\n';
    }
});

export function TiptapEditor({ content, onChange, onImageUpload, placeholder = 'Escribe el contenido de la leccion...' }: TiptapEditorProps) {
    const [showImageModal, setShowImageModal] = useState(false);
    const [showLinkModal, setShowLinkModal] = useState(false);
    const [showYoutubeModal, setShowYoutubeModal] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [linkUrl, setLinkUrl] = useState('');
    const [youtubeUrl, setYoutubeUrl] = useState('');

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                codeBlock: false,
            }),
            Image.configure({
                HTMLAttributes: {
                    class: 'rounded-lg max-w-full',
                },
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-twilight underline',
                },
            }),
            Youtube.configure({
                width: 640,
                height: 360,
                HTMLAttributes: {
                    class: 'rounded-lg',
                },
            }),
            Table.configure({
                resizable: true,
                HTMLAttributes: {
                    class: 'border-collapse w-full',
                },
            }),
            TableRow,
            TableCell,
            TableHeader,
            Placeholder.configure({
                placeholder,
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Underline,
            Highlight.configure({
                multicolor: false,
                HTMLAttributes: {
                    class: 'bg-dawn/30 px-1 rounded',
                },
            }),
            CodeBlockLowlight.configure({
                lowlight,
            }),
        ],
        content: '',
        editorProps: {
            attributes: {
                class: 'lesson-content prose prose-neutral max-w-none min-h-[400px] p-6 focus:outline-none',
            },
            handlePaste: (view, event) => {
                const items = event.clipboardData?.items;
                if (!items) return false;

                for (const item of Array.from(items)) {
                    if (item.type.startsWith('image/') && onImageUpload) {
                        event.preventDefault();
                        const file = item.getAsFile();
                        if (file) {
                            onImageUpload(file).then(url => {
                                if (url) {
                                    editor?.chain().focus().setImage({ src: url }).run();
                                }
                            });
                        }
                        return true;
                    }
                }
                return false;
            },
        },
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            const markdown = turndownService.turndown(html);
            onChange(markdown);
        },
    });

    useEffect(() => {
        if (editor && content) {
            const currentHtml = editor.getHTML();
            const currentMarkdown = turndownService.turndown(currentHtml);
            if (currentMarkdown !== content) {
                editor.commands.setContent(markdownToHtml(content));
            }
        }
    }, [content, editor]);

    const markdownToHtml = (md: string): string => {
        const html = md
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/~~(.*?)~~/g, '<s>$1</s>')
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            .replace(/^\> (.*$)/gim, '<blockquote><p>$1</p></blockquote>')
            .replace(/^---$/gim, '<hr>')
            .replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">')
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
            .replace(/^\- (.*$)/gim, '<li>$1</li>')
            .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
            .replace(/\n\n/g, '</p><p>')
            .replace(/^(?!<[hupoblia])/gim, '<p>')
            .replace(/(?<![>])$/gim, '</p>');
        return html;
    };

    const insertImage = useCallback(() => {
        if (imageUrl && editor) {
            editor.chain().focus().setImage({ src: imageUrl }).run();
            setImageUrl('');
            setShowImageModal(false);
        }
    }, [editor, imageUrl]);

    const insertLink = useCallback(() => {
        if (linkUrl && editor) {
            editor.chain().focus().extendMarkRange('link').setLink({ href: linkUrl }).run();
            setLinkUrl('');
            setShowLinkModal(false);
        }
    }, [editor, linkUrl]);

    const insertYoutube = useCallback(() => {
        if (youtubeUrl && editor) {
            editor.chain().focus().setYoutubeVideo({ src: youtubeUrl }).run();
            setYoutubeUrl('');
            setShowYoutubeModal(false);
        }
    }, [editor, youtubeUrl]);

    const insertTable = useCallback(() => {
        editor?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
    }, [editor]);

    if (!editor) {
        return <div className="p-4 text-neutral-500">Cargando editor...</div>;
    }

    return (
        <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
            {/* Toolbar */}
            <div className="border-b border-neutral-200 bg-neutral-50 p-2 flex flex-wrap gap-1">
                {/* History */}
                <div className="flex items-center gap-1 pr-2 border-r border-neutral-300">
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => editor.chain().focus().undo().run()}
                        disabled={!editor.can().undo()}
                        title="Deshacer"
                    >
                        <Undo className="w-4 h-4" />
                    </Button>
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => editor.chain().focus().redo().run()}
                        disabled={!editor.can().redo()}
                        title="Rehacer"
                    >
                        <Redo className="w-4 h-4" />
                    </Button>
                </div>

                {/* Headings */}
                <div className="flex items-center gap-1 pr-2 border-r border-neutral-300">
                    <Button
                        type="button"
                        variant={editor.isActive('heading', { level: 1 }) ? 'default' : 'ghost'}
                        size="icon-sm"
                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        title="Titulo 1"
                    >
                        <Heading1 className="w-4 h-4" />
                    </Button>
                    <Button
                        type="button"
                        variant={editor.isActive('heading', { level: 2 }) ? 'default' : 'ghost'}
                        size="icon-sm"
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        title="Titulo 2"
                    >
                        <Heading2 className="w-4 h-4" />
                    </Button>
                    <Button
                        type="button"
                        variant={editor.isActive('heading', { level: 3 }) ? 'default' : 'ghost'}
                        size="icon-sm"
                        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                        title="Titulo 3"
                    >
                        <Heading3 className="w-4 h-4" />
                    </Button>
                    <Button
                        type="button"
                        variant={editor.isActive('heading', { level: 4 }) ? 'default' : 'ghost'}
                        size="icon-sm"
                        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                        title="Titulo 4"
                    >
                        <Heading4 className="w-4 h-4" />
                    </Button>
                </div>

                {/* Text Formatting */}
                <div className="flex items-center gap-1 pr-2 border-r border-neutral-300">
                    <Button
                        type="button"
                        variant={editor.isActive('bold') ? 'default' : 'ghost'}
                        size="icon-sm"
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        title="Negrita (Ctrl+B)"
                    >
                        <Bold className="w-4 h-4" />
                    </Button>
                    <Button
                        type="button"
                        variant={editor.isActive('italic') ? 'default' : 'ghost'}
                        size="icon-sm"
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        title="Cursiva (Ctrl+I)"
                    >
                        <Italic className="w-4 h-4" />
                    </Button>
                    <Button
                        type="button"
                        variant={editor.isActive('underline') ? 'default' : 'ghost'}
                        size="icon-sm"
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        title="Subrayado (Ctrl+U)"
                    >
                        <UnderlineIcon className="w-4 h-4" />
                    </Button>
                    <Button
                        type="button"
                        variant={editor.isActive('strike') ? 'default' : 'ghost'}
                        size="icon-sm"
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        title="Tachado"
                    >
                        <Strikethrough className="w-4 h-4" />
                    </Button>
                    <Button
                        type="button"
                        variant={editor.isActive('highlight') ? 'default' : 'ghost'}
                        size="icon-sm"
                        onClick={() => editor.chain().focus().toggleHighlight().run()}
                        title="Resaltar"
                    >
                        <Highlighter className="w-4 h-4" />
                    </Button>
                    <Button
                        type="button"
                        variant={editor.isActive('code') ? 'default' : 'ghost'}
                        size="icon-sm"
                        onClick={() => editor.chain().focus().toggleCode().run()}
                        title="Codigo"
                    >
                        <Code className="w-4 h-4" />
                    </Button>
                </div>

                {/* Alignment */}
                <div className="flex items-center gap-1 pr-2 border-r border-neutral-300">
                    <Button
                        type="button"
                        variant={editor.isActive({ textAlign: 'left' }) ? 'default' : 'ghost'}
                        size="icon-sm"
                        onClick={() => editor.chain().focus().setTextAlign('left').run()}
                        title="Alinear izquierda"
                    >
                        <AlignLeft className="w-4 h-4" />
                    </Button>
                    <Button
                        type="button"
                        variant={editor.isActive({ textAlign: 'center' }) ? 'default' : 'ghost'}
                        size="icon-sm"
                        onClick={() => editor.chain().focus().setTextAlign('center').run()}
                        title="Centrar"
                    >
                        <AlignCenter className="w-4 h-4" />
                    </Button>
                    <Button
                        type="button"
                        variant={editor.isActive({ textAlign: 'right' }) ? 'default' : 'ghost'}
                        size="icon-sm"
                        onClick={() => editor.chain().focus().setTextAlign('right').run()}
                        title="Alinear derecha"
                    >
                        <AlignRight className="w-4 h-4" />
                    </Button>
                </div>

                {/* Lists */}
                <div className="flex items-center gap-1 pr-2 border-r border-neutral-300">
                    <Button
                        type="button"
                        variant={editor.isActive('bulletList') ? 'default' : 'ghost'}
                        size="icon-sm"
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        title="Lista con puntos"
                    >
                        <List className="w-4 h-4" />
                    </Button>
                    <Button
                        type="button"
                        variant={editor.isActive('orderedList') ? 'default' : 'ghost'}
                        size="icon-sm"
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        title="Lista numerada"
                    >
                        <ListOrdered className="w-4 h-4" />
                    </Button>
                </div>

                {/* Blocks */}
                <div className="flex items-center gap-1 pr-2 border-r border-neutral-300">
                    <Button
                        type="button"
                        variant={editor.isActive('blockquote') ? 'default' : 'ghost'}
                        size="icon-sm"
                        onClick={() => editor.chain().focus().toggleBlockquote().run()}
                        title="Cita"
                    >
                        <Quote className="w-4 h-4" />
                    </Button>
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => editor.chain().focus().setHorizontalRule().run()}
                        title="Linea horizontal"
                    >
                        <Minus className="w-4 h-4" />
                    </Button>
                    <Button
                        type="button"
                        variant={editor.isActive('codeBlock') ? 'default' : 'ghost'}
                        size="icon-sm"
                        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                        title="Bloque de codigo"
                    >
                        <Code className="w-4 h-4" />
                    </Button>
                </div>

                {/* Media */}
                <div className="flex items-center gap-1 pr-2 border-r border-neutral-300">
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => setShowImageModal(true)}
                        title="Insertar imagen"
                    >
                        <ImageIcon className="w-4 h-4" />
                    </Button>
                    <Button
                        type="button"
                        variant={editor.isActive('link') ? 'default' : 'ghost'}
                        size="icon-sm"
                        onClick={() => setShowLinkModal(true)}
                        title="Insertar enlace"
                    >
                        <LinkIcon className="w-4 h-4" />
                    </Button>
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => setShowYoutubeModal(true)}
                        title="Insertar video YouTube"
                    >
                        <YoutubeIcon className="w-4 h-4" />
                    </Button>
                </div>

                {/* Table */}
                <div className="flex items-center gap-1">
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        onClick={insertTable}
                        title="Insertar tabla"
                    >
                        <TableIcon className="w-4 h-4" />
                    </Button>
                    {editor.isActive('table') && (
                        <>
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon-sm"
                                onClick={() => editor.chain().focus().addColumnAfter().run()}
                                title="Agregar columna"
                            >
                                <ColumnsIcon className="w-4 h-4" />
                            </Button>
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon-sm"
                                onClick={() => editor.chain().focus().addRowAfter().run()}
                                title="Agregar fila"
                            >
                                <RowsIcon className="w-4 h-4" />
                            </Button>
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon-sm"
                                onClick={() => editor.chain().focus().deleteTable().run()}
                                title="Eliminar tabla"
                            >
                                <Trash2 className="w-4 h-4 text-dusk" />
                            </Button>
                        </>
                    )}
                </div>
            </div>

            {/* Editor Content */}
            <EditorContent editor={editor} />


            {/* Image Modal */}
            {showImageModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                        <h3 className="text-lg font-semibold mb-4">Insertar Imagen</h3>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="imageUrl">URL de la imagen</Label>
                                <Input
                                    id="imageUrl"
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}
                                    placeholder="https://..."
                                    onKeyDown={(e) => e.key === 'Enter' && insertImage()}
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                <Button type="button" variant="outline" onClick={() => setShowImageModal(false)}>
                                    Cancelar
                                </Button>
                                <Button type="button" onClick={insertImage}>
                                    Insertar
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Link Modal */}
            {showLinkModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                        <h3 className="text-lg font-semibold mb-4">Insertar Enlace</h3>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="linkUrl">URL del enlace</Label>
                                <Input
                                    id="linkUrl"
                                    value={linkUrl}
                                    onChange={(e) => setLinkUrl(e.target.value)}
                                    placeholder="https://..."
                                    onKeyDown={(e) => e.key === 'Enter' && insertLink()}
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                <Button type="button" variant="outline" onClick={() => setShowLinkModal(false)}>
                                    Cancelar
                                </Button>
                                <Button type="button" onClick={insertLink}>
                                    Insertar
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* YouTube Modal */}
            {showYoutubeModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                        <h3 className="text-lg font-semibold mb-4">Insertar Video YouTube</h3>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="youtubeUrl">URL del video</Label>
                                <Input
                                    id="youtubeUrl"
                                    value={youtubeUrl}
                                    onChange={(e) => setYoutubeUrl(e.target.value)}
                                    placeholder="https://www.youtube.com/watch?v=..."
                                    onKeyDown={(e) => e.key === 'Enter' && insertYoutube()}
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                <Button type="button" variant="outline" onClick={() => setShowYoutubeModal(false)}>
                                    Cancelar
                                </Button>
                                <Button type="button" onClick={insertYoutube}>
                                    Insertar
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
