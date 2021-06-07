
export type Next<T = void> = (err?: Error | null) => void;
export type RequestHandler<T, U, V = void> = (
    req: T,
    res: U,
    next: Next<V>
) => V;

export type Handler<T, U, V = void> = RequestHandler<T, U, V>

export type Handle = RequestHandler<any, any, void>

export type LayerOptions = {
    handle: Handle;
    url: string
}