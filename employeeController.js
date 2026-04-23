exports.addemployee = (req,res) => {
    res.end("Employee Added")
}

exports.aggsample = async (req,res) => {
    const aggregateData = EmployeeModel.aggregate([
        {$match: {department: "sales"}},  // filter
        {$group: {_id: "$department",count: {$sum: 1}}}, // form a grp of all the employee from sales department 
        {$sort: {_id: 1}},  //sort in alphabetic order
        {$limit: 2} // any 2 dept at a time 
    ]);
    res.end(aggregateData);
}

// display top salary employee for each dept
