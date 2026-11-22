import 'dotenv/config'
import { app } from './app'
import { sequelize } from './config/database'
import { User } from './modules/users/user.model'

const port = Number(process.env.PORT ?? 3000)

await sequelize.authenticate()
await User.sync()

app.listen(port, () => {
	console.log(`Server started on port ${port}`)
})
