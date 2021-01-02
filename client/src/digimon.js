class Digimon  {
    constructor()
    {
        this.name = "N";
        this.level = "L";
        this.attack = "A";
        this.img = "I";
    }
}
class Fresh extends Digimon{
    constructor(name, attack, img){
    super();
    this.name = name;
    this.level = "Fresh";
    this.attack = attack;
    this.img = img;
    }
}
class InTraining extends Digimon{
    constructor(name, attack, img)
    {
    super();
    this.name = name;
    this.level = "In-Training";
    this.attack = attack;
    this.img = img;
    }
}
class Rookie extends Digimon{
    constructor(name, attack, img)
    {
    super();
    this.name = name;
    this.level = "Rookie";
    this.attack = attack
    this.img = img;
    }
}
class Champion extends Digimon{
    constructor(name, attack, img)
    {
    super();
    this.name = name;
    this.level = "Champion";
    this.attack = attack;
    this.img = img;
    }
}
class Ultimate extends Digimon{
    constructor(name, attack, img)
    {
    super();
    this.name = name;
    this.level = "Ultimate";
    this.attack = attack;
    this.img = img;
    }
}
class Mega extends Digimon{
    constructor(name, attack, img)
    {
    super();
    this.name = name;
    this.level = "Mega";
    this.attack = attack;
    this.img = img;
    }
}
class Ultra extends Digimon{
    constructor(name, attack, img)
    {
    super();
    this.name = name;
    this.level = "Ultra";
    this.attack = attack;
    this.img = img;
    }
}
//fresh
const algomonF = new Fresh("Algomon (Fresh)", "San no Awa", "https://wikimon.net/images/thumb/0/00/Algomon_baby1.jpg/120px-Algomon_baby1.jpg")
const bombmon = new Fresh("Bombmon", "Bomberhead", "https://wikimon.net/images/thumb/3/30/Bommon_2010_2.jpg/120px-Bommon_2010_2.jpg")
const bommon = new Fresh("Bommon", "Bachibachibacchin", "https://wikimon.net/images/thumb/2/2e/Bommon.jpg/120px-Bommon.jpg")
const botamon = new Fresh("Botamon", "Bubble Blow", "https://wikimon.net/images/thumb/e/ed/Botamon.jpg/120px-Botamon.jpg")
const chibickmon = new Fresh("Chibickmon", "Petit Sugar Plum", "https://wikimon.net/images/thumb/3/38/Chibickmon.jpg/120px-Chibickmon.jpg")
const chibomon = new Fresh("Chibomon", "Frothy Spit", "https://wikimon.net/images/thumb/d/df/Chicomon.jpg/120px-Chicomon.jpg")
const conomon = new Fresh("Conomon", "San no Awa", "https://wikimon.net/images/thumb/2/20/Cocomon2.jpg/120px-Cocomon2.jpg")
const cotsucomon = new Fresh("Cotsucomon", "Kottsun", "https://wikimon.net/images/thumb/0/02/Cotsucomon.jpg/120px-Cotsucomon.jpg")
const datirimon = new Fresh("Datirimon", "San no Awa", "https://wikimon.net/images/thumb/d/df/Pipimon.jpg/120px-Pipimon.jpg")
const dodomon = new Fresh("Dodomon", "Chisana Tetsu Tsubu", "https://wikimon.net/images/thumb/0/02/Dodomon.jpg/120px-Dodomon.jpg")
const dokimon = new Fresh("Dokimon", "Bubbles", "https://wikimon.net/images/8/82/Dokimon.jpg")
const fufumon = new Fresh("Fufumon", "Chisana Tetsu no Toge", "https://wikimon.net/images/thumb/4/48/Fufumon.jpg/120px-Fufumon.jpg")
const leafmon = new Fresh("Leafmon", "Sansei no Awa", "https://wikimon.net/images/thumb/e/ea/Leafmon.jpg/120px-Leafmon.jpg")
const jyarimon = new Fresh("Jyarimon", "Bubbles", "https://wikimon.net/images/thumb/c/c4/Jyarimon.jpg/120px-Jyarimon.jpg")
const keemon = new Fresh("Keemon", "Pushu", "https://wikimon.net/images/thumb/8/86/Kiimon.jpg/120px-Kiimon.jpg")
const ketomon = new Fresh("Ketomon", "Bubbles", "https://wikimon.net/images/thumb/f/f8/Ketomon.jpg/120px-Ketomon.jpg")
const kuramon = new Fresh("Kuramon", "Bubbles", "https://wikimon.net/images/thumb/1/1f/Kuramon.jpg/120px-Kuramon.jpg")
const metalKoromon = new Fresh("MetalKoromon", "Jamming Powder", "https://wikimon.net/images/thumb/b/bf/Choromon.jpg/120px-Choromon.jpg")
const mokumon = new Fresh("Mokumon", "Smoky Blow", "https://wikimon.net/images/thumb/3/34/Mokumon.jpg/120px-Mokumon.jpg")
const nyokimon = new Fresh("Nyokimon", "Seed Cracker", "https://wikimon.net/images/thumb/e/e0/Nyokimon.jpg/120px-Nyokimon.jpg")
const pabumon = new Fresh("Pabumon", "Bubbles", "https://wikimon.net/images/thumb/1/1f/Bubbmon.jpg/120px-Bubbmon.jpg")
const pafumon = new Fresh("Pafumon", "Puff Balloon", "https://wikimon.net/images/thumb/e/e7/Pafumon.jpg/120px-Pafumon.jpg")
const paomon = new Fresh("Paomon", "Acid Bubbles", "https://wikimon.net/images/thumb/6/6f/Paomon.jpg/120px-Paomon.jpg")
const petitmon = new Fresh("Petitmon", "Hot Sigh", "https://wikimon.net/images/thumb/4/41/Petitmon.jpg/120px-Petitmon.jpg")
const pichimon = new Fresh("Pichimon", "Bubble Blow", "https://wikimon.net/images/thumb/a/aa/Pitchmon.jpg/120px-Pitchmon.jpg")
const popomon = new Fresh("Popomon", "Hair Mist", "https://wikimon.net/images/thumb/0/06/Popomon.jpg/120px-Popomon.jpg")
const poyomon = new Fresh("Poyomon", "Super Bubble Blow", "https://wikimon.net/images/thumb/8/80/Poyomon.jpg/120px-Poyomon.jpg")
const punimon = new Fresh("Punimon", "Bubble Blow", "https://wikimon.net/images/thumb/a/a0/Punimon.jpg/120px-Punimon.jpg")
const pupumon = new Fresh("Pupumon", "Poison Bubbles", "https://wikimon.net/images/thumb/d/df/Pupumon.jpg/120px-Pupumon.jpg")
const pururumon = new Fresh("Pururumon", "San no Awa", "https://wikimon.net/images/thumb/0/03/Pururumon.jpg/120px-Pururumon.jpg")
const pusumon = new Fresh("Pusumon", "Pacifier", "https://wikimon.net/images/thumb/9/9c/Pusumon.jpg/120px-Pusumon.jpg")
const puttimon = new Fresh("Puttimon", "Frothy Spit", "https://wikimon.net/images/thumb/c/c4/Puttimon.jpg/120px-Puttimon.jpg")
const puwamon = new Fresh("Puwamon", "Fluffy Feather", "https://wikimon.net/images/thumb/3/38/Puwamon.jpg/120px-Puwamon.jpg")
const relemon = new Fresh("Relemon", "Transformation", "https://wikimon.net/images/thumb/e/ea/Relemon.jpg/120px-Relemon.jpg")
const sakumon = new Fresh("Sakumon", "Sakkuri", "https://wikimon.net/images/thumb/4/48/Sakumon.jpg/120px-Sakumon.jpg")
const tsubumon = new Fresh("Tsubumon", "San no Awa", "https://wikimon.net/images/thumb/d/de/Tsubumon.jpg/120px-Tsubumon.jpg")
const yukimiBotamon = new Fresh("YukimiBotamon", "Diamond Dust", "https://wikimon.net/images/thumb/9/91/Yukimibotamon.jpg/120px-Yukimibotamon.jpg")
const yuramon = new Fresh("Yuramon", "Bubble Blow", "https://wikimon.net/images/thumb/5/5a/Yuramon.jpg/120px-Yuramon.jpg")
const zerimon = new Fresh("Zerimon", "Acid Bubbles", "https://wikimon.net/images/thumb/6/6f/Zerimon.jpg/120px-Zerimon.jpg")
const zurumon = new Fresh("Zurumon", "Acid Bubbles", "https://wikimon.net/images/thumb/a/a3/Zurumon.jpg/120px-Zurumon.jpg")
//in-training
const algomonIT = new InTraining("Algomon (In-Training)", "San no Awa", "https://wikimon.net/images/thumb/4/48/Algomon_baby2.jpg/120px-Algomon_baby2.jpg")
const arcadiamonIT = new InTraining("Arcadiamon (In-Training)", "Data Drain", "https://wikimon.net/images/thumb/0/07/Arkadimon_baby2.jpeg/120px-Arkadimon_baby2.jpeg")
const babydmon = new InTraining("Babydmon", "Hot Steam", "https://wikimon.net/images/thumb/1/17/Babydmon.jpg/120px-Babydmon.jpg")
const bibimon = new InTraining("Bibimon", "Bubbles", "https://wikimon.net/images/thumb/e/ec/Bibimon.jpg/120px-Bibimon.jpg")
const budmon = new InTraining("Budmon", "Frothy Spit", "https://wikimon.net/images/thumb/f/f9/Budmon.jpg/120px-Budmon.jpg")
const bukamon = new InTraining("Bukamon", "Air Bubbles", "https://wikimon.net/images/thumb/7/73/Pukamon.jpg/120px-Pukamon.jpg")
const chapmon = new InTraining("Chapmon", "Foam Shower", "https://wikimon.net/images/thumb/1/1c/Chapmon.jpg/120px-Chapmon.jpg")
const chicchimon = new InTraining("Chicchimon", "Frothy Spit", "https://wikimon.net/images/thumb/7/7f/Chicchimon.jpg/120px-Chicchimon.jpg")
const cupimon = new InTraining("Cupimon", "Angel Ring", "https://wikimon.net/images/thumb/0/06/Cupimon.jpg/120px-Cupimon.jpg")
const demiMeramon = new InTraining("DemiMeramon", "Flame Shot", "https://wikimon.net/images/thumb/c/c6/Petimeramon.jpg/120px-Petimeramon.jpg")
const demiVeemon = new InTraining("DemiVeemon", "Pop Attack", "https://wikimon.net/images/thumb/2/27/Chibimon.jpg/120px-Chibimon.jpg")
const dorimon = new InTraining("Dorimon", "Metal Drop", "https://wikimon.net/images/thumb/f/f0/Dorimon.jpg/120px-Dorimon.jpg")
const frimon = new InTraining("Frimon", "Shippo Binta","https://wikimon.net/images/thumb/b/b8/Frimon.jpg/120px-Frimon.jpg")
const gigimon = new InTraining("Gigimon", "Hot Bite", "https://wikimon.net/images/thumb/f/fa/Gigimon3.jpg/120px-Gigimon3.jpg")
const gummymon = new InTraining("Gummymon", "Double Bubble", "https://wikimon.net/images/thumb/c/cd/Gummymon.jpg/120px-Gummymon.jpg")
const hopmon = new InTraining("Hopmon", "Hop Hip", "https://wikimon.net/images/thumb/2/24/Hopmon2.jpg/120px-Hopmon2.jpg")
const kakkinmon = new InTraining("Kakkinmon", "Kankan", "https://wikimon.net/images/thumb/9/90/Kakkinmon.jpg/120px-Kakkinmon.jpg")
const kokomon = new InTraining("Kokomon", "Koko Crusher", "https://wikimon.net/images/thumb/3/3a/Chocomon.jpg/120px-Chocomon.jpg")
const koromon = new InTraining("Koromon", "Bubble Blow", "https://wikimon.net/images/thumb/6/6e/Koromon.jpg/120px-Koromon.jpg" )
const kapurimon = new InTraining("Kapurimon", "Howling Blow", "https://wikimon.net/images/thumb/3/35/Caprimon.jpg/120px-Caprimon.jpg")
const koZenimon = new InTraining("KoZenimon", "Stength in Solidarity", "https://wikimon.net/images/thumb/e/ee/Kozenimon.jpg/120px-Kozenimon.jpg")
const kyaromon = new InTraining("Kyaromon", "Shippo Swing", "https://wikimon.net/images/thumb/c/ca/Kyaromon2.jpg/120px-Kyaromon2.jpg")
const kyokyomon = new InTraining("Kyokyomon", "Metal Straw", "https://wikimon.net/images/thumb/f/f2/Kyokyomon.jpg/120px-Kyokyomon.jpg")
const minomon = new InTraining("Minomon", "Pinecone", "https://wikimon.net/images/thumb/b/ba/Minomon.jpg/120px-Minomon.jpg")
const missimon = new InTraining("Missimon", "Missile Crash", "https://wikimon.net/images/thumb/2/29/Missimon.jpg/120px-Missimon.jpg")
const monimon = new InTraining("Monimon", "Ninja", "https://wikimon.net/images/thumb/2/29/Monimon.jpg/120px-Monimon.jpg")
const moonmon = new InTraining("Moonmon", "Dark Burst", "https://wikimon.net/images/thumb/8/8d/Moonmon.jpg/120px-Moonmon.jpg")
const motimon = new InTraining("Motimon", "Bubbles", "https://wikimon.net/images/thumb/2/29/Mochimon.jpg/120px-Mochimon.jpg")
const nyaromon = new InTraining("Nyaromon", "Tail Whip", "https://wikimon.net/images/thumb/b/bc/Nyaromon.jpg/120px-Nyaromon.jpg")
const pagumon = new InTraining("Pagumon", "Poison Bubbles", "https://wikimon.net/images/thumb/d/d0/Pagumon.jpg/120px-Pagumon.jpg")
const pickmon = new InTraining("Pickmon", "Power Picks", "https://wikimon.net/images/thumb/a/ad/Pickmon.jpg/120px-Pickmon.jpg")
const pinamon = new InTraining("Pinamon", "Piripiri Spark", "https://wikimon.net/images/thumb/3/39/Pinamon.jpg/120px-Pinamon.jpg")
const poromon = new InTraining("Poromon", "Baby Breeze", "https://wikimon.net/images/thumb/5/58/Poromon.jpg/120px-Poromon.jpg")
const puroromon = new InTraining("Puroromon", "Chikkuritto", "https://wikimon.net/images/thumb/4/44/Puroromon.jpg/120px-Puroromon.jpg")
const pusurimon = new InTraining("Pusurimon", "Prickly Roll","https://wikimon.net/images/thumb/e/ec/Pusurimon.jpg/120px-Pusurimon.jpg")
const sakuttomon = new InTraining("Sakuttomon", "Sakusaku", "https://wikimon.net/images/thumb/4/46/Sakuttomon.jpg/120px-Sakuttomon.jpg")
const sunmon = new InTraining("Sunmon", "Frothy Spit", "https://wikimon.net/images/thumb/b/b4/Sunmon.jpg/120px-Sunmon.jpg")
const tanemon = new InTraining("Tanemon", "Bubbles", "https://wikimon.net/images/thumb/3/3d/Tanemon.jpg/120px-Tanemon.jpg")
const tokomon = new InTraining("Tokomon", "Bubbles", "https://wikimon.net/images/thumb/e/ec/Tokomon.jpg/120px-Tokomon.jpg")
const torikaraBallmon = new InTraining("TorikaraBallmon", "None", "https://wikimon.net/images/thumb/c/cd/Torikara_ballmon.jpg/120px-Torikara_ballmon.jpg")
const tsumemon = new InTraining("Tsumemon", "Bubbles", "https://wikimon.net/images/thumb/4/4e/Tsumemon.jpg/120px-Tsumemon.jpg")
const tsunomon = new InTraining("Tsunomon", "Bubble Blow", "https://wikimon.net/images/thumb/0/08/Tsunomon2.jpg/120px-Tsunomon2.jpg")
const upamon = new InTraining("Upamon", "Shock Shout", "https://wikimon.net/images/thumb/d/dd/Upamon.jpg/120px-Upamon.jpg")
const viximon = new InTraining("Viximon", "Killing Stone", "https://wikimon.net/images/thumb/3/37/Pokomon2.jpg/120px-Pokomon2.jpg")
const wanyamon = new InTraining("Wanyamon", "Smile Fang", "https://wikimon.net/images/thumb/f/f2/Wanyamon.jpg/120px-Wanyamon.jpg")
const xiaomon = new InTraining("Xiaomon", "Tummo", "https://wikimon.net/images/thumb/8/86/Xiaomon.jpg/120px-Xiaomon.jpg")
const yaamon = new InTraining("Yaamon", "Rolling Black", "https://wikimon.net/images/thumb/5/56/Yaamon2.jpg/120px-Yaamon2.jpg")
const yokomon = new InTraining("Yokomon", "Bubbles", "https://wikimon.net/images/thumb/a/a4/Pyocomon.jpg/120px-Pyocomon.jpg")
//rookie
const agumon = new Rookie("Agumon", "Pepper Breath", "https://wikimon.net/images/thumb/7/72/Agumon.jpg/120px-Agumon.jpg")
const algomonR = new Rookie("Algomon (Rookie)", "Brute Knuckle or Imprisonment", "https://wikimon.net/images/thumb/f/f6/Algomon_child.jpg/120px-Algomon_child.jpg")
const armadillomon =  new Rookie("Armadillomon", "Diamond Shell", "https://wikimon.net/images/thumb/a/a6/Armadimon2.jpg/120px-Armadimon2.jpg")
const biyomon = new Rookie("Biyomon", "Spiral Twister", "https://wikimon.net/images/thumb/d/d8/Piyomon.jpg/120px-Piyomon.jpg")
const dorumon = new Rookie("Dorumon", "Metal Cannon", "https://wikimon.net/images/thumb/1/17/Dorumon.jpg/120px-Dorumon.jpg")
const gabumon = new Rookie("Gabumon", "Blue Blaster", "https://wikimon.net/images/thumb/7/71/Gabumon.jpg/120px-Gabumon.jpg")
const gomamon = new Rookie("Gomamon", "Fish Power", "https://wikimon.net/images/thumb/9/9b/Gomamon.jpg/120px-Gomamon.jpg")
const guilmon = new Rookie("Guilmon", "Rock Breaker", "https://wikimon.net/images/thumb/c/c5/Guilmon.jpg/120px-Guilmon.jpg")
const hawkmon = new Rookie("Hawkmon", "Feather Strike", "https://wikimon.net/images/thumb/7/7f/Hawkmon.jpg/120px-Hawkmon.jpg")
const lopmon = new Rookie("Lopmon", "Tiny Twister", "https://wikimon.net/images/thumb/a/af/Lopmon.jpg/120px-Lopmon.jpg")
const ludomon = new Rookie("Rookie", "Wall Rake", "https://wikimon.net/images/thumb/0/03/Ludomon.jpg/120px-Ludomon.jpg")
const patamon = new Rookie("Patamon", "Boom Bubble", "https://wikimon.net/images/thumb/7/7d/Patamon.jpg/120px-Patamon.jpg")
const palmon = new Rookie("Palmon", "Poison Ivy", "https://wikimon.net/images/thumb/6/61/Palmon.jpg/120px-Palmon.jpg")
const pulsemon = new Rookie("Pulsemon", "Elec Rush", "https://wikimon.net/images/thumb/2/23/Pulsemon.jpg/120px-Pulsemon.jpg")
const salamon = new Rookie("Salamon", "Puppy Howling", "https://wikimon.net/images/thumb/1/10/Plotmon.jpg/120px-Plotmon.jpg")
const tentomon = new Rookie("Tentomon", "Super Shocker", "https://wikimon.net/images/thumb/a/ac/Tentomon.jpg/120px-Tentomon.jpg")
const veemon = new Rookie("Veemon", "Vee Headbutt", "https://wikimon.net/images/thumb/2/23/Vmon.jpg/120px-Vmon.jpg")
const wormmon = new Rookie("Wormmon", "Sticky Net", "https://wikimon.net/images/thumb/0/02/Wormmon2.jpg/120px-Wormmon2.jpg")
//champion
const algomonC = new Champion("Algomon (Champion)", "Imprisonment or Bolt Line", "https://wikimon.net/images/thumb/3/3b/Algomon_adult.jpg/120px-Algomon_adult.jpg")
const angemon = new Champion("Angemon", "Hand of Fate", "https://wikimon.net/images/thumb/1/1b/Angemon.jpg/120px-Angemon.jpg")
const ankylomon = new Champion("Ankylomon", "Tail Hammer", "https://wikimon.net/images/thumb/e/e0/Ankylomon2.jpg/120px-Ankylomon2.jpg")
const aquilamon = new Champion("Aquilamon", "Grand Horn", "https://wikimon.net/images/thumb/b/b1/Aquilamon2.jpg/120px-Aquilamon2.jpg")
const birdramon = new Champion("Birdramon", "Meteor Wing", "https://wikimon.net/images/thumb/0/06/Birdramon.jpg/120px-Birdramon.jpg")
const bulkmon = new Champion("Bulkmon", "None", "https://wikimon.net/images/thumb/f/f0/Bulkmon.jpg/120px-Bulkmon.jpg")
const dorugamon = new Champion("Dorugamon", "Power Metal", "https://wikimon.net/images/thumb/e/e3/Dorugamon.jpg/120px-Dorugamon.jpg")
const exVeemon = new Champion("ExVeemon", "Vee-Laser", "https://wikimon.net/images/thumb/6/6a/Xvmon.jpg/120px-Xvmon.jpg")
const garurumon = new Champion("Garurumon", "Howling Blaster", "https://wikimon.net/images/thumb/5/57/Garurumon.jpg/120px-Garurumon.jpg")
const gatomon = new Champion("Gatomon", "Lightning Paw", "https://wikimon.net/images/thumb/9/95/Tailmon.jpg/120px-Tailmon.jpg")
const greymon = new Champion("Greymon", "Nova Blast", "https://wikimon.net/images/thumb/6/6c/Greymon.jpg/120px-Greymon.jpg")
const growlmon = new Champion("Growlmon", "Exhaust Flame", "https://wikimon.net/images/thumb/3/32/Growmon2.jpg/120px-Growmon2.jpg")
const ikkakumon = new Champion("Ikkakumon", "Harpoon Torpedo", "https://wikimon.net/images/thumb/0/01/Ikkakumon.jpg/120px-Ikkakumon.jpg")
const kabuterimon = new Champion("Kabuterimon", "Electro Shocker", "https://wikimon.net/images/thumb/4/4a/Kabuterimon.jpg/120px-Kabuterimon.jpg")
const stingmon = new Champion("Stingmon", "Spiking Strike", "https://wikimon.net/images/thumb/3/3d/Stingmon.jpg/120px-Stingmon.jpg")
const tiaLudomon = new Champion("TiaLudomon", "Frisbicker", "https://wikimon.net/images/thumb/b/b7/Tialudomon.jpg/120px-Tialudomon.jpg")
const togemon = new Champion("Togemon", "Needle Spray", "https://wikimon.net/images/thumb/0/0f/Togemon.jpg/120px-Togemon.jpg")
const turuiemon = new Champion("Turuiemon", "Gauntlet Claw", "https://wikimon.net/images/thumb/8/88/Turuiemon.jpg/120px-Turuiemon.jpg")
const veedramon = new Champion("Veedramon", "V-Nova Blast", "https://wikimon.net/images/thumb/1/1f/Vdramon.jpg/120px-Vdramon.jpg")
const wendigomon = new Champion("Wendigomon", "Koko Crusher", "https://wikimon.net/images/thumb/6/60/Wendimon2.jpg/120px-Wendimon2.jpg")
//ultimate
const aeroVeedramon = new Ultimate("AeroVeedramon", "V-Wing Blade", "https://wikimon.net/images/thumb/5/54/Aerovdramon.jpg/120px-Aerovdramon.jpg")
const algomonU = new Ultimate("Algomon (Ultimate)", "Elimination Line, Imprisonment, or Hypnos Claw", "https://wikimon.net/images/thumb/d/d6/Algomon.jpg/120px-Algomon.jpg")
const andiramonE = new Ultimate("Andiramon (Evil)","Treasure Axe", "https://wikimon.net/images/thumb/4/41/Andiramon.jpg/120px-Andiramon.jpg")
const andiramonG = new Ultimate("Andiramon (Good)", "Bunny Blades", "https://wikimon.net/images/thumb/b/b8/Andiramon_data.jpg/120px-Andiramon_data.jpg")
const angewomon = new Ultimate("Angewomon", "Celestial Arrow", "https://wikimon.net/images/thumb/5/5a/Angewomon.jpg/120px-Angewomon.jpg")
const boutmon = new Ultimate("Boutmon", "None", "https://wikimon.net/images/thumb/6/6b/Boutmon.jpg/101px-Boutmon.jpg")
const doruGreymon = new Ultimate("DoruGreymon", "Metal Meteor", "https://wikimon.net/images/thumb/a/a6/Doruguremon.jpg/120px-Doruguremon.jpg")
const garudamon = new Ultimate("Garudamon", "Shadow Wing", "https://wikimon.net/images/thumb/c/c6/Garudamon.jpg/120px-Garudamon.jpg")
const jewelBeemon = new Ultimate("JewelBeemon", "Spike Buster", "https://wikimon.net/images/thumb/7/7f/Jewelbeemon2.jpg/120px-Jewelbeemon2.jpg")
const lillymon = new Ultimate("Lillymon", "Flower Cannon or Flower Wreath", "https://wikimon.net/images/thumb/a/a8/Lilimon.jpg/120px-Lilimon.jpg")
const magnaAngemon = new Ultimate("MagnaAngemon", "Gate of Destiny", "https://wikimon.net/images/thumb/f/fb/Holyangemon2.jpg/120px-Holyangemon2.jpg")
const megaKabuterimon = new Ultimate("MegaKabuterimon", "Horn Buster", "https://wikimon.net/images/thumb/6/65/Atlurkabuterimon_red.jpg/120px-Atlurkabuterimon_red.jpg")
const metalGreymon = new Ultimate("MetalGreymon", "Mega Claw or Giga Blaster", "https://wikimon.net/images/thumb/d/d8/Metalgreymon.jpg/120px-Metalgreymon.jpg")
const paildramon = new Ultimate("Paildramon", "Desperado Blaster", "https://wikimon.net/images/thumb/b/b9/Paildramon.jpg/120px-Paildramon.jpg")
const raijiLudomon = new Ultimate("RaijiLudomon", "Lightning Buster or Rocket Messer", "https://wikimon.net/images/thumb/9/92/Raijiludomon.jpg/120px-Raijiludomon.jpg")
const shakkoumon = new Ultimate("Shakkoumon", "Justice Beam", "https://wikimon.net/images/thumb/1/1e/Shakkoumon.jpg/120px-Shakkoumon.jpg")
const silphymon = new Ultimate("Silphymon", "Top Gun", "https://wikimon.net/images/thumb/9/9d/Silphymon.jpg/120px-Silphymon.jpg")
const warGrowlmon = new Ultimate("WarGrowlmon", "Atomic Blaster", "https://wikimon.net/images/thumb/1/1e/Megalogrowmon.jpg/120px-Megalogrowmon.jpg")
const wereGarurumon = new Ultimate("WereGarurumon", "Wolf Claw or Garuru Kick", "https://wikimon.net/images/thumb/8/8f/Weregarurumon.jpg/120px-Weregarurumon.jpg")
const zudomon = new Ultimate("Zudomon", "Vulcan's Hammer", "https://wikimon.net/images/thumb/b/b3/Zudomon.jpg/120px-Zudomon.jpg")
//mega
const algomonM = new Mega("Algomon (Mega)", "Distorton Line or Judecca Cannon", "https://wikimon.net/images/thumb/3/36/Algomon_ultimate.jpg/120px-Algomon_ultimate.jpg")
const alphamon = new Mega("Alphamon", "Blade of the Dragon King or Digitize Soul", "https://wikimon.net/images/thumb/2/29/Alphamon.jpg/120px-Alphamon.jpg")
const banchoStingmon = new Mega("BanchoStingmon", "Bloody Finish or Redbutt", "https://wikimon.net/images/thumb/5/51/Banchostingmon.jpg/120px-Banchostingmon.jpg")
const bryweLudramon = new Mega("BryweLudramon", "Guren Storm or Blast Smash", "https://wikimon.net/images/thumb/e/e5/Bryweludramon.jpg/120px-Bryweludramon.jpg")
const cherubimonE = new Mega("Cherubimon (Evil)", "Lightning Spear", "https://wikimon.net/images/thumb/1/1c/Cherubimon-vice.jpg/120px-Cherubimon-vice.jpg")
const cherubimonG = new Mega("Cherubimon (Good)", "Heaven's Judgement", "https://wikimon.net/images/thumb/4/46/Cherubimon.jpg/120px-Cherubimon.jpg")
const dorugoramon = new Mega("Dorugoramon", "Brave Metal", "https://wikimon.net/images/thumb/6/63/Dorugoramon.jpg/120px-Dorugoramon.jpg")
const gallantmon = new Mega("Gallantmon", "Lightning Joust or Shield of the Just", "https://wikimon.net/images/thumb/4/4d/Dukemon.jpg/120px-Dukemon.jpg")
const herculesKabuterimon = new Mega("HerculesKabuterimon", "Giga Blaster", "https://wikimon.net/images/thumb/f/f3/Heraklekabuterimon.jpg/120px-Heraklekabuterimon.jpg" )
const hououmon = new Mega("Hououmon", "Starlight Explosion", "https://wikimon.net/images/thumb/1/10/Hououmon.jpg/120px-Hououmon.jpg")
const imperialdramonDM = new Mega("Imperialdramon: Dragon Mode", "Mega Death", "https://wikimon.net/images/thumb/5/5c/Imperialdramon.jpg/120px-Imperialdramon.jpg")
const imperialdramonFM = new Mega("Imperialdramon: Fighter Mode", "Positron Laser", "https://wikimon.net/images/thumb/1/1c/Imperialdramon_fighter.jpg/120px-Imperialdramon_fighter.jpg")
const kazuchimon = new Mega("Kazuchimon", "None", "https://wikimon.net/images/thumb/d/d0/Kadutimon.jpg/98px-Kadutimon.jpg")
const magnadramon = new Mega("Magnadramon",  "Fire Tornado", "https://wikimon.net/images/thumb/2/24/Holydramon.jpg/120px-Holydramon.jpg")
const mastemon = new Mega("Mastemon", "Chaos Degradation", "https://wikimon.net/images/thumb/0/0d/Mastemon2.jpg/120px-Mastemon2.jpg")
const megidramon = new Mega("Megidramon", "Megido Flame", "https://wikimon.net/images/thumb/f/f4/Megidramon.jpg/120px-Megidramon.jpg")
const metalGarurumon = new Mega("MetalGarurumon", "Metal Wolf Claw or Garuru Tomahawk", "https://wikimon.net/images/thumb/0/0d/Metalgarurumon2.jpg/120px-Metalgarurumon2.jpg" )
const ophanimon = new Mega("Ophanimon", "Eden's Javelin", "https://wikimon.net/images/thumb/a/a6/Ofanimon.jpg/120px-Ofanimon.jpg")
const rosemon = new Mega("Rosemon", "Thorn Whip or Forbidden Temptation", "https://wikimon.net/images/thumb/b/bb/Rosemon.jpg/120px-Rosemon.jpg")
const seraphimon = new Mega("Seraphimon", "Strike of the Seven Stars", "https://wikimon.net/images/thumb/7/75/Seraphimon.jpg/120px-Seraphimon.jpg")
const slashAngemon = new Mega("SlashAngemon", "Blade of the True", "https://wikimon.net/images/thumb/0/0c/Slashangemon.jpg/120px-Slashangemon.jpg")
const ulforceVeedramon = new Mega("UlforceVeedramon", "The Ray of Victory or Victory Sword", "https://wikimon.net/images/thumb/6/6b/Ulforcevdramon.jpg/120px-Ulforcevdramon.jpg")
const valkyrimon = new Mega("Valkyrimon", "Fenrir Sword", "https://wikimon.net/images/thumb/8/87/Valkyrimon.jpg/120px-Valkyrimon.jpg")
const vikemon = new Mega("Vikemon", "Artic Blizzard", "https://wikimon.net/images/thumb/7/77/Vikemon.jpg/120px-Vikemon.jpg")
const warGreymon = new Mega("WarGreymon", "Terra Force or Great Tornado", "https://wikimon.net/images/thumb/9/94/Wargreymon.jpg/120px-Wargreymon.jpg")
//ultra
const alphamonOuryuken = new Ultra("Alphamon Ouryuken", "Ultimate Ouryuken", "https://wikimon.net/images/thumb/3/39/Alphamon_ouryuken.jpg/120px-Alphamon_ouryuken.jpg")
const imperialdramonPM = new Ultra("Imperialdramon: Paladin Mode", "Omni Sword", "https://wikimon.net/images/thumb/c/cb/Imperialdramon_paladin.jpg/120px-Imperialdramon_paladin.jpg")
const omegamon = new Ultra("Omegamon", "Garuru Cannon or Grey Sword", "https://wikimon.net/images/thumb/7/78/Omegamon.jpg/120px-Omegamon.jpg")
const ordinemon = new Ultra("Ordinemon", "End of the World", "https://wikimon.net/images/thumb/0/03/Ordinemon.jpg/120px-Ordinemon.jpg")
const rafflesimon = new Ultra("Rafflesimon", "Ballet Gun", "https://wikimon.net/images/thumb/c/c1/Rafflesimon.jpg/120px-Rafflesimon.jpg")
const ragnaLordmon = new Ultimate("RagnaLordmon", "Direct Smasher, Ignition Prominence, or Duel-Edge Flowsion","https://wikimon.net/images/thumb/5/5f/Ragnaloardmon.jpg/120px-Ragnaloardmon.jpg" )
const tyrantKabuterimon = new Ultra("TyrantKabuterimon", "Shine of Bee", "https://wikimon.net/images/thumb/9/91/Tyrantkabuterimon.jpg/120px-Tyrantkabuterimon.jpg" )
export const digimon =
    [
        algomonF, algomonIT, algomonR, algomonC, algomonU, algomonM, arcadiamonIT,
        bombmon,
        bommon, missimon,
        //botamon, koromon, agumon, greymon, metalGreymon, warGreymon, omegamon,
        chibickmon, pickmon,
        //chibomon, demiVeemon, veemon, exVeemon, paildramon, imperialdramonDM, imperialdramonFM, imperialdramonPM, veedramon, aeroVeedramon, ulforceVeedramon,
        conomon, kokomon, lopmon, turuiemon, andiramonG, cherubimonG, wendigomon, andiramonE, cherubimonE, moonmon,  
        //cotsucomon, kakkinmon, ludomon, tiaLudomon, raijiLudomon, bryweLudramon, ragnaLordmon,
        datirimon, chapmon,
        //dodomon, dorimon, dorumon, dorugamon, doruGreymon, alphamon, alphamonOuryuken, dorugoramon,
        //dokimon, bibimon, pulsemon, bulkmon, boutmon, kazuchimon,
        fufumon, kyokyomon,
        jyarimon, gigimon, guilmon, growlmon, warGrowlmon, gallantmon, megidramon,
        keemon, yaamon,
        ketomon, hopmon,
        kuramon, tsumemon,
        metalKoromon, kapurimon, monimon,
        mokumon, demiMeramon, koZenimon,
        //leafmon, minomon, wormmon, stingmon, jewelBeemon, banchoStingmon,
        //nyokimon, yokomon, biyomon, birdramon, garudamon, hououmon,
        //pabumon, motimon, tentomon, kabuterimon, megaKabuterimon, herculesKabuterimon, tyrantKabuterimon,
        pafumon, kyaromon,
        paomon, xiaomon,
        petitmon, babydmon,
        //pichimon, bukamon, gomamon, ikkakumon, zudomon, vikemon,
        popomon, frimon, sunmon,
        //poyomon, tokomon, patamon, angemon, magnaAngemon, seraphimon,
        punimon, tsunomon, gabumon, garurumon, wereGarurumon, metalGarurumon, omegamon, wanyamon,
        pupumon, puroromon,
        //pururumon, poromon, hawkmon, aquilamon, silphymon, valkyrimon,
        pusumon, pusurimon,
        puttimon, cupimon,
        puwamon, chicchimon, pinamon, torikaraBallmon,
        relemon, viximon,
        sakumon, sakuttomon,
        //tsubumon, upamon, armadillomon, ankylomon, shakkoumon, slashAngemon,
        //yukimiBotamon, nyaromon, salamon, gatomon, angewomon, mastemon, ophanimon, ordinemon, magnadramon,
        yuramon, budmon, rafflesimon, tanemon, palmon, togemon, lillymon, rosemon, rafflesimon,
        zerimon, gummymon,
        zurumon, pagumon,
    ]
export default digimon;