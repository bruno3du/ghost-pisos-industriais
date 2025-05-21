import { Media } from "@/payload-types";

export interface UploadInterface {
  uploadImageByUrl: (params: {
    url: string;
    alt: string;
  }) => Promise<Media>;
}