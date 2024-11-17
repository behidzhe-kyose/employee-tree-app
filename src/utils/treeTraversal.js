export const findNode = (id, nodes) => {
    for (const node of nodes) {
        if (node.Id === id) return node;
        const found = findNode(id, node.children);
        if (found) return found;
    }
    return null;
};