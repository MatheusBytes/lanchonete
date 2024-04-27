/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import ProdutosController from '../app/controllers/produtos_controller.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

// router.get('/produtos', async () => {
//   return {
//     nome: 'pizza',
//   }
// })

router.resource('/produtos',ProdutosController).apiOnly()
