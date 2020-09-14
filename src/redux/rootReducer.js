import {combineReducers} from "redux";
import {INCREMENT, DECREMENT, CHANGE_THEME, LIGHT, ENABLE_BUTTONS, DISABLE_BUTTONS, PLUS, MINUS, MULTI, DI} from "./types";
import {plusFunction, minusFunction, multiFunction, diFunction} from "./actions";

const counterReducer = (state = 0, action) => {
    if (action.type === INCREMENT) {
        return state + 1
    } else if (action.type === DECREMENT) {
        return state - 1
    }
    return state
};

const initialThemeState = {
    value: LIGHT,
    disabled: false
};

const themeReducer = (state = initialThemeState, action) => {
  switch(action.type) {
      case CHANGE_THEME:
          return {...state, value: action.payload };
      case ENABLE_BUTTONS:
          return {...state, disabled: false};
      case DISABLE_BUTTONS:
          return {...state, disabled: true};
      default: return state
  }
};

const calculatorReducer = (state = 0, action) => {
    if (action.type === PLUS) {
        return state = plusFunction();
    } else if (action.type === MINUS) {
        return state = minusFunction();
    } else if (action.type === MULTI) {
        return state = multiFunction();
    } else if (action.type === DI) {
        return state = diFunction();
    }

    return state
};

export const rootReducer = combineReducers({
   counter: counterReducer,
   theme: themeReducer,
    calculator: calculatorReducer
});