import { BasePayload } from 'payload';

export class UploadProvider {
  private payload: BasePayload;

  constructor(payload: BasePayload) {
    this.payload = payload;
  }


  async uploadImageByUrl(url: string) {
    const blob = await fetch(url).then((r) => r.blob());
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const createdImage = await this.payload.create({
      collection: 'media',
      data: {
        alt: 'Image',
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
