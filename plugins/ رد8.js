//*رد بوت الدسوقي 

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^يارزان$/i.test(m.text)) { 
     responses = [ 
 'هيحح شو بدك مني 😩❤‍🔥*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*♥🐥وعليكم السلام*',  
     ]; 
   }else if (/^بخير|بخير الحمد لله $/i.test(m.text)) { 
     responses = [ 
'*دايما يارب 💎🩵*'
     ]; 
 }else if (/^كداب|بارد$/i.test(m.text)) { 
     responses = [ 
'*مظلوم اككيد🤣❤‍🔥*'
     ]; 
   }else if (/^احا$/i.test(m.text)) { 
     responses = [ 
'*بي التيكت بتعها🙂*'
   ]; 
   }else if (/^لو$/i.test(m.text)) { 
     responses = [ 
'*انط عليك العو😁*'
]; 
   }else if (/^خاص|بف$/i.test(m.text)) { 
     responses = [ 
'*عاوز تشقطها ي لاايم🙁*',
'*مش كده طيب😝*',
'*ممكن اخش معاكو🥹*',   ]; 

     }else if (/^هفشخها|هفشخو$/i.test(m.text)) { 
     responses = [ 
       '*شو هاد😭*',  

     ]; 
}else if (/^قلب/i.test(m.text)) { 
     responses = [ 
       '*بوسني🌚❤*',  

     ]; 
   } else if (/^عرص|ي عرص|شرموط|ي شرموط|لبوه|ي لبوه$/i.test(m.text)) { 
     responses = [ 
'*صلي علي النبي ي حب م كده 👳🏻‍♂️*'
     ]; 
     }else if (/^مطور$/i.test(m.text)) { 
     responses = [ 
       '😕المطور مبضون حاليا',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       '🌚♥اكيد',  

     ];
     }else if (/^اه$/i.test(m.text)) { 
     responses = [ 
       '*الشارع الوراه❣️*',  

     ];
     }else if (/^بكرهك$/i.test(m.text)) { 
     responses = [ 
       '*طيب 🐦💔*',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*اهلا♥*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباحو|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباحو اللبن ي لبن♥*',  
     ];
       }else if (/^خايف$/i.test(m.text)) { 
     responses = [ 
       '*يلهوي🥲*',  
     ];
            }else if (/^سكس$/i.test(m.text)) { 
     responses = [ 
       '*عيل شاذ🤨*',  
     ];
            }else if (/^قليل الادب$/i.test(m.text)) { 
     responses = [ 
       '*ونا شاهد😍*',  
     ];
    }else if (/^تنصيب|kiss$/i.test(m.text)) { 
     responses = [ 
        '*لا تنسا ال .*' ,  
     ];
    }else if (/^اسكت$/i.test(m.text)) { 
     responses = [ 
        '*مش بمزاجك بلص اسكت انت ☺️❤️*' ,  
     ];
    }else if (/^هنيك|هتتناك|يبن الشرموطه|يبن ال لبوه$/i.test(m.text)) { 
     responses = [ 
        '*استغفرالله حرام يبني هتخش النار*' ,  
     ];
    }else if (/^ملل$/i.test(m.text)) { 
     responses = [ 
         '*بص انا عارف انك مبضون وانا برضو مبضون و مطوري برضو مبضون بس نعمل ايه هي الدنيا بضان كده ايه الجديد 🙂💔*'  ,  
     ];
    }else if (/^وحشتني|واحشتني$/i.test(m.text)) { 
     responses = [ 
         '*انت اكتر عمتا 🥹💘*'  ,  
     ];
    }else if (/^رزان.$/i.test(m.text)) { 
     responses = [ 
         '*اسكت رزان مبضون خلقه😞*'  ,  
     ];
    }else if (/^حبوني$/i.test(m.text)) { 
     responses = [ 
         '*بحبك عمتا 🥹💗*'  ,  
     ];
     }else if (/^كلموني$/i.test(m.text)) { 
     responses = [ 
         '*تعي بف 🫦❤️‍🔥*'  ,  
     ];
    }else if (/^🥹$/i.test(m.text)) { 
     responses = [ 
         '*تعي في حضني 🥹❣️*'  ,  
     ];
    }else if (/^بموت فيك$/i.test(m.text)) { 
     responses = [ 
         '*بدمنك 🥺❤️*'  ,  
     ];
    }else if (/^بعشقك$/i.test(m.text)) { 
     responses = [ 
         '*قلبي اصلا 🌚❤️*'  ,  
     ];
    }else if (/^بدمنك$/i.test(m.text)) { 
     responses = [ 
         '*ي بختي اصلا 🥺❤️✨*'  ,  
     ];
    }else if (/^كسمك$/i.test(m.text)) { 
     responses = [ 
         '*ربنا يسمحك😒*'  ,  
     ];
    }else if (/^حبوني$/i.test(m.text)) { 
     responses = [ 
         '*بحبك و بموت فيك و بدمنك و بعشقك 🥹❣️*'  ,  
     ];
    }else if (/^رول|ادمن$/i.test(m.text)) { 
     responses = [
         '*لازم وسطه😁*'  ,  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;