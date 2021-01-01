class Digimon  {
    constructor()
    {
        this.name = "N";
        this.level = "L";
        this.attribute = "A";
        this.type = "T";
        this.attack = "A";
        this.img = "I";
    }
}
class Fresh extends Digimon{
    constructor(name, attack, img){
    super();
    this.name = name;
    this.level = "Fresh";
    this.attribute = "Free";
    this.type = "Neutral"
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
    this.attribute = "Free";
    this.type = "Neutral";
    this.attack = attack;
    this.img = img;
    }
}
class Rookie extends Digimon{
    constructor(name, attribute, type, attack, img)
    {
    super();
    this.name = name;
    this.level = "Rookie";
    this.attribute = attribute;
    this.type = type;
    this.attack = attack
    this.img = img;
    }
}
class Champion extends Digimon{
    constructor(name, attribute, type, attack, img)
    {
    super();
    this.name = name;
    this.level = "Champion";
    this.attribute = attribute;
    this.type = type;
    this.attack = attack;
    this.img = img;
    }
}
class Ultimate extends Digimon{
    constructor(name, attribute, type, attack, img)
    {
    super();
    this.name = name;
    this.level = "Ultimate";
    this.attribute = attribute;
    this.type = type;
    this.attack = attack;
    this.img = img;
    }
}
class Mega extends Digimon{
    constructor(name, attribute, type, attack, img)
    {
    super();
    this.name = name;
    this.level = "Mega";
    this.attribute = attribute;
    this.type = type;
    this.attack = attack;
    this.img = img;
    }
}
class Ultra extends Digimon{
    constructor(name, attribute, type, attack, img)
    {
    super();
    this.name = name;
    this.level = "Ultra";
    this.attribute = attribute;
    this.type = type;
    this.attack = attack;
    this.img = img;
    }
}
//fresh
const botamon = new Fresh("Botamon", "Bubble Blow", "https://wikimon.net/images/thumb/e/ed/Botamon.jpg/120px-Botamon.jpg")
const punimon = new Fresh("Punimon", "Bubble Blow", "https://wikimon.net/images/thumb/a/a0/Punimon.jpg/120px-Punimon.jpg")
//in-training
const koromon = new InTraining("Koromon", "Bubble Blow", "https://wikimon.net/images/thumb/6/6e/Koromon.jpg/120px-Koromon.jpg" )
const tsunomon = new InTraining("Tsunomon", "Bubble Blow", "https://wikimon.net/images/thumb/0/08/Tsunomon2.jpg/120px-Tsunomon2.jpg")
//rookie
const agumon = new Rookie("Agumon", "Vaccine", "Fire", "Pepper Breath", "https://wikimon.net/images/thumb/7/72/Agumon.jpg/120px-Agumon.jpg")
const gabumon = new Rookie("Gabumon", "Data", "Fire", "Blue Blaster", "https://wikimon.net/images/thumb/7/71/Gabumon.jpg/120px-Gabumon.jpg")
//champion
const garurumon = new Champion("Garurumon", "Vaccine", "Fire", "Howling Blaster", "https://wikimon.net/images/thumb/5/57/Garurumon.jpg/120px-Garurumon.jpg")
const greymon = new Champion("Greymon", "Vaccine", "Fire", "Nova Blast", "https://wikimon.net/images/thumb/6/6c/Greymon.jpg/120px-Greymon.jpg")
//ultimate
const metalGreymon = new Ultimate("MetalGreymon", "Vaccine", "Fire", "Mega Claw or Giga Blaster", "https://wikimon.net/images/thumb/d/d8/Metalgreymon.jpg/120px-Metalgreymon.jpg")
const wereGarurumon = new Ultimate("WereGarurumon", "Vaccine", "Earth", "Wolf Claw or Garuru Kick", "https://wikimon.net/images/thumb/8/8f/Weregarurumon.jpg/120px-Weregarurumon.jpg")
//mega
const metalGarurumon = new Mega("MetalGarurumon", "Data", "Ice", "Metal Wolf Claw or Garuru Tomahawk", "https://wikimon.net/images/thumb/0/0d/Metalgarurumon2.jpg/120px-Metalgarurumon2.jpg" )
const warGreymon = new Mega("WarGreymon", "Vaccine", "Fire", "Terra Force or Great Tornado", "https://wikimon.net/images/thumb/9/94/Wargreymon.jpg/120px-Wargreymon.jpg")
//ultra
const omegamon = new Ultra("Omegamon", "Vaccine", "Holy", "Supreme Cannon or Transcendant Sword", "https://wikimon.net/images/thumb/7/78/Omegamon.jpg/120px-Omegamon.jpg")
export const digimon =
    [
        botamon, koromon, agumon, greymon, metalGreymon, warGreymon,
        punimon, tsunomon, gabumon, garurumon, wereGarurumon, metalGarurumon,
        omegamon
    ]
export default digimon;