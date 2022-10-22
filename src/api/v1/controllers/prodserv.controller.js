import * as ProdServServices from '../services/prodServ.service';
import boom from '@hapi/boom';

//Todos los Productos/Servicios
export const getProdServList = async (req, res, next) => {
    try{
        const prodServList = await ProdServServices.getProdServList();
        if(!prodServList){
            throw boom.notFound('No se encontraron productos/servicios registrados.');
        }else if(prodServList){
            res.status(200).json(prodServList);
        }
    }catch(error){
        next(error);
    }
};

//Solo un producto/servicio
export const getProdServItem = async (req, res, next) => {
    try{
        const{id} = req.params;
        const keyType = req.query.keyType || 'OK';
        const prodServItem = await ProdServServices.getProdServItem(id, keyType);
        if(!prodServItem){
            throw boom.notFound('No se encontraron productos/servicios registrados.');
        }else if(prodServItem){
            res.status(200).json(prodServItem);
        }        
    }catch(error){
        next(error);
    }
};

//API POST (ADD) Producto/Servicio
export const postProdServItem = async (req, res, next) => {
    try {
        const paProdServItem = req.body;
        const newProdServItem = await ProdServServices.postProdServItem(paProdServItem);
        if(!newProdServItem){
            throw boom.badRequest('No se pudo crear el Producto/Servicio');
        }else if(newProdServItem){
            res.status(201).json(newProdServItem);
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};

//API PUT (UPDATE) Producto/Servicio
export const putProdServItem = async (req, res, next) => {
    try {
        const { id } = req.params;
            console.log('JJRO: controller id -> ', id);
        const paProdServItem = req.body;
            console.log('JJRO: controller body -> ', paProdServItem);
        const updateProdServItem = await ProdServServices.putProdServItem(id, paProdServItem);
        if(!updateProdServItem){
            throw boom.badRequest('No se pudo actualizar el Producto/Servicio');
        }else if(updateProdServItem){
            res.status(200).json(updateProdServItem);
        }
    } catch (error) {
        next(error);
    }
};

//API DELETE (DELETE) Producto/Servicio
