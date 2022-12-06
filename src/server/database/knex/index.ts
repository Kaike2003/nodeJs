import knex from "knex"
import { development,  production, test } from "./Environment"


const getEnvironment = ()=>{

switch (process.env.Node_env) {
    case "production": return production 
    case "test": return test 
    default: return development
}

}


export const Knex = knex(getEnvironment())