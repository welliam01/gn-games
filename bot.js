const Discord = require('discord.js');
const client = new Discord.Client();
 var PREFIX = "G";


 client.on('ready', () => {

      console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
});

   
client.on('message', message => {
    if (message.content == "فكك") {
        var x = ['طيارة', 'اللهم صلي على سيدنا محمد', 'تفكيك', 'تجربة', 'مدرسة', 'معلم' , 'نقاط',
        'كتاب',
        'جدار',
        'القرآن',
        'جميل',
        'لعبة',
        'حيوانات',
        'نمر',
        'القسطنطينية',
        'الجبل',
        'كرسي',
        'دولاب',
        'صحراء',
        'طابعة',
        "الطاقة الكهربائية",
        "جبل كبير جنب جبل صغير",
        "كرسي اصفر",
        "الرياضيات صعبه",
        "بوت تفكيك",
        "ولد ابن ابوه",
        
        ];
        var x2 = ['ط ي ا ر ة', 'ا ل ل ه م ص ل ي ع ل ى س ي د ن ا م ح م د', 'ت ف ك ي ك', 'ت ج ر ب ة', 'م د ر س ة', 'م ع ل م', 'ن ق ا ط',
        'ك ت ا ب',
        'ج د ا ر',
        'ا ل ق ر آ ن',
        'ج م ي ل',
        'ل ع ب ة',
        'ح ي و ا ن ا ت',
        'ن م ر',
        'ا ل ق س ط ن ط ي ن ي ة',
        'ا ل ج ب ل',
        'ك ر س ي',
        'د و ل ا ب',
        'ص ح ر ا ء',
        'ط ا ب ع ة',
        "ا ل ط ا ق ة ا ل ك ه ر ب ا ئ ي ة ",
        "ج ب ل ك ب ي ر ج ن ب ج ب ل ص غ ي ر",
        "ك ر س ي ا ص ف ر",
        "ا ل ر ي ا ض ي ا ت ص ع ب ه",
        "ب و ت ت ف ك ي ك",
        "و ل د ا ب ن ا ب و ه"
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`لديك من الوقت 20 ثآنية لتفكيك هذه الكلمة __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح بالوقت المناسب  `);
        })
        })
    }
})
    
    client.on('message', message => {
    if (message.content == "عواصم") {
        var x = ['ماهي عاصمة السعودية ؟', 
        'ماهي عاصمة أفغانستان ؟',
        'ماهي عاصمة الكويت ؟',
        'ماهي عاصمة أوزباكستان ؟',
        'ماهي عاصمة الإمارات ؟',
        'ماهي عاصمة الأردن ؟',
        'ماهي عاصمة لبنان ؟',
        'ماهي عاصمة الصين ؟',
        'ماهي عاصمة اليمن ؟',
        'ماهي عاصمة سوريا ؟',
        'ماهي عاصمة تايلاند ؟',
        'ماهي عاصمة اليابان ؟',
        'ماهي عاصمة تونس ؟',
        'ماهي عاصمة مصر ؟',
        'ماهي عاصمة الولايات المتحدة الإمريكية ؟',
        "ماهي عاصمة البحرين ؟",
        "ماهي عاصمة فلسطين ؟",
        "ماهي عاصمة ماليزيا ؟",
        "ماهي عاصمة السودان ؟",
        "ماهي عاصمة الجزائر ؟",
        "ماهي عاصمة ليبيا ؟",
        "ماهي عاصمة موريتانيا ؟",
        "ماهي عاصمة مالي ؟",
        "ماهي عاصمة زامبيا ؟",
        "ماهي عاصمة جيبوتي ؟",
        "ماهي عاصمة جزر القمر ؟",
        "ماهي عاصمة روسيا ؟",
        "ماهي عاصمة تركيا ؟",
        "ماهي عاصمة بولندا ؟",
        "ماهي عاصمة النمسا ؟",
        "ماهي عاصمة المملكة المتحدة ؟",
        "ماهي عاصمة إيطاليا ؟",
        "ماهي عاصمة إسبانيا ؟",
        "ماهي عاصمة سويسرا ؟",
        "ماهي عاصمة كوبا ؟",
        "ماهي عاصمة كندا ؟",
        "ماهي عاصمة أستراليا ؟"
        ];
        var x2 = ['الرياض', //1
        'كابول',//2
        'الكويت',//3
        'طشقند',//4
        'أبو ظبي',//5
        'عمان',//6
        'بيروت',//7
        'بكين',//8
        'صنعاء',//9
        'دمشق',//10
        'بانكوك',//11
        'طوكيو',//12
        'تونس',//13
        'القاهره',
        'واشنطن',
        "المنامة",
        "القدس",
        "كوالالمبور",
        "الخرطوم",
        "الجزائر",
        "طرابلس",
        "نواكشوط",
        "باماكو",
        "لوساكا",
        "جيبوتي",
        "موروني",
        "موسكو",
        "أنقرة",
        "وارسو",
        "فيينا",
        "لندن",
        "روما",
        "مدريد",
        "برن",
        "هافانا",
        "أوتاوا",
        "كانبرا"
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` __**${x[x3]}**__
 لديك 20 ثآنية للإجآبة `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح بالوقت المناسب  `);
        })
        })
    }
})
    
        client.on('message', message => {
    if (message.content == "اعلام") {
        var x = ['الإمارات',
        'أفغانستان',
        'الأرجنتين',
        'ألبانيا',
        'أستراليا',
        'البحرين',
        'كندا',
        'الصين',
        'ألمانيا',
        'السعودية',
'السويد',
'تونس',
    'تركيا',
    "إنجلترا",
    "مصر",
    "إسبانيا",
    "فرنسا",
    "غانا",
    "اليونان",
    "العراق",
    "إيطاليا",
    "الأردن",
    "اليابان",
    "النيجر",
    "هولندا",
    "عمان",
    "بولندا",
    "فلسطين",
    "البرتغال",
    "تونس",
"اوزباكستان",
"ويلز",
        ];
        var x2 = ['🇦🇪', 
        '🇦🇫',
        '🇦🇷',
        '🇦🇱',
        '🇦🇺',
        '🇧🇭',
        '🇨🇦',
        '🇨🇳',
        '🇩🇪',
        '🇸🇦',
'🇸🇪',
'🇹🇳',
    '🇹🇷',
    "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "🇪🇬",
    "🇪🇸",
    "🇫🇷",
    "🇬🇭",
    "🇬🇷",
    "🇮🇶",
    "🇮🇹",
    "🇯🇴",
    "🇯🇵",
    "🇳🇪",
    "🇳🇱",
    "🇴🇲",
    "🇵🇱",
    "🇵🇸",
    "🇵🇹",
    "🇹🇳",
    "🇺🇿",
    "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
    
    
    
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` ماهو علم  __**${x[x3]}**__ ؟
    لديك 30 ثآنية للإجآبة `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 30000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح بالوقت المناسب  `);
        })
        })
    }
})

        client.on('message', message => {
    if (message.content == "امثال") {
        var x = ["أذا ذل مولى فهو ...",
"الإتحاد ...",
"الناس سواسية كأسنان ...",
"ما أشبه الليله",
"البعد ...",
"الماء أهون موجود وأعز ...",
"الهزيمة تحل ...",
"العقل ...",
"البطنة تزيل ...",
"اللبيب بالإشارة ...",
"اخطب لابنتك ولا تخطب ...",
"أعز من الولد ولد ...",
"القرد في عين أمه ...",
"الكتاب يقرأ من ...",
"آخر الحياة ...",
];
        var x2 = ['ذليل',
        "قوة",
        "المشط",
        "بالبارحة",
        "جفاء",
        "مفقود",
        "العزيمة",
        "زينة",
        "الفطنة",
        "يفهم",
        "لابنك",
        "الولد",
        "غزال",
        "عنوانه",
        "الموت",
        
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اكمل المثل التآلي :  __**${x[x3]}**__ ؟
    لديك 30 ثآنية للإجآبة `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 30000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح بالوقت المناسب  `);
        })
        })
    }
})

        client.on('message', message => {
    if (message.content == "سؤال") {
        var x = ["ما هي لغة النمسا ؟",
        "ما هي أكبر مدينة من المدن الأوروبية ؟",
        "ما هي شبة جزيرة في شبة جزيرة وتقع بجوارها جزر ؟",
        "ما هي الدولة التي تتكون من عدة جزر تشبه شكل الهلال ؟",
        "ما هي السورة التي ذكر فيها البعوض ؟",
        "ما هو الحيوان الذي يصاب بالحصبة كالإنسان ؟",
        "ما هو أول ما يقضي فيه بين الناس يوم القيامة ؟",
        "ماهو العنصر الذي لو وجد في الحليب لأصبح الحليب‎ ‎غذاء كامل ؟",
        "من الذي أسس المملكة العربية السعودية؟",
        "في أي معركة كان الرسول صلى الله عليه وسلم أول من رمى بالمنجنيق؟",
        "ما هو اسم المفاعل النووي الذي يملكه اليهود في فلسطين المحتله ؟",
        "في أي قارة تقع دولة فلسطين؟",
        "كم دولة عربية عملتها الريال؟",
        "ما هي اللغة الرسمية للبرازيل؟",
];
        var x2 = ["الألمانية",
                "لندن",
        "دولة قطر",
        "جزر القمر",
        "سورة البقرة",
        "القرد",
        "الدماء",
        "الحديد",
        "عبدالعزيز بن سعود",
        "الطائف",
        "ديمونا",
        "اسيا",
        "4",
        "البرتغالية",

        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`   :  __**${x[x3]}**__ 
    لديك 30 ثآنية للإجآبة `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 30000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح بالوقت المناسب  `);
        })
        })
    }
})

        client.on('message', message => {
    if (message.content == "لغز") {
        var x = ["ماهو الشيء الذي يكتب و لا يقرأ ؟",
        "ماهو الشيء الذي يكون اخضر في الارض واسود في السوق واحمــر في البيت ؟",
        "ماهو الشيء الذي كلما زاد نقص ؟",
        "ما هو الشيء الذي لا يمشي إلا بالضرب ؟",
        "ما هو الشيء الذي إذا أخذنا منه إزداد وكبر ؟ ",
        "له أسنان ولا يعض، ما هو ؟",
        "يتحرك دائماً حواليك لكنك لاتراه فما هو ؟ ",
        "ما هو البيت الذي ليس فيه ابواب ولا نوافذ ؟",
        "ما هو الشيء الذي إذا غليته جمد ؟",
        "ما هو الشئ الذي يرفع اثقال ولا يقدر يرفع مسمار ؟",
        "ما هو الشيء الذي يمشي و يقف وليس له أرجـل ؟",
        "ما هو الشيء الذي اسمه على لونه ؟",
        "له أوراق وما هو بنبات، له جلد وما هو بحيوان، وعلم وما هو بإنسان. من هو ؟",
        "ما هو الشيء الذي يقرصك ولا تراه ؟",
        "ما هو الشيء الذى ليس له بداية ولا نهاية ؟",
        "ما هو الشّيء الذي يستطيع المشي بدون أرجل والبكاء بدون أعين؟",
        " ما هو الشّيء الذي يتكلّم بدون لسان ويسمع بدون أذن؟",
        " ما هو الشّيء الذي يتبع الكلب أينما حلّ وآرتحل؟",

];
        var x2 = ["القلم",
        "الشاي",
        "العمر",
        "المسمار",
        "الحفرة",
        "المشط",
        "الهواء",
        "بيت الشعر",
        "البيض",
        "البحر",
        "الساعة",
        "البيضه",
        "الكتاب",
        "الجوع",
        "الدائرة",
        "السحاب",
        "الهاتف",
        "ذيله",
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`   :  __**${x[x3]}**__ 
    لديك 30 ثآنية للإجآبة `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 30000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح بالوقت المناسب  `);
        })
        })
    }
})



client.on("message", async message => {
    if(message.content.startsWith("العاب")) {
        let help = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`**العاب بوت __ 
سؤال
امثال
اعلام
عواصم
فكك

**`);
            message.channel.sendEmbed(help); 
    }
});




const devs = ['440081527909515265','474200581163057153'];
const adminprefix = "L";
client.on('message', message => {
  if (!message.content.startsWith(adminprefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== devs) return;
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/osama_gmt");
	 console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
} 
if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
	  message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}
});





client.login(process.env.BOT_TOKEN);
