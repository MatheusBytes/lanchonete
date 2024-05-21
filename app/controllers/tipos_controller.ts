import type { HttpContext } from '@adonisjs/core/http'

import Tipo from "../models/tipo.js"

export default class TiposController {

    async index({request}: HttpContext) {
        const page = request.input('page',1 )
        const perPage = request.input('perPage',10 )

        return await Tipo.query().preload('produtos').paginate(page,perPage)
    }


    async show({ params }: HttpContext) {


        return await Tipo.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['nome'])


        return await Tipo.create(dados)
    }


    async update({ params,request }: HttpContext) {
        const produto = await  Tipo.findOrFail(params.id)
        const dados = request.only([])

        produto.merge(dados) 
        return await produto.save()

    }

    async destroy({ params }: HttpContext) {
        const produto = await  Tipo.findOrFail(params.id)

        await produto.delete()
        return {msg: 'registro deletado com sucesso',produto}

        // try {
        //     return {msg: 'registro deletado com sucesso',produto}
        // } catch (error) {
        //     return {msg :error}
        // }
    }

}