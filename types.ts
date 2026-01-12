
export enum PaperSize {
  A4 = 'A4',
  LETTER = 'LETTER',
  A3 = 'A3'
}

export enum Orientation {
  PORTRAIT = 'PORTRAIT',
  LANDSCAPE = 'LANDSCAPE'
}

export interface PosterConfig {
  pagesWide: number;
  orientation: Orientation;
  paperSize: PaperSize;
  margin: number; // in mm
  showCropMarks: boolean;
}

export interface ImageMetadata {
  src: string;
  width: number;
  height: number;
}
