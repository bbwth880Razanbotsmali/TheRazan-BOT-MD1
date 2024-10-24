let handler = async(m, { isOwner, groupMetadata, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `✨🌟❐ 𝑅𝑆𝐴𝐿𝐴𝑇𝐾 : ${pesan} 🌟✨`
let teks = `*🌟🌟🌟┌───⊷﹝المنشن⊰⚜⊱الجماعي﹞+⊷🌟🌟🌟*\n`
teks += `🎀❏ جروب : *${groupMetadata.subject}* 🎀\n`
teks += `💫${oi}💫\n`
teks += `❏ 👥 الاعضاء 👥\n`

for (let mem of participants) {
teks += `⚡┃⊹ @${mem.id.split('@')[0]} ⚡\n`
}

teks += `🎇*𝑅𝐴𝑍𝐴𝑁﹝⚡﹞𝐵𝑂َ𝑇*🎇\n`
teks += `*🌠└──────────────────⊷🌠*`

conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|منشن|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler