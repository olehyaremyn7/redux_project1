import {applyMiddleware, createStore, compose} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {rootReducer} from "./redux/rootReducer";
import {increment, decrement, asyncIncrement, init_application, changeTheme, plusType, minusType, multiType, diType} from "./redux/actions";
import {LIGHT, DARK} from "./redux/types";
import './styles.css';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

const outResult = document.getElementById('outResult');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const mulBtn = document.getElementById('mul');
const diBtn = document.getElementById('di');

/*
const logger = (state) => {
    return (next) => {
        return (action) => {
            console.log('Previous State:', state.getState());
            console.log('Action:', action);
            const newState = next(action);
            console.log('New State:', newState);
            return newState
}
}
};
*/

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
});

subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
});

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement())
});

themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains(LIGHT)
    ? DARK
    : LIGHT
    store.dispatch(changeTheme(newTheme))
});

plusBtn.addEventListener('click', () => {
    store.dispatch(plusType())
});

minusBtn.addEventListener('click', () => {
    store.dispatch(minusType())
});

mulBtn.addEventListener('click', () => {
    store.dispatch(multiType())
});

diBtn.addEventListener('click', () => {
    store.dispatch(diType())
});

store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state.counter;
    outResult.textContent = state.calculator;
    document.body.className = state.theme.value;

    [addBtn, subBtn, themeBtn, asyncBtn].forEach(btn => btn.disabled = state.theme.disabled)
});

store.dispatch(init_application());





