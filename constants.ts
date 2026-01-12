
import { PaperSize } from './types';

export const PAPER_DIMENSIONS = {
  [PaperSize.A4]: { width: 210, height: 297 },
  [PaperSize.LETTER]: { width: 215.9, height: 279.4 },
  [PaperSize.A3]: { width: 297, height: 420 },
};

export const MAX_PAGES_WIDE = 15;
export const MIN_PAGES_WIDE = 1;
