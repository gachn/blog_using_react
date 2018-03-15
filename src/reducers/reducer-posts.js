/**
 * Created by Gaurav on 2/27/2018.
 */
import {fetchData,typeFetchPostById} from '../actions/index'
import _ from 'lodash';

 export default function (state = {},action) {

      switch(action.type){
          case typeFetchPostById:
              const {data} =action.payload;
              return {...state,[data.id]:data};
          case fetchData:
              return _.mapKeys(action.payload.data,'id');
           // return action.payload.data;
          default:
              return state;
      }
 }