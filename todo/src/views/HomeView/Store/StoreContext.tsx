import React from 'react';
import {HomeViewState} from "./_____State/HomeViewState";
import {HomeViewSelectors} from "./__ViewSelectors/HomeViewSelectors";
import {HomeViewActions} from "./_Actions/HomeViewActions";
import {Store} from "../../../store-types/store";

export const StoreContext = React.createContext<Store<HomeViewState, HomeViewActions, HomeViewSelectors> | null>(null);