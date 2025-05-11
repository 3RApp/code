const componentsQueue = [];

export const queueComponentName = {
    queue: (componentName) => {
        componentsQueue.push(componentName);
    },
    dequeue: () => {
        const queue = componentsQueue.slice(0);
        componentsQueue.splice(0);

        return queue;
    },
}