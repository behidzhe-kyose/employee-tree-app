export const buildEmployeeTree = (data) => {
    const tree = [];
    const orphaned = [];
    const employeesMap = {};

    data.forEach(employee => {
        employeesMap[employee.Id] = { ...employee, children: [] };
    });

    data.forEach(employee => {
        if (employee.ManagerId === null) {
            tree.push(employeesMap[employee.Id]);
        } else {
            const manager = employeesMap[employee.ManagerId];
            if (manager) {
                manager.children.push(employeesMap[employee.Id]);
            } else {
                orphaned.push(employee);
            }
        }
    });

    return { tree, orphaned };
};
