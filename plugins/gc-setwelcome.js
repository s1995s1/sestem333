let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('*[❗] ПРИВЕТСТВИЕ ДЛЯ ЭТОЙ ГРУППЫ ПРОПИСАНО*')
} else throw `*[❗] ВВЕДИТЕ ПРИВЕТСТВЕННОЕ СООБЩЕНИЕ, КОТОРОЕ ВЫ ХОТИТЕ. ИСПОЛЬЗУЯ:*\n*-@user (упоминание)*\n* - @group (название группы)*\n* - @desc (описание группы)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['приветствие'] 
handler.admin = true
export default handler
