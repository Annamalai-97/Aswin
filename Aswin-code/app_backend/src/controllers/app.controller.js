const form=require('../models/appfrm.model')

exports.applying= async (req, res, next) => {
    console.log(req.body)
 form.create(req.body)
      .then((data) => res.status(201).json(data))
      .catch((err) => {
        res.status(400).send({
          message: err.message || "Some error occurred while Post",
        });
      });
  };

 exports.getdata=async(req,res)=>{
  try{
    const collect=await form.find({})
    return res.json(collect)

  }catch(error){
    console.log(error)
    res.send({error:error})
  }


 }