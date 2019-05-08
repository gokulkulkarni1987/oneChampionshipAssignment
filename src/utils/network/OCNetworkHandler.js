'use strict';

import axios from "axios";

import {
  OC_API_BASE_PATH,
  NETWORK_TIME_OUT
} from './NetworkConstants';

class NetworkHandler {

  constructor() {
    const instance = axios.create({
      baseURL: OC_API_BASE_PATH,
      timeout: NETWORK_TIME_OUT
    });
    this.instance = instance;
  }

  get = (path) => {
    return new Promise((resolve, reject) => {
      this.instance
        .get(path)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  post = (path, body, header) => {
    return new Promise((resolve, reject) => {
      let options = {}
      if (header) {
        options.header = header
      }
      this.instance
        .post(path, body, options)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  put = (path, body) => {
    return new Promise((resolve, reject) => {
      this.instance
        .put(path, body)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  delete = (path, body) => {
    return new Promise((resolve, reject) => {
      this.instance
        .delete(path, body)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

const requestHandler = new NetworkHandler();
export const OCNetworkHandler = requestHandler;
