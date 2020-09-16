interface FetchAuth {
    auth: () => PromiseLike<string>,
    fetch?: typeof fetch
}

export default function fetchAuthFactory (options: FetchAuth) {
    const _fetch = options.fetch || fetch
    const _auth = options.auth
    return async function authenticatedFetch(input?: Request | string, init?: RequestInit): Promise<Response> {
        return await _fetch(input, {
            ...init,
            headers: {
                ...init && init.headers ? init.headers : undefined,
                Authorization: await _auth()
            }
        })
    }
}
