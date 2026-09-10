const relativeContainerId = 'relative-container';
let container: HTMLDivElement | undefined;

export function useRelativeContainer(props?: { strategy?: 'relative' | 'fixed' }) {
    if (!container) {
        const foundContainer = document.getElementById(relativeContainerId) as HTMLDivElement;
        if (foundContainer) {
            container = foundContainer;
            return container;
        }

        container = document.body.appendChild(document.createElement('div'));
        container.setAttribute('style', `width: 0px; height: 0px; position: ${props?.strategy || 'relative'}`);
        container.setAttribute('id', relativeContainerId);
    }

    return container;
}
