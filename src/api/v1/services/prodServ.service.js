import ProdServ from "../models/ProdServ";
import boom from "@hapi/boom";

//JJRO: GET PRODUCTS AND SERVICES LIST
export const getProdServList = async () => {
    let prodServList;
    try{
        prodServList = await ProdServ.find();
        return(prodServList);
    }catch(error){
        throw boom.internal(error);
    }
};

//JJRO: GET PRODUCT OR SERVICE BY ID
export const getProdServItem = async (id, keyType) =>{
    let prodServItem;
    
    try{
        if(keyType === 'OK'){
            prodServItem = await  ProdServ.findOne({
                IdProdServOK: id,
            });
        }else if(keyType === 'BK'){
            prodServItem = await ProdServ.findOne({
                IdProdServBK: id,
            });
        }
        return(prodServItem);
    }catch(error){
        throw boom.internal(error);
    }
};

//POST (ADD) Productos/Servicios
export const postProdServItem = async (paProdServItem) =>{
    try {
        const newProdServItem = new ProdServ(paProdServItem);
        return await newProdServItem.save();
    } catch (error) {
        throw error;
    }
};

//PUT (MODIFY) Productos/Servicios
export const putProdServItem = async (id, paProdServItem) => {
    try {
        return await ProdServ.findOneAndUpdate({IdProdServOK: id}, paProdServItem, {
            new: true,
        });
    } catch (error) {
        throw boom.badImplementation(error);
    }
};


//DELETE (ELIMINAR) Productos/Servicios
export const deleteProdServItem = async (id, paProdServItem) => {
    try {
        return await ProdServ.findOneAndDelete({IdProdServOK: id}, paProdServItem, {
            new: true,
        });
    } catch (error) {
        throw boom.badImplementation(error);
    }
}