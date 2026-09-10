// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const noop = (...args: any[]): void => {
    return;
};

export const emptyArr = [];

export const pick =
    <T, U extends Record<any, any>>(name: string | string[]) =>
    (it: U): T =>
        Array.isArray(name)
            ? (Object.fromEntries(Object.entries(it).filter(([key]) => name.includes(key))) as T)
            : (it[name] as T);
