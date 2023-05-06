const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/employeeDetails').then(() => {
    // Do things once connected
    console.log('connection ready: ' + mongoose.connection.readyState);
  }).catch(error => {
    // Handle connection error
  });

const personaldetailSchema = new mongoose.Schema({
    employeeId: Number,
    firstName: String,
    middleName: String,
    lastName: String,
    city: String,
    state: String,
    pinCode: String,
    dateOfBirth: String,
    email: String,
    phoneNo: Number,
    phoneNo2: Number,
    address: String
})


module.exports.PersonalDetail = mongoose.model('PersonalDetail', personaldetailSchema);

const academicdetailSchema = new mongoose.Schema({
    employeeId: Number,
    board10: String,
    schoolName: String,
    yearOfPassing10: String,
    percentage10: String,
    state10: String,
    city10: String,
    course12: String,
    board12: String,
    college12: String,
    yearOfPassing12: String,
    percentage12: String,
    state12: String,
    city12: String,
    courseGra: String,
    collegeGra: String,
    yearOfPassingGra: String,
    percentageGra: String,
    stateGra: String,
    cityGra: String
})

module.exports.AcademicDetail = mongoose.model("AcademicDetail", academicdetailSchema);

const mySkillDetailSchema = new mongoose.Schema({
    employeeId: Number,
    course: String,
    start: String,
    end: String,
    skills: String,
    onlineOrOffline: String,
    tutor: String,
    phoneNo: Number,
    address: String,
    project: String,
    mention: String
})

module.exports.MySkillDetail = mongoose.model('MySkillDetail', mySkillDetailSchema)

const jobDetailSchema = new mongoose.Schema({
    employeeId: Number,
    department: String,
    designation: String,
    project: String,
    status: String,
    salary: String,
    start: String,
    end: String,
    working: String
})

module.exports.JobDetails = mongoose.model('JobDetails', jobDetailSchema)

// const dashboardAddSchema = new mongoose.Schema({
//     employeeId: Number,
//     firstName: String,
//     lastName: String,
//     email: String,
//     project: String,
//     status: String,
//     phoneNo: Number
// })

// module.exports.DashboardAdd = mongoose.model('DashboardAdd', dashboardAddSchema)


const performanceDetailSchema = new mongoose.Schema({
    employeeId: Number,
    firstName: String,
    lastName: String,
    reviewPeriod: String,
    performanceRating: Number,
    GoalsObjectives: String,
    Accomplishments: String,
    AreasForImprovement: String,
    TrainingAndDevelopment: String,
    feedback: String
})

module.exports.PerformanceDetail = mongoose.model('PerformanceDetail', performanceDetailSchema)

const leaveDetailSchema = new mongoose.Schema({
    employeeId: Number,
    firstName: String,
    lastName: String,
    email: String,
    leaveType: String,
    approvalStatus: String,
    duration: String
})

module.exports.LeaveDetail = mongoose.model('LeaveDetail', leaveDetailSchema)

