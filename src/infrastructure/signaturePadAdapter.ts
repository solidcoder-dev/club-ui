import SignaturePad from "signature_pad";
import type {
  SignaturePadInstance,
  SignaturePadPort
} from "../ports/signature-pad-port";

const resizeCanvas = (canvas: HTMLCanvasElement) => {
  const ratio = Math.max(window.devicePixelRatio || 1, 1);
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * ratio;
  canvas.height = rect.height * ratio;
  const context = canvas.getContext("2d");
  if (context) {
    context.scale(ratio, ratio);
  }
};

const SIGNATURE_MAX_WIDTH = 500;
const SIGNATURE_JPEG_QUALITY = 0.5;

const exportCompressedSignature = (canvas: HTMLCanvasElement) => {
  const scale = Math.min(1, SIGNATURE_MAX_WIDTH / canvas.width);
  const targetWidth = Math.round(canvas.width * scale);
  const targetHeight = Math.round(canvas.height * scale);
  const outputCanvas = document.createElement("canvas");
  outputCanvas.width = targetWidth;
  outputCanvas.height = targetHeight;
  const context = outputCanvas.getContext("2d");
  if (!context) {
    return canvas.toDataURL("image/jpeg", SIGNATURE_JPEG_QUALITY);
  }
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, targetWidth, targetHeight);
  context.drawImage(canvas, 0, 0, targetWidth, targetHeight);
  return outputCanvas.toDataURL("image/jpeg", SIGNATURE_JPEG_QUALITY);
};

export function createSignaturePadAdapter(): SignaturePadPort {
  const create = (canvas: HTMLCanvasElement): SignaturePadInstance => {
    resizeCanvas(canvas);
    const pad = new SignaturePad(canvas);

    return {
      clear: () => pad.clear(),
      isEmpty: () => pad.isEmpty(),
      toDataURL: () => exportCompressedSignature(canvas),
      setOnEnd: (callback: () => void) => {
        pad.onEnd = callback;
      }
    };
  };

  return { create };
}
