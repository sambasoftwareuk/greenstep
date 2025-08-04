import metadataMap from "../mocks/meta.json";

const BRAND_SUFFIX = "Greenstep Su Soğutma Kuleleri";
const TITLE_PATTERN = "%s - " + BRAND_SUFFIX;

export function getMetadataForPath(pathname) {
  const meta = metadataMap[pathname];

  // Get fallback segment name (e.g., 'urunler')
  const routeSegment = __dirname.split("/").pop();

  return {
    title:
      meta?.title ||
      TITLE_PATTERN.replace("%s", capitalize(routeSegment || "Greenstep")),
    description:
      meta?.description ||
      "Greenstep su soğutma kuleleri ile ilgili detaylı bilgi alın.",
  };
}

function capitalize(word) {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
}
