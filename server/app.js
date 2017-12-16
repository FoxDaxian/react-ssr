import Koa from 'koa'
import Router from 'koa-router'
import path from 'path'
import views from 'koa-views'
import Static from 'koa-static'

// view部分
import React from 'react'
import ReactDOM from 'react-dom/server'
import Index from '../pages/views/index.js'

const app = new Koa()
const router = new Router()

app.use(Static(
  path.join( __dirname, '../pages/static/')
))

app.use(views(path.resolve(__dirname, '../views/'), {
  extension: 'ejs'
}))

const root = ReactDOM.renderToString(React.createFactory(Index)())

// 相当于是吧html代码输入带模板标签内，然后script引入的方法和一些JS东西
router.get('/', async ctx => {
	await ctx.render('index', {
	    title: '测试',
	    root
	  })
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
	console.log('listening....')
})
	