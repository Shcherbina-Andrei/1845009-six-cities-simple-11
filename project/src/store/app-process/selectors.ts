import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getCity = (state: State) => state[NameSpace.App].city;
export const getSortType = (state: State) => state[NameSpace.App].sortType;
export const getUserEmail = (state: State) => state[NameSpace.App].userEmail;
