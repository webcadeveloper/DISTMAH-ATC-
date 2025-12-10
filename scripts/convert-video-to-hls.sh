#!/bin/bash
# Script para convertir videos MP4 a HLS (HTTP Live Streaming)
# Requiere ffmpeg instalado

if [ "$#" -ne 2 ]; then
    echo "Uso: ./convert-video-to-hls.sh INPUT_VIDEO OUTPUT_DIR"
    echo "Ejemplo: ./convert-video-to-hls.sh input.mp4 /public/videos/hls/leccion-1/"
    exit 1
fi

INPUT=$1
OUTPUT_DIR=$2

if [ ! -f "$INPUT" ]; then
    echo "Error: El archivo de entrada no existe: $INPUT"
    exit 1
fi

mkdir -p "$OUTPUT_DIR"

echo "Convirtiendo $INPUT a HLS..."
echo "Directorio de salida: $OUTPUT_DIR"

ffmpeg -i "$INPUT" \
  -profile:v baseline \
  -level 3.0 \
  -start_number 0 \
  -hls_time 10 \
  -hls_list_size 0 \
  -hls_segment_filename "$OUTPUT_DIR/segment_%03d.ts" \
  -f hls \
  "$OUTPUT_DIR/playlist.m3u8"

if [ $? -eq 0 ]; then
    echo "Conversión exitosa!"
    echo "Playlist HLS: $OUTPUT_DIR/playlist.m3u8"
    echo ""
    echo "Puedes usar esta URL en tu aplicación:"
    echo "/videos/hls/leccion-1/playlist.m3u8"
else
    echo "Error durante la conversión"
    exit 1
fi
