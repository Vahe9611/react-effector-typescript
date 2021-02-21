import {createStore, createEffect} from 'effector'

export const fetchWeatherFx = createEffect()

//imagine initially we have users list as a key-value store
export const $weather = createStore({})