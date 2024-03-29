import {City} from './types/city';
import pinIcon from './img/pin.svg';
import currentPinIcon from './img/pin-active.svg';

export enum AppRoute {
  Login = '/login',
  Root = '/',
  Room = ':id',
  Offers = '/offer',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments'
}

export enum NameSpace {
  Offers = 'OFFERS',
  Comments = 'COMMENTS',
  User = 'USER',
  App = 'APP',
}

export const cities: readonly City[] = [
  {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam'
  },
  {
    location: {
      latitude: 48.85341,
      longitude: 2.3488,
      zoom: 10,
    },
    name: 'Paris'
  },

  {
    location: {
      latitude: 51.22172,
      longitude: 6.77616,
      zoom: 10
    },
    name: 'Dusseldorf'
  },

  {
    location: {
      latitude: 53.55073,
      longitude: 9.99302,
      zoom: 10
    },
    name: 'Hamburg'
  },

  {
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 10
    },
    name: 'Cologne'
  },

  {
    location: {
      latitude: 50.85045,
      longitude: 4.34878,
      zoom: 10
    },
    name: 'Brussels'
  },

];

export enum SortTypes {
  POPULAR = 'Popular',
  LOW = 'Price: low to high',
  HIGH = 'Price: high to low',
  TOP = 'Top rated first'
}

export const ratings: number[] = [5, 4, 3, 2, 1];

export const URL_MARKER_DEFAULT = pinIcon;

export const URL_MARKER_CURRENT = currentPinIcon;


