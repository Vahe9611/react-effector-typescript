import {createStore, createEffect} from 'effector'

export const fetchWeatherFx = createEffect()

export const $weather = createStore<any>(null)