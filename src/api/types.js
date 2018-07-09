// @flow

/*
Inspired by FeathersJS "services"
https://docs.feathersjs.com/api/services.html#service-methods
*/
export interface RestApi {
  get(id: string): Promise<any>;
  find(params?: Object): Promise<any>;
  // create(data: Object): Promise<any>;
  // update(data: Object): Promise<any>;
}
