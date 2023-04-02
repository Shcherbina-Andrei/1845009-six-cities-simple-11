import {rootReducer} from './../root-reducer';
import {PayloadAction} from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
import {Middleware} from 'redux';

type Reducer = ReturnType <typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'app/redirectToRoute') {
          browserHistory.push(`${process.env.PUBLIC_URL}/${action.payload}`);
        }

        return next(action);
      };