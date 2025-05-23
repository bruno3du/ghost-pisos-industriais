import { BasePayload } from "payload";

export class GlobalProvider {
  constructor(private payload: BasePayload) {}

  async contact() {
    return this.payload.findGlobal({slug: 'contact'});
  }
}