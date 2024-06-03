const db=require('../models')
const Sura=db.suras;
const Qareea=db.qareea;
const SuraURL=db.surasurl;
// getAll Qorraa


exports.getAllQorraa = async (req, res) => {
    try {
        Qareea.findAll()
          .then((data) => {
         if (!data){
            return res.status(400).send({ message: "Qorraa not Found!"});
         }
         else {
            return res.status(200).send({ data:data});
         }})
     
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal Server Error" });
        
    }
};
exports.getQareeaByID= async (req, res) => {
    try {
        const id=parseInt(req.query.id);
        Qareea.findOne({where:{id:id}})
          .then((data) => {
         if (!data){
            return res.status(400).send({ message: "Qorraa not Found!"});
         }
         else {
            return res.status(200).send({ data:data});
         }})
     
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal Server Error" });
        
    }
};
