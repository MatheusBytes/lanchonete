import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Produto from '../../app/models/produto.js'

export default class extends BaseSeeder {
  async run() {


    return await Produto.createMany([
        {nome: "coca-cola", preco: 2, tamanho: "300ml",tipoId: 1 },
        {nome: "guarana", preco: 8, tamanho: "2L",tipoId: 1 },
        {nome: "fanta", preco: 7.5, tamanho: "3L",tipoId: 1 },
        {nome: "pepsi", preco: 6, tamanho: "1L",tipoId: 1  },
        {nome: "pizza", preco: 7.6, tamanho: "1L",tipoId: 1  },
        {nome: "crepe", preco: 4, tamanho: "1L",tipoId: 1  },
        {nome: "hot-dog", preco: 9, tamanho: "300g",tipoId: 1  },
        {nome: "carne", preco: 30, tamanho: "1kg",tipoId: 1  },
        {nome: "bisteca", preco: 20, tamanho: "1kg",tipoId: 1  },
        {nome: "sushi", preco: 20, tamanho: "porção",tipoId: 1  },
        {nome: "frango", preco: 10, tamanho: "porção",tipoId: 1  },
        {nome: "sorvete", preco: 9.5, tamanho: "porção",tipoId: 1  },
        {nome: "hambúrguer", preco: 12.5, tamanho: "porção",tipoId: 1  },
        {nome: "lasanha", preco: 10, tamanho: "porção",tipoId: 1  },
    ])
  }
}