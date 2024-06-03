const db=require('../models')
const s=db.reciters;

exports.updatePassword = async (req, res) => {
    try {
        s.findAll()
          .then((data) => {console.log('trouveeeeeeeeeeeeeeee',data)})
        console.log("hello",req.body)
        /*const ayhkeya1 =req.body.ayhkeya1;
        const ayhkeya2=req.body.ayhkeya2;*/

       /* if (!ayhkeya1 || !ayhkeya2) {
          return res.status(400).send({ attribute: "ERROR!"});
        }*/

      return res.status(200).send({ data: "ahla bik Touta !"/* + ayhkeya1 +' '+ ayhkeya2*/ });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal Server Error" });
        
    }
};