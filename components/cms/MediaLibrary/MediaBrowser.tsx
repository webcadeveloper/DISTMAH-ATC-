'use client';

import { useState } from 'react';
import { Search, Grid, List as ListIcon, Filter, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileUploader } from './FileUploader';

export function MediaLibrary() {
    return (
        <div className="flex flex-col h-[600px]">
            <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Biblioteca Multimedia</h2>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm"><Filter className="w-4 h-4 mr-2" /> Filtrar</Button>
                    <Button size="sm"><Folder className="w-4 h-4 mr-2" /> Nueva Carpeta</Button>
                </div>
            </div>

            <div className="flex flex-grow overflow-hidden">
                {/* Sidebar Folders */}
                <div className="w-64 border-r bg-neutral-50 p-4 hidden md:block overflow-y-auto">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">Carpetas</h3>
                    <ul className="space-y-1 text-sm">
                        <li className="bg-primary-50 text-primary-700 font-medium px-3 py-2 rounded-md cursor-pointer">Todos los archivos</li>
                        <li className="hover:bg-neutral-100 px-3 py-2 rounded-md cursor-pointer text-neutral-600">Imágenes</li>
                        <li className="hover:bg-neutral-100 px-3 py-2 rounded-md cursor-pointer text-neutral-600">Videos</li>
                        <li className="hover:bg-neutral-100 px-3 py-2 rounded-md cursor-pointer text-neutral-600">Documentos</li>
                        <li className="hover:bg-neutral-100 px-3 py-2 rounded-md cursor-pointer text-neutral-600">Archivos CAD</li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex-grow flex flex-col">
                    <div className="p-4 border-b flex gap-4">
                        <div className="relative flex-grow">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                            <Input placeholder="Buscar archivos..." className="pl-10" />
                        </div>
                        <div className="flex border rounded-md overflow-hidden">
                            <Button variant="ghost" size="icon" className="rounded-none bg-neutral-100"><Grid className="w-4 h-4" /></Button>
                            <Button variant="ghost" size="icon" className="rounded-none"><ListIcon className="w-4 h-4" /></Button>
                        </div>
                    </div>

                    <div className="flex-grow p-4 overflow-y-auto">
                        <Tabs defaultValue="library">
                            <TabsList className="mb-4">
                                <TabsTrigger value="library">Biblioteca</TabsTrigger>
                                <TabsTrigger value="upload">Subir Archivos</TabsTrigger>
                            </TabsList>

                            <TabsContent value="library" className="h-full">
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    {/* Mock items */}
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                        <div key={i} className="border rounded-lg p-2 hover:shadow-md transition-shadow cursor-pointer group relative">
                                            <div className="aspect-square bg-neutral-100 rounded-md mb-2 flex items-center justify-center overflow-hidden">
                                                <div className="text-neutral-400 font-medium">IMG_{i}.jpg</div>
                                            </div>
                                            <p className="text-xs font-medium truncate">imagen_curso_{i}.jpg</p>
                                            <p className="text-[10px] text-neutral-500">2.4 MB</p>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="upload">
                                <div className="max-w-xl mx-auto mt-8">
                                    <FileUploader onFilesUploaded={(files) => console.log(files)} />
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
}
