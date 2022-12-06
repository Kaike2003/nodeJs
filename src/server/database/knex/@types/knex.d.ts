import ICidade from "../../models/Cidade";


    declare module "knex/types/cidades"{
        interface Tables{
          cidade: ICidade
           // pessoa: IPessoa
           // usuario: IUsuario

        }
      }