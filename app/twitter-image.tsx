// the same picture as the share preview (app/opengraph-image.tsx), for X; Next.js reads these settings
// from this file itself, so they are written out here rather than re-exported
import OpengraphImage from "./opengraph-image";

export const alt = "Faxtor: custom software, ERP and CRM for growing businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default OpengraphImage;
