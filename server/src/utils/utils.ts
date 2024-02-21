export const unwrapAsync = async <T,>(promise: Promise<T>): Promise<[T, null] | [null, any]> => {
    try {
        const res = await promise;
        return [res, null];
    } catch (e) {
        return [null, e];
    }
}