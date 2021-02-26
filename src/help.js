const help = (prefix) => {
	return `> *Sticker Comandos* <
comando : *${prefix}sticker* ou *${prefix}stiker*
desc : converter imagem / gif / vídeo em adesivo
uso: responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n
comando : *${prefix}sticker nobg* ou *${prefix}stiker nobg*
desc : converter imagem em adesivo removendo o fundo
uso: responder imagem ou enviar imagem com legenda\n
comando : *${prefix}toimg*
desc : converter figurinha em imagem
uso: adesivo de resposta\n
comando : *${prefix}tsticker* ou *${prefix}tstiker*
desc : converter texto em adesivo
uso : *${prefix}tsticker texto aqui*\n
> *Meme Comandos* <
comando : *${prefix}meme*
desc : imagens aleatórias de meme [inglês]
uso: basta enviar o comando\n
comando : *${prefix}memeindo*
desc : imagens aleatórias de meme [indo]
uso: basta enviar o comando\n
> *Others Comandos* <
comando : *${prefix}gtts*
desc : converter texto em fala / áudio
uso : *${prefix}gtts [cc] [text]*\nexemplo : *${prefix}gtts ja On2-chan*\n
comando : *${prefix}loli*
desc : imagens aleatórias de loli
uso: basta enviar o comando\n
comando : *${prefix}nsfwloli*
desc : imagens aleatórias de nsfw loli
uso: basta enviar o comando\n
comando : *${prefix}url2img*
desc : tirar screenshots da web
uso : *${prefix}url2img [tipe] [url]*\n
comando : *${prefix}simi*
desc : sua mensagem será respondida por simi
uso : *${prefix}simi sua mensagem*\n
comando : *${prefix}ocr*
desc : pegue o texto na foto
uso: responder imagem ou enviar imagem com legenda\n
comando : *${prefix}wait*
desc : procure anime com imagem [ What Anime Is This/That ]
uso: responder imagem ou enviar imagem com legenda\n
comando : *${prefix}setprefix*
desc : substituir prefixo
uso : *${prefix}setprefix [text|optional]*\nexemplo : *${prefix}setprefix ?*
nota: este comando só pode ser usado pelo proprietário do bot\n
> *Group Comandos* <
comando : *${prefix}add*
desc : adicionar membro ao grupo
uso : *${prefix}add 62813xxxxx*\n
nota: só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}kick*
desc : chutar membros do grupo
uso : *${prefix}kick @tagmember*\n
nota: só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}promote*
desc : tornar o membro do grupo como administrador do grupo
uso : *${prefix}promote @tagmember*\n
nota: só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}demote*
desc : tornar o administrador do grupo como membro do grupo
uso : *${prefix}demote @tagmember*\n
nota: só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}linkgroup*
desc : pegue o link do grupo
uso: basta enviar o comando
nota: só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}leave*
desc : Faça o bot sair do grupo
uso: basta enviar o comando
nota: só pode ser usado por administradores de grupo e proprietário de bot\n
comando : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também
uso: basta enviar o comando
nota: este comando pode ser usado se você for um administrador de grupo\n
comando : *${prefix}simih*
desc : ative o modo simi no grupo
uso : *${prefix}simih 1* para ativar o modo simi e *${prefix}simih 0* para desativar o modo simi
nota: este comando pode ser usado se você for um administrador de grupo\n`
}

exports.help = help
