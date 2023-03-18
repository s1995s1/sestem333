const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
let name = await conn.getName(m.sender)
let str = `
*ミ💖 ПРИВЕТ _${name}_ 💖彡*

*<МЕНЮ АУДИО/>*

° ඬ⃟🔊 _Выходи_
° ඬ⃟🔊 _Добро пожаловать_
° ඬ⃟🔊 _Ддосвидания_
° ඬ⃟🔊 _Доброе утро_
° ඬ⃟🔊 _Девочка_
° ඬ⃟🔊 _Пока_
° ඬ⃟🔊 _Заебал_
° ඬ⃟🔊 _Иди на хуй_
° ඬ⃟🔊 _Иди сюда_ 
° ඬ⃟🔊 _Как дела_
° ඬ⃟🔊 _Личка_
° ඬ⃟🔊 _Личкоеб_
° ඬ⃟🔊 _Люблю_
° ඬ⃟🔊 _Отвали_
° ඬ⃟🔊 _Правила_
° ඬ⃟🔊 _Ржу_
° ඬ⃟🔊 _Секс_
° ඬ⃟🔊 _Спокойной ночи_
° ඬ⃟🔊 _Суки_
° ඬ⃟🔊 _Ты кто_
° ඬ⃟🔊 _Чистка_
° ඬ⃟🔊 _Фу свои_
° ඬ⃟🔊 _Ха ха_
° ඬ⃟🔊 _Это что_
° ඬ⃟🔊 _Я пошла_
° ඬ⃟🔊 _Я худею_
° ඬ⃟🔊 _Ага_`

.trim()

conn.sendHydrated(m.chat, str, wm, pp, '', '', null, null, [
['МЕНЮ', '/menu']
], m)
}}
handler.help = ['cajafuerte']
handler.tags = ['owner']
handler.command = /^(меню2)$/i
handler.rowner = true
handler.fail = null
export default handler