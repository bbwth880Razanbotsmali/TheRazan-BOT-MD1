const dir = [
'https://telegra.ph/file/6f129ef1bead61c3fd13a.jpg',
'https://telegra.ph/file/07dbbed3e1cd700f8133f.jpg',
'https://telegra.ph/file/5b8ac02db652fdce19d40.jpg',
'https://telegra.ph/file/948f12541e2753ed9c934.jpg',
'https://telegra.ph/file/b8a6a1f522ab8d6db3db1.jpg',
'https://telegra.ph/file/75eb22137d1683b85efad.jpg',
'https://telegra.ph/file/f0cb8c04f0c55ee581e17.jpg',
'https://telegra.ph/file/36e167b9121abcf4c7272.jpg',
'https://telegra.ph/file/0e7b904220ba3e5a84a27.jpg',
'https://telegra.ph/file/25d05d40b7c461642e0da.jpg',
'https://telegra.ph/file/3ab65d4cea65eaacc032e.jpg',
'https://telegra.ph/file/8deb6af72ce089d06ba7f.jpg',
'https://telegra.ph/file/9a91430eafd03230cc6ed.jpg',
'https://telegra.ph/file/ea29ed8256c85c8087501.jpg',
'https://telegra.ph/file/15e8e6df535cd570bb3fd.jpg',
'https://telegra.ph/file/d9d60531aa546ec9b2612.jpg',
'https://telegra.ph/file/35cb25a4907ff89552682.jpg',
'https://telegra.ph/file/3dba87e4a064ac6178718.jpg',
'https://telegra.ph/file/360dab85b3d1db499f892.jpg',
'https://telegra.ph/file/2aa6503637f096f3f0e16.jpg',
'https://telegra.ph/file/61485c70458b9144be6d2.jpg',
'https://telegra.ph/file/a4952bf7b12090ec374db.jpg',
'https://telegra.ph/file/ccc7b944f708696dc3b6b.jpg',
'https://telegra.ph/file/dd0983560847d77df9759.jpg',
'https://telegra.ph/file/c32161a800e2b307bc91c.jpg',
'https://telegra.ph/file/d2f83ba19daf298857cf9.jpg',
'https://telegra.ph/file/d4d07b778cef376b6150e.jpg',
'https://telegra.ph/file/03bbe6e3379af6e677932.jpg',
'https://telegra.ph/file/e877b3afe549356d46498.jpg',
'https://telegra.ph/file/3f3e529c89bca4aa23d7b.jpg',
'https://telegra.ph/file/89f639f13c817a904a9be.jpg',
'https://telegra.ph/file/3c376806046176025b016.jpg',
'https://telegra.ph/file/8497a1dd830ed6d491185.jpg',
'https://telegra.ph/file/c2fea82fe78d93a7a552b.jpg',
'https://telegra.ph/file/e5da68ba89581d2806466.jpg',
'https://telegra.ph/file/d1bad269eb736096a9b38.jpg',
'https://telegra.ph/file/62e3a0fcd2d58fbe17825.jpg',
'https://telegra.ph/file/6ea52ed9f04ab71b96d49.jpg',
'https://telegra.ph/file/020d349fd1e58bba93e4f.jpg',
'https://telegra.ph/file/b77b64efc8ffc80b09784.jpg',
'https://telegra.ph/file/fd865fbf7903fd4704615.jpg',
'https://telegra.ph/file/70b5abef35024f9a8da18.jpg',
'https://telegra.ph/file/cc7709dcee4dbc93aeb42.jpg',
'https://telegra.ph/file/cc7709dcee4dbc93aeb42.jpg',
'https://telegra.ph/file/d4ecc65d71751ac771b6b.jpg',
'https://telegra.ph/file/cc52f0e21605499336082.jpg',
'https://telegra.ph/file/9b829f47b7845cf0e7bfd.jpg',
'https://telegra.ph/file/bba516b0ead1e9e22d870.jpg',
'https://telegra.ph/file/fa19fcfd2c88d163547ac.jpg',
'https://telegra.ph/file/7d4e6287dcf07a3287b95.jpg',
'https://telegra.ph/file/aefb175abaa1c846096fd.jpg',
'https://telegra.ph/file/cd39c14fe0f780fdd267d.jpg',
'https://telegra.ph/file/b73bac2b0115b2e4b7989.jpg',
'https://telegra.ph/file/5b9e09e1daf45fa4c003a.jpg',
'https://telegra.ph/file/73f431e9fe4b364b782fc.jpg',
'https://telegra.ph/file/1d6ecd36f85c7ebc21653.jpg',
'https://telegra.ph/file/1c646add60f4f5f9eada8.jpg',
'https://telegra.ph/file/5b29b91428f1a96bea220.jpg',
'https://telegra.ph/file/530b870ebd93a719fa949.jpg',
'https://telegra.ph/file/622141f51389f0c3f0854.jpg',
'https://telegra.ph/file/a81af837dce7d0e83125e.jpg',
'https://telegra.ph/file/2e6b80666ff9919780d1f.jpg',
'https://telegra.ph/file/2fb2b4f0458873ff62fdf.jpg',
'https://telegra.ph/file/7d22cdb4cb4e04028291b.jpg',
'https://telegra.ph/file/4eb8995da07fd3a469e4e.jpg',
'https://telegra.ph/file/2f435607abcf411838dc0.jpg',
'https://telegra.ph/file/94d8535050d6f13500e9a.jpg',
'https://telegra.ph/file/f55cbfa484aca8596ae17.jpg',
'https://telegra.ph/file/28a3f987d703dbd979066.jpg',
'https://telegra.ph/file/0e281e8146475cb757168.jpg',
'https://telegra.ph/file/915c761d25b0798e504c1.jpg',
'https://telegra.ph/file/8a652f0af102947be72ed.jpg',
'https://telegra.ph/file/4e85b685daa95346898c5.jpg',
'https://telegra.ph/file/2ca69ebc7831fac4cc7f1.jpg',
'https://telegra.ph/file/fcf341df95e1f0af0ffff.jpg',
'https://telegra.ph/file/bdc17aea743246f671756.jpg',
'https://telegra.ph/file/6c3b56be6fa67f78965f7.jpg',
'https://telegra.ph/file/3f20d9dbd90d9ef6e1f2c.jpg',
'https://telegra.ph/file/95e647f6a660d37db530b.jpg',
'https://telegra.ph/file/af1052a5d6af1ef1480a2.jpg',
'https://telegra.ph/file/378efa21d8108cd523ca7.jpg',
'https://telegra.ph/file/31c21708ba59a62957ea6.jpg',
'https://telegra.ph/file/64d6c71d418361e957d0a.jpg',
'https://telegra.ph/file/befe01a310c3a83731569.jpg',
'https://telegra.ph/file/27f646bd99f79ac21c288.jpg',

];

let handler = async (m, { conn, command, usedPrefix }) => {

const fakecontact = { 
        'key': { 
            'participants': '0@s.whatsapp.net', 
            'remoteJid': 'status@broadcast', 
            'fromMe': false, 
            'id': '𝐒𝐇𝐀𝐖𝐀𝐙𝐀-𝐁𝐎𝐓' 
        }, 
        'message': { 
            'contactMessage': { 
                'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
            } 
        }, 
        'participant': '0@s.whatsapp.net' 
    };

        
let img = dir[Math.floor(Math.random() * dir.length)];

conn.sendButton(m.chat, 'تفضل الخلفية 🧸❤️', 𝑅𝐴𝑍𝐴𝑁-𝐵𝑂َ𝑇', img, [['التالـي',`${usedPrefix + command}`]], null, null, fakecontact);

//conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m);
  
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['خلفيات'] 

export default handler