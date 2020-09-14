import {INCREMENT, DECREMENT, INIT_APPLICATION, CHANGE_THEME, ENABLE_BUTTONS, DISABLE_BUTTONS, PLUS, MINUS, MULTI, DI} from "./types";

export const increment = () => {
    return { type: INCREMENT }
};

export const decrement = () => {
    return { type: DECREMENT }
};

export const enableButtons = () => {
    return { type: ENABLE_BUTTONS }
};

export const disableButtons = () => {
    return { type: DISABLE_BUTTONS }
};

export const init_application = () => {
    return { type: INIT_APPLICATION }
};

export const changeTheme = (newTheme) => {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
};

let stateResult = 0;

export const plusFunction = () => {

    let num1 = document.getElementById('numOne').value;
    num1 = parseInt(num1);
    let num2 = document.getElementById('numTwo').value;
    num2 = parseInt(num2);

    return stateResult = num1 + num2;
};

export const plusType = () => {
    return { type: PLUS }
};

export const minusFunction = () => {

    let num1 = document.getElementById('numOne').value;
    num1 = parseInt(num1);
    let num2 = document.getElementById('numTwo').value;
    num2 = parseInt(num2);

    return stateResult = num1 - num2;
};

export const minusType = () => {
    return { type: MINUS }
};

export const multiFunction = () => {

    let num1 = document.getElementById('numOne').value;
    num1 = parseInt(num1);
    let num2 = document.getElementById('numTwo').value;
    num2 = parseInt(num2);

    return stateResult = num1 * num2;
};

export const multiType = () => {
    return { type: MULTI }
};

export const diFunction = () => {

    let num1 = document.getElementById('numOne').value;
    num1 = parseInt(num1);
    let num2 = document.getElementById('numTwo').value;
    num2 = parseInt(num2);

    return stateResult = num1 / num2;
};

export const diType = () => {
    return { type: DI }
};

export const asyncIncrement = () => {
    return function(dispatch) {
        dispatch(disableButtons());
        setTimeout(() => {
            dispatch(increment());
            dispatch(enableButtons());
        }, 1500)
    }
}