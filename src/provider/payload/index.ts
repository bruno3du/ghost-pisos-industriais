import config from '@/payload.config';
import { getPayload } from 'payload';

export class PayloadServer {
  async execute() {
    const payloadConfig = await config;
    const payload = await getPayload({ config: payloadConfig })
    return payload;
  }
}
