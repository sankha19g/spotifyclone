

		$(".album-poster").on('click', function(e){
			var dataSwitchId = $(this).attr('data-switch');
		
			ap.list.switch(dataSwitchId); 

			ap.play();

	
			$("#aplayer").addClass('showPlayer');
		});

/*******************music list******************/


const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true, 
    audio: [{
        name: 'Peaches (feat. Daniel Caesar, Giveon)',
        artist: 'Justin Bieber',
        url: 'music/Justin Bieber - Peaches (Lyrics) ft. Daniel Caesar, Giveon.mp3',
        cover: 'images/peaches.jfif'
    },

    {
        name: 'Shape Of You',
        artist: 'Ed Sheeran',
        url: 'music/Ed Sheeran - Shape Of You (Lyrics).mp3',
        cover: 'images/shape of you.jpg'
    },
    {
        name: 'Levitating',
        artist: 'Dua Lipa',
        url: 'music/Levitating - Dua Lipa (Lyrics).mp3',
        cover: 'images/levitating.png'
    },
    {
        name: 'Senorita (feat. Camila Cabello)',
        artist: 'Shawn Mendes',
        url: 'music/Shawn Mendes - Señorita (Lyrics) ft. Camila Cabello.mp3',
        cover: 'images/shawn mendes.jpg'
    },
    {
        name: 'Closer',
        artist: 'The Chainsmokers',
        url: 'music/Closer - The Chainsmokers (Lyrics).mp3',
        cover: 'images/closer.jpg'
    },
    {
        name: 'Dusk Till Dawn(feat. Sia)',
        artist: 'ZAYN',
        url: 'music/Dusk Till Dawn - ZAYN ft. Sia (Lyrics).mp3',
        cover: 'images/dusk till dawn.jpg'
    },
    {
        name: 'Havana',
        artist: 'camila cabello',
        url: 'music/havana.mp3',
        cover: 'images/camilia.jpg'
    },
    {
        name: 'Starboy',
        artist: 'The Weekend',
        url: 'music/starboy.mp3',
        cover: 'images/weekend.jpg'
    },



]
});

   
    