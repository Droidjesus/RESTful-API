//Commerce
import {Router} from 'express';
import * as prodServController from '../controllers/prodserv.controller';
const router = Router();

router.get('/', prodServController.getProdServList);

router.post('/', prodServController.postProdServItem);

router.put('/:id', prodServController.putProdServItem);

router.delete('/:id', prodServController.deleteProdServItem);

router.get('/:id', prodServController.getProdServItem);
export default router;