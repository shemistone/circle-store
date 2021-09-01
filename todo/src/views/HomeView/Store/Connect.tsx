import { connect } from 'http2';
import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { StoreContext } from './StoreContext';

// export const connectToProps = function connectFunc<T, Se, A>(
//   mapSelectorsToProps: (selectors: any, ownProps: T) => Partial<T>,
//   mapActionsToProps: (actions: any, ownProps: T) => Partial<T>
// ) {
//   return function connector(Component: React.FunctionComponent<T>) {
//     return observer((props: any) => {
//       const store = useContext(StoreContext);
//       if (store === null) {
//         throw new Error('No Provider was passed for the context.');
//       }
//       return <Component {...mapSelectorsToProps(store.viewSelectors, props)} {...mapActionsToProps(store.actions, props)} {...props} />;
//     }) as React.FunctionComponent<T>;
//   };
// };

export const connectToProps = function connectFunc<T>(
  mapStoreToProps: (storeProps: any, ownProps: T) => Partial<T>
) {  
  return function connector(Component: React.FunctionComponent<T>) {
    return observer((props: any) => {
      const store = useContext(StoreContext);
      if (store === null) {
        throw new Error('No Provider was passed for the context.');
      }
      return <Component 
        {...mapStoreToProps({store}, props)} 
        {...props} />;
    });// as React.FunctionComponent<T>;
  };
};