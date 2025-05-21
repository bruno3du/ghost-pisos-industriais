import { Media } from '@/payload-types';
import { BasePayload } from 'payload';
import { UploadInterface } from './upload.interface';

export class UploadProvider implements UploadInterface {
  private payload: BasePayload;

  constructor(payload: BasePayload) {
    this.payload = payload;
  }


  async uploadImageByUrl({
    url,
    alt = 'Image',
  }: {
    url: string;
    alt: string;
  }): Promise<Media> {
    const blob = await fetch(url).then((r) => r.blob());
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const createdImage = await this.payload.create({
      collection: 'media',
      data: {
        alt,
      },
      file: {
        data: buffer,
        mimetype: blob.type,
        name: 'image.jpg',
        size: blob.size,
      },
    });

    return createdImage;
  }

}
