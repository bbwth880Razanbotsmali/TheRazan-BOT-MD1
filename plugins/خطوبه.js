import fetch from 'node-fetch';

let toM = a => '@' + a.split('@')[0];

async function handler(m, { groupMetadata }) {
    // لن يتم التحقق من الجواهر ولن يتم خصم أي شيء

    // قم بإرسال رسالة تأكيد الجريمة
    let ps = groupMetadata.participants.map(v => v.id);
    let a = ps[Math.floor(Math.random() * ps.length)];
    let b;
    do {
        b = ps[Math.floor(Math.random() * ps.length)];
    } while (b === a);

    // رابط الصورة الذي تريده
    const fgytSrdf = 'https://qu.ax/qZvGO.jpg';

    m.reply(`*😇 اعــلان خــطــوبــه 😇*
*🌚 ╎الـخــاطــب : ${toM(a)}*
*👀 ╎الــمـخـطــوبــه : ${toM(b)}*
*متنسوش تعزمونا علي الفرح يلا الف مبروك*
> الأمر للمزاح فقط`, null, {
        mentions: [a, b],
        url: 'https://qu.ax/qZvGO.jpg' // تغيير imageUrl إلى fgytSrdf
    });
}

handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['اخطب', 'خطوبه'];
handler.group = true;

export default handler;