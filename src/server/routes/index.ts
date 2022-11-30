import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CidadesController } from './../controllers';



const router = Router();



router.get('/', (req:  Request, res: Response) => {
  return res.send('Olá, DEV!');
});

// Criar
router.get("/cidades",CidadesController.getAllValidation,CidadesController.getAll)

 // Listar apenas um
router.get("/cidades/:id", CidadesController.getByIdValidation,CidadesController.getById)

 // Listar todos
router.post('/cidades',CidadesController.createValidation, CidadesController.create);

// Deletar
router.delete("/cidades:/id", CidadesController.deleteByIdValidation,CidadesController.deleteById)

// Atualizar
router.put("/cidades/:id", CidadesController.UpdateByIdValidation,
CidadesController.updateById)


export { router };
