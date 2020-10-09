const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete']) //api rest
Todo.updateOptions({ new: true, runValidators: true }) //quando atualiza no mongo o update devolve o dado atualizado (new), depois ele valida as atualizações (runValidators)

module.exports = Todo

