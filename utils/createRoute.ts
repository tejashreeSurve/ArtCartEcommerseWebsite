import { StringObj } from "../types/common.types";

export const createRoute = (
  url: string,
  interpolationObject: StringObj
): string => {
  try {
    Object.entries(interpolationObject).forEach(([key, value]) => {
      url = url.replace(":" + key, value.toString());
    });
  } catch (err) {
    console.log("Error");
  }

  return url;
};
