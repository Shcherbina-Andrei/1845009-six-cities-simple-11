import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getCurrentComments = (state: State) => state[NameSpace.Comments].currentComments;
