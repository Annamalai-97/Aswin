const student=require('../models/user.model')

exports.registerstudent= async (req, res, next) => {
    console.log(req.body)
 student.create(req.body)
      .then((data) => res.status(201).json(data))
      .catch((err) => {
        res.status(400).send({
          message: err.message || "Some error occurred while Post",
        });
      });
  };

 exports.getuser=async(req,res)=>{
  try{
    const data=await student.find({})
    return res.json(data)

  }catch(error){
    console.log(error)
    res.send({error:error})
  }


 }

 exports.getuserbyid=async(req,res)=>{
  const {id}=req.params;
  console.log('id',id)
 }