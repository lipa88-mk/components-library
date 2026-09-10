import type React from 'react';
import { useState, useRef, useLayoutEffect } from 'react';
import type { MultiSelectProps } from './models';

export type UseHiddenTagsLengthProps = {
    rootRef: React.RefObject<HTMLDivElement | null>;
    hintRef: React.RefObject<HTMLElement | null>;
    value: MultiSelectProps['value'];
};

const isHTMLElement = (node: unknown): node is HTMLElement => node instanceof HTMLElement;

const getChildNodes = (root: HTMLElement): HTMLElement[] =>
    [...root.childNodes].filter(node => isHTMLElement(node) && !node.hasAttribute('data-hint-tag')) as HTMLElement[];

const removeHiddenState = (el: HTMLElement) => {
    el.setAttribute('aria-hidden', 'true');
    el.style.setProperty('visibility', 'hidden');
};

const setHiddenState = (el: HTMLElement) => {
    el.style.removeProperty('visibility');
    el.removeAttribute('aria-hidden');
};

const removeFlexboxOrder = (el: HTMLElement) => el.style.removeProperty('order');

const setFlexboxOrder = (el: HTMLElement, value: number) => el.style.setProperty('order', `${value}`);

const splitElementsByVisibility = (elements: HTMLElement[]): [HTMLElement[], HTMLElement[]] =>
    elements.reduce(
        (result: [HTMLElement[], HTMLElement[]], element) => {
            const [visible, hidden] = result;
            const isHidden = element.getAttribute('aria-hidden') === 'true';
            if (isHidden) {
                hidden.push(element);
            } else {
                visible.push(element);
            }
            return result;
        },
        [[], []]
    );

export const useHiddenTagsObserver = ({ rootRef, hintRef, value }: UseHiddenTagsLengthProps) => {
    const [hiddenItemsLength, setHiddenItemsLength] = useState<number>(0);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const observedNodesRef = useRef<Set<HTMLElement>>(new Set());

    useLayoutEffect(() => {
        const root = rootRef.current;
        const hintElement = hintRef.current;

        if (root && hintElement) {
            const children: HTMLElement[] = getChildNodes(root);

            if (!observerRef.current) {
                observerRef.current = new IntersectionObserver(
                    entries => {
                        const allElements = Array.from(observedNodesRef.current);

                        entries.forEach(entry => {
                            if (entry.rootBounds) {
                                const element = entry.target as HTMLElement;
                                const isVisible = entry.isIntersecting;
                                if (isVisible) {
                                    setHiddenState(element);
                                } else {
                                    removeHiddenState(element);
                                }
                            }
                        });

                        const [visibleElements, hiddenElements] = splitElementsByVisibility(allElements);
                        const hiddenCount = hiddenElements.length;

                        allElements.forEach(child => removeFlexboxOrder(child));
                        removeFlexboxOrder(hintElement);

                        if (hiddenCount > 0) {
                            visibleElements.forEach((el, index) => setFlexboxOrder(el, index));
                            setFlexboxOrder(hintElement, visibleElements.length);
                            hiddenElements.forEach((el, index) =>
                                setFlexboxOrder(el, visibleElements.length + index + 1)
                            );
                        }

                        setHiddenItemsLength(hiddenCount);
                    },
                    {
                        root,
                        rootMargin: '0px -40px 0px 0px',
                        threshold: 1,
                    }
                );
            }

            const observer = observerRef.current;

            observedNodesRef.current.forEach(node => {
                if (!children.includes(node)) {
                    observer.unobserve(node);
                    observedNodesRef.current.delete(node);
                }
            });

            children.forEach(node => {
                if (!observedNodesRef.current.has(node)) {
                    observer.observe(node);
                    observedNodesRef.current.add(node);
                }
            });

            return () => {
                observer.disconnect();
                observedNodesRef.current.clear();
            };
        }
    }, [value]);

    return hiddenItemsLength;
};
