//getSuraByID

const db=require('../models')
const Sura=db.suras;
const Qareea=db.qareea;
const SuraURL=db.surasurl;
// getAll Qorraa


exports.getAllSuras = async (req, res) => {
    try {
        Sura.findAll()
          .then((data) => {
         if (!data){
            return res.status(400).send({ message: "Sura not Found!"});
         }
         else {
          /* const allURL=data.map( item=>{
               const s=  Sura.findOne({
                    where:{
                        id :1
                    }
                })*/
               /* return {
                    'url':item.url,
                    'surahName':s.name,
                    'sura_id':s.sura_id,
                    'qaree_id':item.qaree_id,
                    

                }*/
              /*  console.log("eijoiejoijoijijijjjjjjjj",s)
            return s
            
            
            })*/
            return res.status(200).send({data:data});
         }})
     
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal Server Error" });
        
    }
};


exports.getSuraURLs = async (req, res) => {
    try {
        SuraURL.findAll()
          .then((data) => {
         if (!data){
            return res.status(400).send({ message: "Sura not Found!"});
         }
         else {
          /* const allURL=data.map( item=>{
               const s=  Sura.findOne({
                    where:{
                        id :1
                    }
                })*/
               /* return {
                    'url':item.url,
                    'surahName':s.name,
                    'sura_id':s.sura_id,
                    'qaree_id':item.qaree_id,
                    

                }*/
              /*  console.log("eijoiejoijoijijijjjjjjjj",s)
            return s
            
            
            })*/
            return res.status(200).send({data:data});
         }})
     
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal Server Error" });
        
    }
};

exports.getURLBySura = async (req, res) => {
    try {
        const id=parseInt(req.query.id);
        console.log('hhhhhhhhhhhhhhhhhhh',id)
        SuraURL.findOne({where:{sura_id:id}})
          .then((data) => {
         if (!data){
            return res.status(400).send({ message: "Sura not Found!"});
         }
         else {
          /* const allURL=data.map( item=>{
               const s=  Sura.findOne({
                    where:{
                        id :1
                    }
                })*/
               /* return {
                    'url':item.url,
                    'surahName':s.name,
                    'sura_id':s.sura_id,
                    'qaree_id':item.qaree_id,
                    

                }*/
              /*  console.log("eijoiejoijoijijijjjjjjjj",s)
            return s
            
            
            })*/
            return res.status(200).send({data:data});
         }})
     
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal Server Error" });
        
    }
};





exports.getSuraByID= async (req, res) => {
    try {
        const id=parseInt(req.query.id);
        Sura.findOne({where:{id:id}})
          .then((data) => {
         if (!data){
            return res.status(400).send({ message: "Sura not Found!"});
         }
         else {
            return res.status(200).send({ data:data});
         }})
     
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal Server Error" });
        
    }
};
