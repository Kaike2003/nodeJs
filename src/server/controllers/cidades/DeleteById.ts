import { Request, Response } from "express";
import * as yup from"yup"
import { StatusCodes } from "http-status-codes";
import { validation } from "../../shared/middleware";


type IParamsProps = {
    id?: number
}

export const deleteByIdValidation = validation((getSchema)=>({
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0)
    }))
}))

export const deleteById = async (req: Request, res: Response)=>{
    console.log(req.params)


    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado!")
}