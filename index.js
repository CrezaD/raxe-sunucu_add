client.on('guildCreate', async guild => { 
  const raxe = new MessageEmbed()
  .setTitle("🎉 | Yeni Sunucu!")
  .setColor("#000a37")
  .setThumbnail(guild.iconURL( { dynamic: true } ))
  .addFields(
    {name: `Sunucu Adı:`, value: `${guild.name}`, inline: toString},
    {name: `Sunucudaki Üye Sayısı:`, value: `${guild.memberCount}`, inline: toString},
    {name: `Sunucu Sahibi:`, value: `${guild.owner}`, inline: toString}
  )
  client.channels.cache.get("KANAL-İD").send({ embeds: [raxe]}) //bu sistem v13'dür.

})
