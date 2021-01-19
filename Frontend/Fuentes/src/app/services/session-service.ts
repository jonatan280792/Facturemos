import {
  localSessionPersistence,
  sessionPersistence,
} from '@utils/session-persistence.util';
import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  private token: string;
  private sessionData: any;
  private language: any;
  private theme: any;

  constructor() {
    const userData = sessionPersistence.get('userData');
    const language = sessionPersistence.get('language');
    const theme = sessionPersistence.get('theme');

    if (userData) {
      this.saveSessionData(userData);
    }

    this.saveSessionLanguage(language ? language : 'es');
    this.saveSessionTheme(theme ? theme : '1');

    this.patchSessionData = this.patchSessionData.bind(this);
  }

  getToken() {
    return this.token || '';
  }

  setToken(token: string) {
    this.token = token;
  }

  removeToken() {
    this.token = null;
  }

  isAuthenticated() {
    this.token = sessionStorage.getItem('token');
    return this.token && this.token !== '';
  }

  getSessionData() {
    return this.sessionData;
  }

  getSessionLTheme() {
    return this.theme;
  }

  getSessionLanguage() {
    return this.language;
  }

  patchSessionData(data) {
    Object.assign(this.sessionData, data);
    this.saveSessionData(this.sessionData);

    return this.sessionData;
  }

  setSessionToken() {
    return sessionPersistence.get('token');
  }

  saveSessionToken(data: any) {
    this.setToken(data);
    sessionPersistence.setRawString('token', data);
  }

  removeSessionToken() {
    sessionStorage.removeItem('token');
    return sessionPersistence.delete('token');
  }

  saveSessionData(data: any) {
    this.setToken(data.token);
    sessionPersistence.set('userData', data);
    this.sessionData = data;
  }

  saveSessionTheme(data: any) {
    sessionPersistence.set('theme', data);
    this.theme = data;
  }

  saveSessionLanguage(data: any) {
    sessionPersistence.set('language', data);
    this.language = data;
  }

  logoutUser() {
    sessionPersistence.deleteAll();
    localSessionPersistence.deleteAll();
  }
}
