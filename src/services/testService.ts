import { API_ENDPOINTS } from "../constants/urls";

export class TestService {
  access_token = "";
  refresh_token = "";
  constructor(access_token: string, refresh_token: string) {
    this.access_token = access_token;
    this.refresh_token = refresh_token;
  }

  static async initialize() {
    const response = await fetch(API_ENDPOINTS.TOKEN, {});
    const { access_token, refresh_token } = await response.json();
    return new TestService(access_token, refresh_token);
  }

  async getData() {
    const response = await fetch(API_ENDPOINTS.GET_DATA, {headers: {
        authorization: `Bearer ${this.access_token}`
    }});
    const data = await response.json();
    return data;
  }
}


