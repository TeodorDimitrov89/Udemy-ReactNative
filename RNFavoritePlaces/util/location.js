const GOOGLE_API_KEY = "6LegRZUaAAAAAPAIQCQYQB5w4s5DGI5NSjjAiJwT";

export const getMapPreview = (lat, lng) => {
  const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  console.log(mapPreviewUrl, "mapPreviewUrl");
  return mapPreviewUrl;
};
