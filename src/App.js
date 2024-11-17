import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TreeView from './components/TreeView';
import { buildEmployeeTree } from './utils/treeBuilder';
import { findNode } from './utils/treeTraversal';
import { toggleChildren, toggleParents } from './utils/treeSelection';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [tree, setTree] = useState(null);
    const [selected, setSelected] = useState(new Set());
    const [orphaned, setOrphaned] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		setLoading(true);

		try {
			const response = await fetch("/mock-api/employees.json");

			if(!response.ok) {
				throw new Error("Failed to load data");
			}
			const data = await response.json();
			const { tree, orphaned } = buildEmployeeTree(data);

			setTree(tree);
			setOrphaned(orphaned);
		} catch (error) {
			console.error("Error loading data:", error);
		} finally {
			setLoading(false);
		}
	};
	

    const handleSelect = (id, isChecked) => {
        const newSelected = new Set(selected);
        const node = findNode(id, tree);
        if(node) {
            toggleChildren(node, isChecked, newSelected);
            toggleParents(node.Id, isChecked, tree, newSelected);
        }
        setSelected(newSelected);
    };

    if(loading) return <div>Loading...</div>;
    if(!tree) return <div>Error loading data. Please check again.</div>;

    return (
        <div className='container p-3'>
            <TreeView nodes={tree} onSelect={handleSelect} selected={selected} />

            {orphaned.length > 0 && (
                <div>
                    <h4>Orphaned Employees:</h4>
                    {orphaned.map(emp => (
                        <p key={emp.Id}>{emp.Name} ({emp.Title})</p>
                    ))}
                </div>
            )}
			
            <button className="btn btn-primary mt-3" onClick={() => console.log([...selected])}>
				Submit Selected
			</button>
        </div>
    );
};

export default App;
