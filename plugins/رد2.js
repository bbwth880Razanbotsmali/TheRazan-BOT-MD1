let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = '*مــنــور يـا قــلــب رزان🌚💔: لــي الـاوامــر اكــتــب (.اوامر) 😇*';
await conn.sendMessage(m.chat, { react: { text: '😇', key: m.key } })
    conn.sendFile(m.chat, 'https://qu.ax/pCuyN.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^بوت$/i;
handler.command = new RegExp;

export default handler;
