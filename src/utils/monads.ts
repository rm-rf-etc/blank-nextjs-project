export type Monad = {
    $monad: true,
    $t: string,
    $s: boolean,
}

export type Result<V, E = string> = Success<V> | Failure<E>
export type Option<T> = Value<T> | None

export type Success<V> = Monad & { $t: 'result', $s: true, val: V }
export const Success = <V>(val: V): Success<V> => (
    { $monad: true, $t: 'result', $s: true, val }
)
export type Failure<E = string> = Monad & { $t: 'result', $s: false, val: E }
export const Failure = <E = string>(err: E): Failure<E> => (
    { $monad: true, $t: 'result', $s: false, val: err }
)

export type Value<T> = Monad & { $t: 'value', $s: true, val: T }
export const Value = <T>(val: T): Value<T> => (
    { $monad: true, $t: 'value', $s: true, val }
)
export type None = Monad & { $t: 'value', $s: false, val: null }
export const None = (): None => (
    { $monad: true, $t: 'value', $s: false, val: null }
)

export function isResult(thing: Monad): thing is Result<unknown, string> {
    return thing.$monad && thing.$t === 'result'
}

export function isOkay<V, E = string>(thing: Result<V, E>): thing is Success<V>
export function isOkay<V>(thing: Option<V>): thing is Value<V>
export function isOkay<V, E = string>(thing: Result<V, E> | Option<V>): boolean {
    return thing.$s
}

export function isSuccess(thing: Result<unknown, string>): thing is Success<unknown> {
    return thing.$s
}

export function hasValue(thing: Option<unknown>): thing is Value<unknown> {
    return thing.$s
}

export function unwrap<V, E = string>(thing: Result<V, E> | Option<V>): V | E | null {
    return thing.val
}

export const unwrapR = <V, E = string>(thing: Result<V, E>): V | E => thing.val
export const unwrapO = <T>(thing: Option<T>): T | null => thing.val
