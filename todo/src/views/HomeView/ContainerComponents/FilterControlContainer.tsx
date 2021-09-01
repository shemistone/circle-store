import {inject, observer} from "mobx-react";
import React from "react";
import {FilterControl, FilterControlProps} from "../../../components/FilterControl";
import {HomeViewProps} from "../HomeView";

import { connectToProps } from '../Store/Connect';

const mapStoreToProps = (injected : HomeViewProps) => ({showCompleted: injected.store.viewSelectors.showCompleted, toggleShowCompleted: injected.store.actions.toggleShowCompleted});

// export const FilterControlContainer = inject(mapStoreToProps)(observer(FilterControl));

export const FilterControlContainer = connectToProps(mapStoreToProps)(FilterControl);