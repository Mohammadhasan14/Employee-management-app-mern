const express = require("express")
const router = express.Router()
const mongoose = require('mongoose');
const { PersonalDetail, AcademicDetail, MySkillDetail, JobDetails, PerformanceDetail, LeaveAdd, LeaveDetail } = require('../model/employeeSchema')


////////////////////////////////// Just for testing purpose ///////////////////////////

// router.get("/add", (req, res, next) => {
//   res.send("Hello world")
// })




/////////////////////////////////////////// router.post to save data on a mongodb database and router.get to read but we are not using router.get right now. //////////////////////////////////////////////////


router.post('/personaldetails', async (req, res) => {
  const newData = new PersonalDetail(req.body);
  console.log("this is new data" + newData)
  try {
    // Find the highest id value in the collection
    const highestId = await PersonalDetail.find().sort({ employeeId: -1 }).limit(1);
    const newId = highestId.length > 0 ? highestId[0].employeeId + 1 : 1;
    newData.employeeId = newId;
    await newData.save().then((res) => console.log("newdata.save :" + res)).catch(err => console.log(err));
    res.status(201).send('Personal data saved');
    console.log(`this is personal data: ${newData}`)
  } catch (error) {
    res.status(400).send(error);
  }
});





router.post('/academicdetails', async (req, res) => {
  const newData = new AcademicDetail(req.body);
  try {
    const highestId = await AcademicDetail.find().sort({ employeeId: -1 }).limit(1);
    const newId = highestId.length > 0 ? highestId[0].employeeId + 1 : 1;
    newData.employeeId = newId;
    await newData.save().then((res) => console.log("newdata.save :" + res)).catch(err => console.log(err));
    res.status(201).send('Personal data saved');
    console.log(`this is personal data: ${newData}`)
  } catch (error) {
    res.status(400).send(error);
  }
});



router.post('/internshiporskillsdetails', async (req, res) => {
  const newData = new MySkillDetail(req.body);
  try {
    const highestId = await MySkillDetail.find().sort({ employeeId: -1 }).limit(1);
    const newId = highestId.length > 0 ? highestId[0].employeeId + 1 : 1;
    newData.employeeId = newId;
    await newData.save().then((res) => console.log("newdata.save :" + res)).catch(err => console.log(err));
    res.status(201).send('Personal data saved');
    console.log(`this is personal data: ${newData}`)
  } catch (error) {
    res.status(400).send(error);
  }
});


router.post('/jobdetails', async (req, res) => {
  const newData = new JobDetails(req.body);
  try {
    const highestId = await JobDetails.find().sort({ employeeId: -1 }).limit(1);
    const newId = highestId.length > 0 ? highestId[0].employeeId + 1 : 1;
    newData.employeeId = newId;
    await newData.save().then((res) => console.log("newdata.save :" + res)).catch(err => console.log(err));
    res.status(201).send('Personal data saved');
    console.log(`this is personal data: ${newData}`)
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/performance', async (req,res)=>{
  const newData = new PerformanceDetail(req.body) 
    console.log(newData)
  try {
    const highestId = await PerformanceDetail.find().sort({employeeId : -1}).limit(1);
    const newId = highestId.length > 0 ? highestId[0].employeeId + 1 : 1;
    newData.employeeId = newId;
    await newData.save().then(res =>{console.log(res)}).catch(err =>{console.log(err)})
    res.status(200).send("performace data saved successfully")
  }
  catch (error){
    res.status(400).send(error);
  }
})

router.post('/leave', async (req,res)=>{
  const newData = new LeaveDetail(req.body) 
    console.log(newData)
  try {
    const highestId = await LeaveDetail.find().sort({employeeId : -1}).limit(1);
    const newId = highestId.length > 0 ? highestId[0].employeeId + 1 : 1;
    newData.employeeId = newId;
    await newData.save().then(res =>{console.log(res)}).catch(err =>{console.log(err)})
    res.status(200).send("leave data saved successfully")
  }
  catch (error){
    res.status(400).send(error);
  }
})







////////////////////////////////////////////////////////////////////////////////
// router.post('/dashboardaddmore', async (req, res) => {
//   const newData = new DashboardAdd(req.body)
//   try {
//     const highestId = await DashboardAdd.find().sort({ employeeId: -1 }).limit(1);
//     const newId = highestId.length > 0 ? highestId[0].employeeId + 1 : 1;
//     newData.employeeId = newId;
//     await newData.save().then((res) => console.log("newdata.save :" + res)).catch(err => console.log(err));
//     res.status(201).send('Personal data saved');
//     console.log(`this is personal data: ${newData}`)
//   } catch (error) {
//     res.status(400).send(error);
//   }
// })


/////////////////////////////////// To get data //////////////////////////////////////////


// router.get('/academicdetails', async (req, res) => {
//   try {
//     const newId = await AcademicDetail.find().sort({ employeeId: -1 }).limit(1)
//     res.send(newId)
//   }
//   catch (err) {
//     res.status(400).send(err)
//   }
// })



// router.get('/personaldetails', async (req, res) => {
//   try {
//     const highestId = await PersonalDetail.find().sort({ employeeId: -1 }).limit(1);
//     console.log(highestId)
//     res.send(highestId)

//   } catch (error) {
//     res.status(400).send(error)
//   }
// })



// router.get('/internshiporskillsdetails', async (req, res) => {
//   try {
//     const newId = await MySkillDetail.find().sort({ employeeId: -1 }).limit(1)
//     res.send(newId)
//   }
//   catch (error) {
//     res.status(400).send(error)
//   }
// })


// router.get('/jobdetails', async (req, res)=>{
//   try{
//     const newId = await JobDetails.find().sort({employeeId : -1}).limit(1)
//     res.send(newId)
//   }
//   catch (error){
//     res.status(400).send(error)
//   }
// })




//////////////////////////// Update Employee database collections ///////////////////////

router.post('/updateemployee', async (req, res) => {
  const personalDataUpdate = req.body.personalData;
  const academicDataUpdate = req.body.academicData;
  const skillDataUpdate = req.body.skillData;
  const jobDataUpdate = req.body.jobData;
  console.log("personalDataUpdate ", personalDataUpdate)
  try {
    const updatedPersonalData = await PersonalDetail.findOneAndUpdate(
      { _id: personalDataUpdate._id },
      personalDataUpdate,
      { new: true }
    );

    const updatedAcademicData = await AcademicDetail.findOneAndUpdate(
      { _id: academicDataUpdate._id },
      academicDataUpdate,
      { new: true }
    );

    const updatedSkillData = await MySkillDetail.findOneAndUpdate(
      { _id: skillDataUpdate._id },
      skillDataUpdate,
      { new: true }
    );

    const updatedJobData = await JobDetails.findOneAndUpdate(
      { _id: jobDataUpdate._id },
      jobDataUpdate,
      { new: true }
    );

    res.status(201).send('Employee data updated successfully.');
    // console.log('Employee data updated:', {
    //   updatedPersonalData,
    //   updatedAcademicData,
    //   updatedSkillData,
    //   updatedJobData
    // });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post('/performanceUpdate', async (req, res)=>{
  const performanceData = req.body
  console.log('performanceData ',performanceData);
  try{
    const updatePerformance = await PerformanceDetail.findOneAndUpdate(
      {_id : performanceData._id},
      performanceData,
      {new : true}
      )

    res.status(200).send('Data received')
  } catch (err){
    console.log(err)
    res.status(400).send(err)

  }
})


router.post('/leaveUpdate', async (req, res)=>{
  const leaveData = req.body
  console.log('performanceData ',leaveData);
  try{
    const updatePerformance = await LeaveDetail.findOneAndUpdate(
      {_id : leaveData._id},
      leaveData,
      {new : true}
      )

    res.status(200).send('Data received')
  } catch (err){
    console.log(err)
    res.status(400).send(err)

  }
})



///////////////////////////////////// Find every employee collections data by id to render on client side employeeTable. ////////////////////////////////////////////

router.get('/employeeData', async (req, res) => {
  try {
    const [personalData, academicData, skillData, jobData] = await Promise.all([
      PersonalDetail.find(),
      AcademicDetail.find(),
      MySkillDetail.find(),
      JobDetails.find()
    ]);

    const employeeData = [];
    const maxLength = Math.max(
      personalData.length,
      academicData.length,
      skillData.length,
      jobData.length
    );

    for (let i = 0; i < maxLength; i++) {
      const dataObj = {};
      if (personalData[i]) dataObj.personalData = personalData[i];
      if (academicData[i]) dataObj.academicData = academicData[i];
      if (skillData[i]) dataObj.skillData = skillData[i];
      if (jobData[i]) dataObj.jobData = jobData[i];
      employeeData.push(dataObj);
    }

    res.send(employeeData);
    console.log(employeeData);
  } catch (err) {
    console.error(err);
    res.status(500).send('internal server error');
  }
});

router.get('/performance', async (req,res)=>{
  try{
    const performance = await PerformanceDetail.find()
  console.log('find data', performance)
  res.send(performance)
  } catch (error) {
    console.error(error)
    res.status(500).send('internal server error');
  }
  
})

router.get('/leave', async (req,res)=>{
  try{
    const leave = await LeaveDetail.find()
  console.log('find data', leave)
  res.send(leave)
  } catch (error) {
    console.error(error)
    res.status(500).send('internal server error');
  }
  
})

////////////////////////////////////////// Delete employee data by id ////////////////////////////////////////////////////////////


// router.post('/deleteemployee', async (req, res) => {
//   const personalDataDelete = req.body;
//   const academicDataDelete = req.body.academicData;
//   const skillDataDelete = req.body.skillData;
//   const jobDataDelete = req.body.jobData;
//   console.log("personalDataDelete ",personalDataDelete)
//   try {
//     const deletePersonalData = await PersonalDetail.findByIdAndDelete()(
//       { _id: personalDataDelete._id },
//       personalDataDelete,
//       { new: true }
//     );

//     const deletedAcademicData = await AcademicDetail.findByIdAndDelete()(
//       { _id: academicDataDelete._id },
//       academicDataDelete,
//       { new: true }
//     );

//     const deleteSkillData = await MySkillDetail.findByIdAndDelete()(
//       { _id: skillDataDelete._id },
//       skillDataDelete,
//       { new: true }
//     );

//     const deleteJobData = await JobDetails.findByIdAndDelete()(
//       { _id: jobDataDelete._id },
//       jobDataDelete,
//       { new: true }
//     );

//     res.status(201).send('Employee data updated successfully.');
//     console.log('Employee data updated:', {
//       deletePersonalData,
//       deletedAcademicData,
//       deleteSkillData,
//       deleteJobData
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error);
//   }
// });

router.delete('/deleteemployee', async (req, res) => {
  const dataDelete = req.body;
  console.log("personalDataDelete ", dataDelete)
  try {
    const deletePersonalData = await PersonalDetail.findOneAndDelete(
      { _id: dataDelete?.personalData?._id }
    );

    const deletedAcademicData = await AcademicDetail.findOneAndDelete(
      { _id: dataDelete?.academicData?._id }
    );

    const deleteSkillData = await MySkillDetail.findOneAndDelete(
      { _id: dataDelete?.skillData?._id }
    );

    const deleteJobData = await JobDetails.findOneAndDelete(
      { _id: dataDelete?.jobData?._id }
    );

    res.status(200).send('Employee data deleted successfully.');
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete('/deleteperformance', async (req, res)=>{
  const deleteData = req.body;
  console.log('deleteData',deleteData)
  try {
    const deletePerformance = await PerformanceDetail.findOneAndDelete(
      {_id: deleteData._id}
    );
    res.status(200).send('data successfully deleted')
  } catch (error) {
    console.error(error)
    console.log(error)
  }

})

router.delete('/deleteleave', async (req, res)=>{
  const deleteData = req.body;
  console.log('deleteData',deleteData)
  try {
    const deleteLeave = await LeaveDetail.findOneAndDelete(
      {_id: deleteData._id}
    );
    res.status(200).send('data successfully deleted')
  } catch (error) {
    console.error(error)
    console.log(error)
  }

})



module.exports = router