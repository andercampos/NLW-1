// Servidor 
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./page')

// configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// Inicio e configuração
server.use(express.static("public"))
// configurar arquivos estáticos (css, scripts, imagens)
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-classes", saveClasses)
// Start do servidor 
.listen(5000, console.log("Server is running!"))