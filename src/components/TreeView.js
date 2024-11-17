import React from 'react';
import EmployeeNode from './EmployeeNode';

const TreeView = ({ nodes, onSelect, selected }) => {
    return (
        <ul className="list-group">
            {nodes.map(node => (
                <EmployeeNode
                    key={node.Id}
                    node={node}
                    onSelect={onSelect}
                    selected={selected}
                />
            ))}
        </ul>
    );
};

export default TreeView;
