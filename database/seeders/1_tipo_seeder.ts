import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Tipo from '../../app/models/tipo.js'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    return await Tipo.createMany([
      {nome: 'Bebidas'},
      {nome: 'Hamburger'},
      {nome: 'Sobremesas'},
      {nome: 'Hot Dog'},
      {nome: 'Porções'},
    ])
  }
}