import ProdutoComanda from '#models/produto_comanda'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await ProdutoComanda.createMany([
      {produtoId: 1, comandaId: 6, quantidade: 3},
      {produtoId: 1, comandaId: 8, quantidade: 5},
      {produtoId: 28, comandaId: 7, quantidade: 3},
      {produtoId: 28, comandaId: 1, quantidade: 3},
      {produtoId: 28, comandaId: 2, quantidade: 12},
      {produtoId: 29, comandaId: 2, quantidade: 5},
      {produtoId: 29, comandaId: 5, quantidade: 3},
      {produtoId: 30, comandaId: 4, quantidade: 3},
      {produtoId: 32, comandaId: 4, quantidade: 4},
      {produtoId: 32, comandaId: 3, quantidade: 2},
      {produtoId: 32, comandaId: 5, quantidade: 3}
    ])
  }
}