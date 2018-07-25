class Job {
    
    constructor(id, name, salary, description, skills, area, differentials, isPcd, isActive) {
        this.id             = id;
        this.salary         = salary;
        this.name           = name;
        this.description    = description;
        this.skills         = skills;
        this.area           = area;
        this.differentials  = differentials;
        this.isPcd          = isPcd;
        this.isActive       = isActive;
    }
};

//JOB OBJECT INSTANTIATION
const createJob = (obj) => new Job(
    obj.id, 
    obj.name, 
    obj.description,
    obj.skills, 
    obj.salary, 
    obj.area, 
    obj.differentials, 
    obj.isPcd, 
    obj.isActive 
);




const extractJob = (job) => {
    let v = job.data();
    return {
        id: job.id,
        name: v.name,
        description: v.description,
        skills: v.skills,
        differentials: v.differentials,
        isPcd: v.isPcd,
        isActive: v.isActive,
        area: v.area,
        salary : v.salary,
    }
}

module.exports = Job;
module.exports.createJob = createJob;
module.exports.extractJob = extractJob;
