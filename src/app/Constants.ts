import {environment} from '../environments/environment';

export class Constants {
  static readonly baseApiUrl = environment.baseUrl;

  static readonly artistsApiUrl = `${environment.baseUrl}/artists`;
  static readonly artistsPhotoApiUrl = `${environment.baseUrl}/artists/photo`;
  static readonly artistsLatestApiUrl = `${environment.baseUrl}/artists/latest`;
  static readonly exhibitionsApiUrl = `${environment.baseUrl}/exhibitions`;
  static readonly exhibitionsLatestApiUrl = `${environment.baseUrl}/exhibitions/latest`;
  static readonly paintingsApiUrl = `${environment.baseUrl}/paintings`;
  static readonly paintingsLatestApiUrl = `${environment.baseUrl}/paintings/latest`;
  static readonly artistsEditApiUrl = `${environment.baseUrl}/artists/`;
  static readonly exhibitionsEditApiUrl = `${environment.baseUrl}/exhibitions/`;
  static readonly paintingsEditApiUrl = `${environment.baseUrl}/paintings/`;
}
