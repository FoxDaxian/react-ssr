import test from './test.js'
console.log(test)
const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
	console.log('1')
	await next()
	console.log(2)
})

app.use(async ctx => {
	await new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve()
		}, 2000)
	})
	ctx.body = 'Hello World'
})

app.listen(3000, () => {
	console.log('listening....')
})
	