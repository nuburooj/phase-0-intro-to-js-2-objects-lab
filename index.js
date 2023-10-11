// Write your solution in this file!
const employee = {};

employee.name = "Chavo";

employee.streetAddress = "2909 albemarle rd, Brooklyn, NY, 11226";

employee;



function updateEmployeeWithKeyAndValue(employee, key, value){

    const newEmployee = { ...employee };

    newEmployee[key] = value;
    return employee, newEmployee;

}



function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
   
    employee[key] = value;
    return employee;

}



function destructivelyDeleteFromEmployeeByKey(employee, key){

    delete employee.name;
    return employee;

}



function deleteFromEmployeeByKey(employee, key){
    
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
    
}