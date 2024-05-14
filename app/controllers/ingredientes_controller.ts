 import type { HttpContext } from '@adonisjs/core/http'
import Ingrediente from '../models/ingrediente.js'

export default class IngredientesController {

    async index({request}: HttpContext){
        const page = request.input('page',1 )
        const perPage = request.input('perPage',10 )

        return await Ingrediente.query().paginate(page,perPage)
    }

    
}