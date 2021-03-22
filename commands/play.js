const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: 'Joins and plays a video from youtube',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('Bruh you are not even in a voice channel');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('Something went wrong. Your problem, not mine');
        if (!permissions.has('SPEAK')) return message.channel.send('Something went wrong. Your problem, not mine');
        if (!args.length) return message.channel.send('Something went wrong. Your problem, not mine');

        const  connection = await voiceChannel.join();

        const videoFinder = async (query) => {
                const videoResult = await ytSearch(query);

                return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

        }

        const video = await videoFinder(args.join(' '));

        if(video){
            const stream  = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
            })
            
            await message.reply('Your song is playing now')
         } else {
            message.channel.send('Bruh that video does not even exist');
         }
    }
}