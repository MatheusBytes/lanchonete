import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Ingrediente from '../../app/models/ingrediente.js'

export default class extends BaseSeeder {
  async run() {
    await Ingrediente.createMany([
      { id: 1, nome: "Pão com gergelim", descricao: "Pão caseiro feito em casa" },
      { id: 2, nome: "hamburger picanha", descricao: "" },
      { id: 3, nome: "alface", descricao: "" },
      { id: 4, nome: "maionese" },
      { id: 5, nome: "Bacon" },
    ])
  }
}