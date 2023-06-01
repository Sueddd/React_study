import { combineReducers } from "redux";
// user라는 키값으로 등록
import user from "./user";
// todo라는 키값으로 등록하면 todoreducer도 만들어진 것이다. 
import todo from "./todo";


// 최상위 ? > reducer을 합쳐주는 곳
// reducer를 하나하나의 컨텍스트라고 생각하면 된다.
// 컨텍스트 여러 개를 하나로 합치는 것이나 마찬가지

export const rootReducer = combineReducers({ user, todo });
