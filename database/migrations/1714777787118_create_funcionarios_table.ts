import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'funcionarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      // table.string('nome',45).notNullable().unique()
      // table.decimal('cpf',45).notNullable().unique()
      // table.string('endereco',45).notNullable().unique()
      // table.string('sexo',45).notNullable().unique()
      // table.string('telefone',45).notNullable().unique()
      // // table.string('cargo_Id',45).notNullable().unique()
      // table.integer('cargo_id').unsigned().references('id').inTable('cargos')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}