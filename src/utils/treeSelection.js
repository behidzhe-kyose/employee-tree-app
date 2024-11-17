export const toggleChildren = (node, isChecked, selected) => {
    if (isChecked) {
        selected.add(node.Id);
    } else {
        selected.delete(node.Id);
    }
    node.children.forEach(child => toggleChildren(child, isChecked, selected));
};

export const toggleParents = (nodeId, isChecked, nodes, selected) => {
    const findParent = (id, list) => {
        for (const node of list) {
            if (node.children.some(child => child.Id === id)) return node;
            const parent = findParent(id, node.children);
            if (parent) return parent;
        }
        return null;
    };

    const parent = findParent(nodeId, nodes);
    if (parent) {
        if (isChecked) {
            selected.add(parent.Id);
        } else {
            const allUnchecked = parent.children.every(child => !selected.has(child.Id));
            if (allUnchecked) {
                selected.delete(parent.Id);
            }
        }
        toggleParents(parent.Id, isChecked, nodes, selected);
    }
};
