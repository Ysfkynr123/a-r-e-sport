const Discord = require("discord.js");
const client = new Discord.Client();
const Kurucu = "349122665782706176"

var fortunes = [

("https://404store.com/2017/05/01/turk-bayragi-gokturkce-2-kapak.jpg"),
("https://cdn.kuaza.com/wp-content/uploads/2015/09/wallpapers-turkey-turk-bayragi-turkish-flag-ulusal-ekim-ataturk-tc-hd-best-1920x1080-e1441901539593.jpg"),
("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpk2dcJ40TmLyoPVUV7kYUh2v_2E7txehc55_moc2cJNAh36BKdA"),
("http://4.bp.blogspot.com/-30Zvntylumg/TzivWncEZDI/AAAAAAAAA d8/GOLLS1g44UI/s1600/turk-bayragi-masaustu-4.jpg"),
("https://s.istiklal.com.tr/files/2017/9/20/333385/333385_0.jpg"),
("https://i.pinimg.com/236x/b6/8e/44/b68e442ce6ba7d3554d8e3fee5701331.jpg"),
("https://img.webme.com/pic/s/semihgokpinar/19203521.jpg"),
("https://i.ytimg.com/vi/rijQleUS6Fs/maxresdefault.jpg"),
("https://i.ytimg.com/vi/Kt35FmK0ET0/maxresdefault.jpg"),
("https://attilakoksal.files.wordpress.com/2012/12/bozkurt_turk_bayrak.jpg"),
("https://data.pixiz.com/output/user/frame/preview/400x400/1/8/0/8/2668081_b35c1.jpg"),
("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzEMbNUVl1nazaeGNfcRFXcEbvYWdh2WYM1glAH-w-svKzKwg"),
("http://i.sabah.com.tr/sb/galeri/turkiye/en-guzel-turk-bayragi-resimleri-2016-turk-bayragi-resimleri/13.jpg"),
("https://i.hizliresim.com/zBRDj6.jpg")
];
function play(connection, msg) {
  var servers = servers[msg.guild.id];
  server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

  server.queue.shift();

  server.dispatcher.on("end", function() {
    if(server.queue[0]) play(connection, message);
    else connection.disconnect();
  });
}
client.on('ready', () => {
  console.log(`Bot "${client.user.tag}" Adı İle Giriş Yaptı!`);
  console.log("        Bot Sahibi= Yusuf")
  client.user.setGame("!Yardım")

  client.on('guildDelete', guild => {
    console.log(`Hey Yusuf Ben ${member.guild.name} Adlı Serverden Çıktım Çıkış Tarihim = ${new Date()}`);
 });
 client.on("guildCreate", guild => {
  //const çenil = guild.channels.find('name', 'general');
  //const anan = guild.channels.find("name", "sohbet");
      let channel = guild.channels.find("name", "general");
      let anan = guild.channels.find("name", "sohbet");
      let li = guild.channels.find("name", "lei-lia-li");
    //if(!anan) return;
    //anan.send("@everyone Merhaba Ben Yusuf Adlı Kişi Tarafından Kodlandım  \n Bende 1 Den Çok Komut Var! \n !yardım , !botbilgi ")
    anan.send("@everyone \n Merhaba Ben **Yusuf** Adlı Kişi Tarafından Kodlandım  \n Bende **10 Dan Çok** Komut Var! \n **!yardım** , **!botbilgi**")
    //channel.send("@everyone Merhaba Ben Yusuf Adlı Kişi Tarafından Kodlandım  \n Bende 1 Den Çok Komut Var! \n !yardım , !botbilgi")

    //Ben Yusuf Adlı Kişi Tarafından Kodlandım  \n Bende 1 Den Çok Komut Var! \n !yardım , !botbilgi
 });
 //client.on("messageDelete", Message => {
   //let anan = member.guild.channels.find('name', 'mod-log');
   //if(!anan) return; message.reply("Bir Kullanıcı Mesaj Sildim Fakat Bunu Gondermem İcin mod-log Yazı Kanalı Gerekiyor");

   //channel.sendMessage(`**${messageDelete.author}** , **${messageDelete.channel}** Yazı Kanalında **${message.author}** Adlı Kişinin Mesajını Sildi Silinen Mesaj : **${message.author.lastMessage}**`);
 //});
  //------------------------
 client.on("guildMemberAdd", function(member) {
 const channel = member.guild.channels.find('name', 'mod-log');
  // Do nothing if the channel wasn't found on this server

  if (!channel) return;  member.addRole(member.guild.roles.find("name", "Kayıtlı Üye"));
   //Send the message, mentioning the memb  er
  channel.send(`**${member.guild.name}** Sunucusuna Yeni Uye Katıldı **${member}**`);
});
//------------------------------------------
client.on("guildBanRemove", (guild, user ) => {
  let mlg = guild.channels.find("name", "mod-log");
  if(!mlg) return; channel.send("Lütfen mod-log Kanalı Acın");

  mlg.send(`Banı Kaldırılan Kullanıcı İsmi ${user.username} \n ${new Date ()}`);
});
  //client.on('guildMemberAdd', guildMember => {

    //  db.fetchObject(`autoRole_${guildMember.guild.id}`).then(i => {
      //  if(!i.text || i.text.toLowerCase() === "none") return;
       // else{
         // try{
             // guildMember.addRole(guildMember.guild.roles.find("name", i.text))
         //   } catch(e) {
           //   console.log("Sunucuda Yetki Secilmedi!")
           // }
        //  }
    //  })
 // });
 client.on("guildMemberAdd", function(member) {
  const channel = member.guild.channels.find('name', 'sohbet');
  // Do nothing if the channel wasn't found on this server

  if (!channel) return;
 member.addRole(member.guild.roles.find("name", "Kayıtlı Üye"));
  // Send the message, mentioning the member
  channel.send(`${member.guild.name} Sunucusuna Hoşgeldin **${member}** Kayıtlı Üye Rolu Verildi! #kurallar ı Okumayı Unutma!! İyi Günler :slight_smile:`);
});
  client.on("guildBanRemove", function(guild) {
    let mlg = member.guild.channels.find("name", "mod-log")

    mlg.send(`${user.username}, Adlı Kişi Atıldı`)

  });
  client.on("guildMemberAdd", function(member) {
    member.addRole(member.guild.roles.find("name", "Kayıtlı Üye"));
  });
client.on("guildMemberRemove", function(member) {
  let mlg = member.guild.channels.find('name', 'mod-log');
  // Do nothing if the channel wasn't found on this server

  if (!mlg) return;
  if(!mlg) msg.channel.send("mod-log Kanalı Bulunmadı!")
  mlg.send(`**${member.guild.name}** Sunucusunda **${member.user.username}** Adlı Kişi Sunucudan Cıkmış Bulunmaktadır!`);
});
client.on("roleUpdate", function() {
  let oda = member.guild.channel.find("name", "mod-log")
  if(!oda) return; message.channel.send("Yeni Rol Eklendi Fakat mod-log adlı Yazı Kanalı YOK!")


});
//client.on("guildMemberRemove", function(member) {
  //let bUser = message.guild.member(message.mentions.users.first () || message.guild.members.get(args[0]));
  //if(!bUser) return message.channel.send("Kullanıcı Bulunamadı!")
  //let bReason = args.join(" ").slice(22);
  //if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Bu Uyeyi Atmaya İznin YOK")

  //let kEmbed = new Discord.RichEmbed()
   //.setDescription("Atılan Kullanıcı!")
   //.setColor("#e56b00")
   //.addField("Kicklenen Kullanıcı", `${bUser} Kicklenen Kullanıcı ID Si ${bUser.id}`)
   //.addField("Kickleyen Kişi", `<@${bUser.author}> Kickeleyen Kişi ID Si ${bUser.author.id}`)
   //.addField("Kickleme Zamanı", message.createdAt)
   //.addField("Kicklenme Nedeni", bReason);

   //let kickChannel = message.guild.channels.find(`name`, `mod-log`)
   //if(!kickChannel) return message.channel.send("mod-log Yazı Kanalı Bulunmadı")
   //message.channel.send(`${bUser.author}, ${bUser} Adlı Kişiyi Başarıyla Sunucudan Attı!`)
   //message.channel.send(``)

   //message.guild.member(kUser).kick(kReason)
   //kickChannel.send(kEmbed);
   //return;
//});
client.on("guildBanAdd", function(member) {
  const channel = member.guild.channels.find('name', 'mod-log');
  // Do nothing if the channel wasn't found on this server

  if (!channel) return;
  if(!channel) message.channel.send("mod-log Kanalı Bulunmadı!")
  // Send the message, mentioning the member
  channel.send(`**AIR eSport** Sunucusunda **${member}** Adlı Kişi Sunucudan "**BANLANMIŞ**" Bulunmaktadır!!`);
});

});
var servers = {};
var prefix = "!"
client.on('message', msg => {
  const args = msg.content.slice(prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();

    if(command ==="sil") {
      let cont = msg.content.slice(prefix.length).split(" ");
      let args = cont.slice(1);

      async function purge() {
        let fetched = await msg.channel.fetchMessages({limit: args[0]});

      if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send(`:no_entry: Geçersiz İşlem! \n Mesaj Silme Yetkin YOK **${msg.author.username}**`)
        if (isNaN(args[0])) {
          msg.channel.send("Lutfen Bir Kelime Belirtin! \n Örnek = !temizle `2`");
          return;
        }
      msg.channel.bulkDelete(fetched)
      .catch(error =>  msg.channel.send(`Hata: ${error}`));

      //https://www.youtube.com/watch?v=Zpxyio10Kj0
      msg.channel.bulkDelete(args[0]).then(() => {
        msg.channel.send(`:white_check_mark: Başarılı İşlem ! \n :gear: **${args[0]}** Mesaj Silindi! Silen Kişi = **${msg.author.username}**`)
      });
//\n
    }
    purge();

  }
  //if(command === "yardım") {
  //msg.channel.sendMessage(`**Selam, ben ${bot.user.username}!** Şuanda görmekte olduğunuz kısım benim bütün komutlarımı göstermektedir.
//**Bilgi Komutları**
//\`\`\`fix
//!yardım - Botun bütün komutlarını size gösterir.
//!sunucubilgi - Sunucu hakkkında detaylı bilgi verir.
//!botbilgi - Bot hakkında bilgi verir.
//!profil - Etiketlenen Kişinin Profil Bilgilerini Gösterir.
//\`\`\`

//**Eğlence Komutları**
//\`\`\`fix
//!yaz - Yazılan Mesajın Aynısını Yazar.
//!resim  - Etiketlenen Kişinin Profil Resmini Gösterir.
//\`\`\`

//**Moderatör Komutları**
//\`\`\`fix
//!ban - Kişiyi Sunucudan Geçerli Bir Sebepten Dolayı Yasaklar/Banlar.
//!kick - Kişiyi Sunucudan Geçerli Bir Sebepten Dolayı Atar/kickler.
//!report - Kişiyi Report Eder.
//!sus - Susturma Engeli Koyar.
//!konuş - Susturma Engelini Kaldırır.
//!temizle - Belirtilen Sayı Kadar Mesaj Siler.
//\`\`\` `)
//  }

  if(command === "temizle") {
      let cont = msg.content.slice(prefix.length).split(" ");
      let args = cont.slice(1);
      let sil = msg.guild.member(msg.mentions.users.first () || msg.guild.members.get(args[0]));

      async function purge() {
        let fetched = await msg.channel.fetchMessages({limit: args[0]});

      if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send(`:no_entry: Geçersiz İşlem! \n Mesaj Silme Yetkin YOK **${msg.author.username}**`)
        if (isNaN(args[0])) {
          msg.channel.send("Lutfen Bir Kelime Belirtin! \n Örnek = !sil ``2``");
          return;
        }

      msg.channel.bulkDelete(fetched)
      .catch(error =>  msg.channel.send(`Hata: ${error}`));

      //https://www.youtube.com/watch?v=Zpxyio10Kj0
      msg.channel.bulkDelete(args[0]).then(() => {
        msg.channel.send(`:white_check_mark: Başarılı İşlem ! \n :gear: **${args[0]}** Mesaj Silindi! Silen Kişi = **${msg.author.username}**`)
      });
//\n
    }
    purge();

  }

});

client.login(process.env.BOT_TOKEN);
