export interface SubtitleCue {
  start: number;
  end: number;
  text: string;
}

export function generateVTT(cues: SubtitleCue[]): string {
  let vtt = 'WEBVTT\n\n';

  cues.forEach((cue, index) => {
    const startTime = formatTimestamp(cue.start);
    const endTime = formatTimestamp(cue.end);

    vtt += `${index + 1}\n`;
    vtt += `${startTime} --> ${endTime}\n`;
    vtt += `${cue.text}\n\n`;
  });

  return vtt;
}

function formatTimestamp(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  const ms = Math.floor((seconds % 1) * 1000);

  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}.${pad(ms, 3)}`;
}

function pad(num: number, size = 2): string {
  return num.toString().padStart(size, '0');
}

export function parseSRT(srtContent: string): SubtitleCue[] {
  const cues: SubtitleCue[] = [];
  const blocks = srtContent.trim().split('\n\n');

  for (const block of blocks) {
    const lines = block.split('\n');
    if (lines.length < 3) continue;

    const timeLine = lines[1];
    const timeMatch = timeLine.match(/(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})/);

    if (timeMatch) {
      const start = parseTimestamp(timeMatch[1]);
      const end = parseTimestamp(timeMatch[2]);
      const text = lines.slice(2).join('\n');

      cues.push({ start, end, text });
    }
  }

  return cues;
}

function parseTimestamp(timestamp: string): number {
  const [time, ms] = timestamp.split(',');
  const [hours, minutes, seconds] = time.split(':').map(Number);

  return hours * 3600 + minutes * 60 + seconds + Number(ms) / 1000;
}

export function convertSRTtoVTT(srtContent: string): string {
  const cues = parseSRT(srtContent);
  return generateVTT(cues);
}
