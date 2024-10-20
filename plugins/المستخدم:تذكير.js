const handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*❗️ الرجاء كتابة تذكيرك!*\n*مثال:*\n*${usedPrefix + command} 🌟 اجتماع الساعة 5 مساءً*`;

    const reminderMessage = `🌟 ━━━━━━━━ *تذكير* ━━━━━━━━ 🌟\n\n✨ *التذكير:* ${text}\n\n📅 *تاريخ التذكير:* ${new Date().toLocaleDateString()}\n🕒 *وقت التذكير:* ${new Date().toLocaleTimeString()}\n\n💖 ━━━━━━━━ *من قبل:* عاشق التحدي ━━━━━━━━ 💖`;

    // إرسال التذكير إلى المجموعة
    conn.reply(m.chat, reminderMessage, m);
};

handler.command = /^(تذكير|ذكرني)$/i; // الأمر الذي يستخدم لإرسال التذكير
handler.group = true; // يعمل فقط في المجموعات
export default handler;