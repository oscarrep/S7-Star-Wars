import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  episode: any
  episodeText: { title: string; subtitle: string; par: string; par2: string; par3: string; }[] = [
    {
      title: 'Episode I',
      subtitle: 'The Phantom Menace',
      par: `Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute.`,
      par2: `Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo.`,
      par3: `While the Congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict....`
    },
    {
      title: 'Episode II',
      subtitle: 'Attack of the Clones',
      par: `There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic.`,
      par2: `This separatist movement, under the leadership of the mysterious Count Dooku, has made it difficult for the limited number of Jedi Knights to maintain peace and order in the galaxy.`,
      par3: `Senator Amidala, the former Queen of Naboo, is returning to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC to assist the overwhelmed Jedi....`
    },
    {
      title: 'Episode III',
      subtitle: 'Revenge of the Sith',
      par: `War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku. There are heroes on both sides. Evil is everywhere.`,
      par2: `In a stunning move, the fiendish droid leader, General Grievous, has swept into the Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate.`,
      par3: `As the Separatist Droid Army attempts to flee the besieged capital with their valuable hostage, two Jedi Knights lead a desperate mission to rescue the captive Chancellor....`
    },
    {
      title: 'Episode IV',
      subtitle: 'A New Hope',
      par: `It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.`,
      par2: `During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an
      entire planet.`,
      par3: `Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....`
    },
    {
      title: 'Episode V',
      subtitle: 'The Empire Strikes Back',
      par: `It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.`,
      par2: `Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth.`,
      par3: `The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space....`
    },
    {
      title: 'Episode VI',
      subtitle: 'Return of the Jedi',
      par: `Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt.`,
      par2: `Little does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored space station even more powerful than the first dreaded Death Star.`,
      par3: `When completed, this ultimate weapon will spell certain doom for the small band of rebels struggling to restore freedom to the galaxy....`
    },
    {
      title: 'Episode VII',
      subtitle: 'The Force Awakens',
      par: `Luke Skywalker has vanished. In his absence, the sinister FIRST ORDER has risen from the ashes of the Empire and will not rest until Skywalker, the last Jedi, has been destroyed.`,
      par2: `With the support of the REPUBLIC, General Leia Organa leads a brave RESISTANCE. She is desperate to find her brother Luke and gain his help in restoring peace and justice to the galaxy....`,
      par3: `Leia has sent her most daring pilot on a secret mission to Jakku, where an old ally has discovered a clue to Luke's whereabouts....`
    },
    {
      title: 'Episode VIII',
      subtitle: 'The Last Jedi',
      par: `The FIRST ORDER reigns. Having decimated the peaceful Republic, Supreme Leader Snoke now deploys his merciless legions to seize military control of the galaxy.`,
      par2: `Only General Leia Organa's band of RESISTANCE fighters stand against the rising tyranny, certain that Jedi Master Luke Skywalker will return and restore a spark of hope to the fight....`,
      par3: `But the Resistance has been exposed. As the First Order speeds toward the rebel base, the brave heroes mount a desperate escape....`
    },
    {
      title: 'Episode IX',
      subtitle: 'The Rise of Skywalker',
      par: `The dead speak! The galaxy has heard a mysterious broadcast, a threat of REVENGE in the sinister voice of the late EMPEROR PALPATINE.`,
      par2: `GENERAL LEIA ORGANA dispatches secret agents to gather intelligence, while REY, the last hope of the Jedi, trains for battle against the diabolical FIRST ORDER....`,
      par3: `Meanwhile, Supreme Leader KYLO REN rages in search of the phantom Emperor, determined to destroy any threat to his power....`
    },
  ]


  ngOnInit() {
    this.pickRandomEpisode();
  }

  pickRandomEpisode(): { title: string; subtitle: string; text: string; } {
    this.episode = this.episodeText[Math.floor(Math.random() * this.episodeText.length)];
    return this.episode;
  }

}
