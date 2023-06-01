import { createStore } from "redux";
import { rootReducer } from "../reducer/index";
// export const store = createStore() --> 일반 변수로 내보내는 경우

// store --> value들의 집합소(저장소)
const reduxConfig = () => {
  // rootReducer = 컨텍스트 여러 개를 하나로 합치는 것이나 마찬가지
  const store = createStore(rootReducer);
  return store;

  // 왜 함수형으로 만들었을까?
  // 위처럼 함수형이 아닌 일반 변수로 내보내도 상관 없지만
  // 향후 saga라던지 다양한 라이브러리를 사용하려면 단순 변수 뿐만아니라 redux의 특정 함수를 실행
  // 다른 로직 실행을 위해 함수형
};

export default reduxConfig;
