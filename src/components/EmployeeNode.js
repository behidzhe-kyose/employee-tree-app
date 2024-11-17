import React, { memo } from 'react';

const EmployeeNode = memo(({ node, onSelect, selected }) => {
    const isChecked = selected.has(node.Id);

    return (
        <li className="list-group-item">
            <div className='pb-2'>
                <input type="checkbox" checked={isChecked} onChange={(e) => onSelect(node.Id, e.target.checked)} />
                <span className='ps-2'>{node.Title} - {node.Name}</span>
            </div>
            
            {node.children.length > 0 && (
                <ul className="list-group ms-4">
                    {node.children.map(child => (
                        <EmployeeNode key={child.Id} node={child} onSelect={onSelect} selected={selected} />
                    ))}
                </ul>
            )}
        </li>
    );
});

export default EmployeeNode;
