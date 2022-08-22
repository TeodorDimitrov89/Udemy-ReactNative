import axios from "axios";

const API_ACCESS_TOKEN = "e04f24d43e4c3f35ebdaacfa76daee28";

export const getPositionMapPreview = async (lat, lng) => {
  const mapPositionPreviewUrl = `http://api.positionstack.com/v1/reverse?access_key=${API_ACCESS_TOKEN}&query=${lat},${lng}&limit=1`;

  // const responseMap = await axios.get(mapPositionPreviewUrl, {
  //   data: {
  //     access_key: "e04f24d43e4c3f35ebdaacfa76daee28",
  //     query: "51.507822,-0.076702",
  //     output: "json",
  //     limit: 1,
  //   },
  // });

  const responseMap = await axios.get(mapPositionPreviewUrl);
  return responseMap;
};
