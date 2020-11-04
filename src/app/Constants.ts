import { environment } from '../environments/environment';

export class Constants {
  static readonly baseApiUrl = environment.baseUrl;

  static readonly artistsApiUrl = `${environment.baseUrl}/artists`;
  static readonly exhibitionsApiUrl = `${environment.baseUrl}/exhibitions`;
  static readonly paintingsApiUrl = `${environment.baseUrl}/paintings`;
}
