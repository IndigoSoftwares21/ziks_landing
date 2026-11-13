import { renderShareImage, SHARE_ALT, SHARE_SIZE } from "./_og/share-image";

export const alt = SHARE_ALT;
export const size = SHARE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderShareImage();
}
