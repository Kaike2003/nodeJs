import { Request, Response } from "express";
import * as yup from "yup"
import { StatusCodes } from "http-status-codes";
import { validation } from "../../shared/middleware";

type IParamsProps = {
    id?: number
}

type IbodyProps = {
    nome: string
}

export const UpdateByIdValidation = validation((getSchema)=>({
    body: getSchema<IbodyProps>(yup.object().shape({
        nome: yup.string().required().min(3)
    }))
    ,
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0)
    }))
}))

export const updateById = async (req: Request<IParamsProps, {}, IbodyProps>, res: Response)=>{
    console.log(req.body)
    console.log(req.params)


    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado!")
}