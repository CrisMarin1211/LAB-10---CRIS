
const data = [
    { pelicula: 1,
    Nombre: "Alchemy of Souls",
    Descripción: "Mu-deok sets the terms before beginning proper training. Uk discovers that Heo Yeon left him with a gift he must learn to claim as his own.",
    Edad: "+13",
    Rating: 4.5,
    Imagenlarga: "https://larepublica.cronosmedia.glr.pe/original/2022/10/19/635029d566e29603e54f374e.jpg",
    ImagenCarta: "https://www.nerdream.it/storage/2022/12/FiTEwY9UYAIQmcP.jpg"},
    {pelicula: 2,
    Nombre: "The Good Bad Mother",
    Descripción: "After a tragedy turns her world upside down, Jin Young-Soon raises her son with the aim of steering him away from a life of hardship like hers.",
    Edad: "+16",
    Rating: 3.9,
    Imagenlarga: "https://media.vogue.mx/photos/64593bdb5890bfee4327b5bb/16:9/w_2992,h_1683,c_limit/la-buena-mala-madre-netflix.jpg",
    ImagenCarta: "https://pics.filmaffinity.com/La_buena_mala_madre_Serie_de_TV-214755907-large.jpg",},
    {pelicula: 3,
    Nombre: "Squid Game",
    Descripción: "The final round presents another cruel test - but this time, how it ends depends on just one player. The game's creator steps out of the shandows.",
    Edad: "+16",
    Rating: 4.1,
    Imagenlarga: "https://images.ctfassets.net/4cd45et68cgf/3BJQrujAXLeXXsWXnolmvB/28845a87ecb25a0609c2e9faec57736c/EN_SQdGame_Main_PlayGround_Horizontal_RGB_PRE.jpg",
    ImagenCarta: "https://www.orientaserie.it/wp-content/uploads/2022/09/FCKdHXVXEAsaylL.jpg",},
    {pelicula: 4,
    Nombre: "Bad and Crazy",
    Descripción: "Su-yeol visits Shin Ju-hyeok to seek treatment, but unleashes a very angry K instead. A victim opens up after an attempted suicide.",
    Edad: "+16",
    Rating: 4.8,
    Imagenlarga: "https://pic1.iqiyipic.com/image/20211207/04/c4/a_100484196_m_601_en_m1_1080_608.jpg",
    ImagenCarta: "https://pictures.betaseries.com/fonds/poster/28ebdd650ed76dfa7ddd726fe2c7e47a.jpg",},
    {pelicula: 5,
    Nombre: "Ginny and Georgia",
    Descripción: "Georgia Miller arrives in the quaint New Engkand town of Wellsbury with her daughter, Ginny, and her son, Austin, and quickly makes a big impression.",
    Edad: "+16",
    Rating: 4.7,
    Imagenlarga: "https://hips.hearstapps.com/hmg-prod/images/antonia-gentry-brianne-howey-ginny-georgia-s2-1669969197.jpg",
    ImagenCarta: "https://pics.filmaffinity.com/Ginny_y_Georgia_Serie_de_TV-328123946-large.jpg",},
    {pelicula: 6,
    Nombre: "Destined with You",
    Descripción: "Faced with complaints and an accident, Lee Hong-jo investigates an ominous temple, coming up against the mysterious - and cursed - Jang Sin-yu.",
    Edad: "+16",
    Rating: 4.5,
    Imagenlarga: "https://media.glamour.mx/photos/64d42dc08bcbb1503ffa0a3b/16:9/w_2560%2Cc_limit/IMG_8000.jpeg",
    ImagenCarta: "https://m.media-amazon.com/images/M/MV5BODZmMmYzYmQtODFiOS00MzBjLThjNGItMWJkMDI0NTBlMTAyXkEyXkFqcGdeQXVyMzUwNDIxMjQ@._V1_.jpg",},
    {pelicula: 7,
    Nombre: "The Uncanny Counter",
    Descripción: "Ju-seok and Pil-gwang face a change in their relationship. The Counters celebrate some good news.",
    Edad: "+16",
    Rating: 4.8,
    Imagenlarga: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbJIAbkjHS4QoHR0rs2bMGYAZLRYbWwpDFdg57FzmnBhyB3rZJ7FL-9HWUPvFWCj-UHxTJRBPuFzTdy6vEBmMmg0UvFJnuiB83AW.jpg?r=f44",
    ImagenCarta: "https://pbs.twimg.com/media/F1XfwaZaAAA-SZj?format=jpg&name=4096x4096",},
    {pelicula: 8,
    Nombre: "Café Minandang",
    Descripción: "Han-jun and Jae-hui butt heads as they keep getting in the way of each other's investigation. A familiar face shows up at the crime scene.",
    Edad: "+16",
    Rating: 4.1,
    Imagenlarga: "https://images.indianexpress.com/2022/08/cafeminamdang3.jpeg",
    ImagenCarta: "https://occ-0-858-1722.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABSCNIVfpyqB4UGmEOg6mXc04FmgqHPif5vkWAMHbR923vJ1wmbYB4QrftZehbE-mtRRQj_LfB4D6Is19tyxIS-lZn-dDkFjnc1S04MDXA31Cv6jdhvn3R-vy3dQXmmixEi_s3cIDxsXYZ1xE7UIDF4w79l_IKFiTEN-c_DtuFK-fqfcbFw.jpg",},
    {pelicula: 9,
    Nombre: "Mr. Queen",
    Descripción: "Han-jun and Jae-hui butt heads as they keep getting in the way of each other's investigation. A familiar face shows up at the crime scene.",
    Edad: "+16",
    Rating: 4.5,
    Imagenlarga: "https://k-drama.de/wp-content/uploads/2021/05/Mr-Queen-Title-2.webp",
    ImagenCarta: "https://i0.wp.com/haneulssem.com/wp-content/uploads/2022/06/202011100835432773_l.jpeg?fit=570%2C807&ssl=1",},
    {pelicula: 10,
    Nombre: "Vicenzo",
    Descripción: "Korean-born. Italy-raised. Mafia-bread. He's a consigliere with movie-villain good looks. She's a lawyer with a savage sense of humor. They'll do whatever it takes to give a corporate giant a taste of its own medicine in this high-octane dramedy.",
    Edad: "+16",
    Rating: 4.1,
    Imagenlarga: "https://elcomercio.pe/resizer/svRVIuayQHo5Ui3oZY8laPFSzpA=/580x330/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/I7K5XX6KI5AQRHPQXDCOUF4CVI.jpg",
    ImagenCarta: "https://occ-0-299-300.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXY68hKodb_wHNOpLXBwY_uqwBpGCKjFSLZl-WlTmxBNTyHi1ZrrMRuJAgfFEpNF9KXE7lESLN5eGsMmWD1Jo8xwZrDduBDr1mvFQuukK_7R0-NQLC7EfhIH71Ed65SdztrK_RSfKJw8G-mvFp7yOwmw85B66iuLarf5tLwFDg.jpg",} 
]

const filarecomendados = data.slice(0, 5);
const filatrending =data.slice(5, 10);