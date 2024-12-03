export type Monad = {
    $monad: true,
    $t: string,
    $s: boolean,
}

export type Result<T> = Success<T> | Failure
export type Option<T> = Value<T> | None

export type Success<T> = Monad & { $t: 'result', $s: true, val: T }
export type Failure = Monad & { $t: 'result', $s: false, val: string }

export type Value<T> = Monad & { $t: 'value', $s: true, val: T }
export type None = Monad & { $t: 'value', $s: false, val: null }

export function isResult(thing: Monad): thing is Result<unknown> {
    return thing.$monad && thing.$t === 'result'
}

export function isOkay<T>(thing: Result<T>): thing is Success<T>
export function isOkay<T>(thing: Option<T>): thing is Value<T>
export function isOkay<T>(thing: Result<T> | Option<T>): boolean {
    return thing.$s
}

export function isSuccess(thing: Result<unknown>): thing is Success<unknown> {
    return thing.$s
}

export function hasValue(thing: Option<unknown>): thing is Value<unknown> {
    return thing.$s
}

export function unwrap<T>(thing: Result<T> | Option<T>): T | string | null {
    return thing.val
}

export const unwrapR = <T>(thing: Result<T>): T | string => thing.val
export const unwrapO = <T>(thing: Option<T>): T | null => thing.val

export const newResult = <T>(val: T): Success<T> => ({ $monad: true, $t: 'result', $s: true, val })
export const newFailure = (msg: string): Failure => ({ $monad: true, $t: 'result', $s: false, val: msg })
export const newValue = <T>(val: T): Value<T> => ({ $monad: true, $t: 'value', $s: true, val })
export const newNone = (): None => ({ $monad: true, $t: 'value', $s: false, val: null })
