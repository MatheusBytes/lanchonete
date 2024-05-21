import type { HttpContext } from '@adonisjs/core/http'
import Ingrediente from '../models/ingrediente.js'

export default class IngredientesController {


    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Ingrediente.query().paginate(page, perPage)
    }


    async show({ params }: HttpContext) {
        return await Ingrediente.query().where('id', params.id).preload('produtos').first()
    }


    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'descricao'])
        return await Ingrediente.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const ingredientes = await Ingrediente.findOrFail(params.id)
        const dados = request.only(['nome', 'descricao'])

        ingredientes.merge(dados)
        return await ingredientes.save()
    }


    async destroy({ params }: HttpContext) {
        const ingredientes = await Ingrediente.findOrFail(params.id)

        await ingredientes.delete()
        return { msg: 'Registro deletado com sucesso', ingredientes }

    }

}