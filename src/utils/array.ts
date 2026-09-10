const iterableRange = (start: number, end: number) => ({
    *[Symbol.iterator]() {
        const [from, to] = start <= end ? [start, end] : [end, start];

        for (let i = from; i <= to; i++) yield i;
    },
});
export const range: (start: number, end: number) => number[] = (start, end) => Array.from(iterableRange(start, end));
