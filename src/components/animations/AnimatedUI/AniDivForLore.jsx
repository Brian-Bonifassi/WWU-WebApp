import React, { useState, useRef, useEffect } from 'react';

const AniDivForLore = ({ onClose }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const aniDivRef = useRef(null);

  const boxShadowStyle = {
    boxShadow: '0px 0px 30px 10px rgba(115,5,5,0.75)',
  };

  const handleExitClick = () => {
    setIsExiting(true); // Trigger the exit animation
    setTimeout(() => {
      onClose(); // Close the AniDiv component after the exit animation
    }, 800);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1021); // Set isMobile based on the screen width
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <div
      className={`${
        isExiting ? 'exitAnimation' : 'entranceAnimation'
      } absolute top-0 z-10 w-full h-full bg-amber-950 bg-opacity-90 flex flex-col justify-center items-center font-serif text-white`}
      ref={aniDivRef}>
      <h1 className='mt-[3rem] text-4xl lg:text-5xl cowboy text-center'>
        UNEARTH THE UNTOLD SECRETS
      </h1>
      <h2 className=' text-xl lg:text-4xl mx-1 my-3 text-center'>
        Delve into the Dark Lore of the Wild West Undead World
      </h2>
      <div
        className={`line-animation ${
          isExiting ? 'exitAnimation' : ''
        } mb-4`}></div>
      <div className='w-[98w] lg:w-[50vw] overflow-auto hide-scrollbar p-2 text-center'>
        <h3 className='text-center text-2xl mb-2 font-bold'>The Cursed Town</h3>
        <p className='leading-7 my-5 text-lg '>
          The town once thrived amidst the desolate landscape of the Wild West.
          A beacon of prosperity fueled by the discovery of gold, it attracted
          fortune seekers and outlaws alike. However, the theft of the sacred
          gold turned the town's destiny towards a chilling nightmare. Following
          the unleashing of the curse, the town underwent a horrifying
          transformation. Life as it was known ceased to exist. The once
          bustling saloons turned silent, the lively streets emptied, and homes
          were deserted overnight. The jubilant laughter and lively banter of
          the town folk were replaced by the deathly silence of the day and the
          frightful wails of the undead that punctured the night. As the first
          light of dawn recedes, the cursed inhabitants rise from their grim
          hideouts. The restless undead wander the streets, forever trapped in
          their macabre existence, their former selves lost to the curse. The
          once vibrant town now stands a ghastly monument to its past, the
          dilapidated buildings and eerily silent streets a stark reminder of
          its fallen glory. Yet, amidst the pervasive gloom, a glimmer of hope
          remains. It is said that a group of fearless gunslingers have taken it
          upon themselves to reclaim the town. With their unwavering resolve and
          unyielding courage, they confront the undead, aiming to lift the curse
          and restore the town to its former glory. Every sunset marks the
          beginning of their terrifying battle against the cursed inhabitants.
          The sound of their six-shooters echoes through the night, a defiant
          challenge to the cursed existence imposed upon them. The battle
          against the undead is relentless and perilous, but it is a fight they
          are willing to wage for their town, their home. The town's fate hangs
          in the balance, as the epic saga of the Wild West Undead unfolds.
        </p>
        <h3 className='text-center text-2xl mb-2 font-bold'>
          The Unearthly Plague
        </h3>
        <p className='leading-7 my-5 text-lg'>
          The origins of the plague date back to a time when the lust for gold
          led the town's folk astray. Buried deep within the earth, in a sacred
          tomb forgotten by time, lay an ancient cache of gold - a treasure
          cursed by the spirits of old. Blinded by their insatiable greed, the
          town's folk disturbed the final resting place of the sacred gold,
          thereby defying an age-old pact made with the spirit realm. The
          spirits, enraged by this sacrilege, unleashed an unspeakable curse
          upon the town. Almost overnight, the men, women, and children of the
          town fell grievously ill, succumbing to an unearthly plague. As they
          drew their last mortal breath, they were reborn into a horrifying
          existence. Stricken with an unholy hunger, they rose as the undead -
          forever doomed to roam the shadows of the once-thriving town. Every
          stolen piece of the sacred gold served only to deepen the curse, tying
          the souls of the townsfolk to the realm of the undead. The very
          treasure they sought became their eternal damnation, a chilling
          testament to their grave misdeed. As the sun sets and the moon casts
          long, menacing shadows over the town, the plague-ridden undead emerge
          from their lairs. Their pitiful cries, a chilling reminder of the
          ancient curse that doomed them to their horrid fate.
        </p>
        <h3 className='text-center text-2xl mb-2 font-bold'>
          The Undying Outlaws
        </h3>
        <p className='leading-7 my-5 text-lg'>
          Born out of desperation and the will to survive, the Undying Outlaws
          are the brave souls who have dared to challenge the horrifying
          existence imposed by the curse. Each of these gritty fighters were
          once simple folk of the Wild West – farmers, bartenders, blacksmiths,
          and even some of the outlaws themselves. Their lives took a brutal
          turn when the curse struck, forever changing the course of their
          destinies. Now, they stand united in their quest to liberate their
          town from the clutches of the undead. The Undying Outlaws wield their
          weapons not just for survival, but for the promise of a life
          reclaimed. From the stalwart lawman, whose resolve never wavers in the
          face of the undead, to the hardened outcast, who seeks redemption
          through this dire battle, each outlaw has a story, a purpose that
          fuels their courage. Amidst the chilling wails of the undead, their
          six-shooters echo a defiant challenge, a testament to their unwavering
          spirit. Despite the bleak reality, these brave outlaws persist, their
          resilience fueled by stories of ancient gold said to possess the power
          to lift the curse. The Outlaws seek this fabled relic, delving into
          the dark secrets of the town, hoping to unearth the truth and reclaim
          their homeland. Their journey is fraught with dangers lurking around
          every corner. Yet, they march on, etching their saga of courage and
          defiance in the annals of the Wild West Undead. Their unwavering
          resolve and their indomitable spirit are the last bastions of hope for
          a town that has lost all. For it's not just about survival, it's about
          taking back their home, their town, their Wild West. The tale of the
          Undying Outlaws is one of unwavering courage, unyielding will, and an
          undying spirit, a testament to the resilient spirit of humanity amidst
          the direst of circumstances.
        </p>
        <h3 className='text-center text-2xl mb-2 font-bold'>
          The Eternal Struggle
        </h3>
        <p className='leading-7 my-5 text-lg'>
          In the dusty heart of the Wild West, the struggle is as ceaseless as
          the desert wind. The undead inhabitants, condemned to their cursed
          existence, wage an unending battle against the Undying Outlaws, a
          dedicated group of survivors who refuse to let the town - and their
          lives - be swallowed by the nightmarish plague. Each night, the
          streets echo with the eerie sound of gunshots and the growls of the
          undead. Each day, the townsfolk nurse their wounds, bury their dead,
          and prepare for the coming darkness. It is a cycle that has continued
          for years, a testament to both the relentlessness of the undead and
          the unbreakable spirit of the townsfolk. Yet, amid this dire
          situation, there is a faint spark of hope. Legends tell of a hidden
          relic deep within the mine where the cursed gold was first discovered.
          The relic, referred to in whispers as the Grail of the Damned, is said
          to possess the power to lift the curse and restore peace. The Undying
          Outlaws, spurred on by this glimmer of hope, brave the deadly streets
          and the terrifying mine depths, seeking the solution to their town's
          plight. Will they reclaim their town and free it from its undead
          shackles? Or will they fall, one by one, to the relentless tide of the
          undead? The eternal struggle continues, and only time will reveal the
          fate of these brave souls and the town they call home.
        </p>
      </div>
      <div className='absolute top-[20%] right-[8%] w-[50vw] flex flex-col justify-center items-center text-center'></div>

      <button
        style={boxShadowStyle}
        className={`${
          isExiting ? 'exitAnimation' : 'entranceAnimation'
        } absolute z-10 top-[10px] right-[10px] cursor-pointer border-solid border-2 border-white rounded-md p-1`}
        onClick={handleExitClick}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 16 16'
          className={isExiting ? 'exitButtonAnimation' : ''}>
          <path
            fill='#ffffff'
            d='M15.354 13.646L10 8.293l5.354-5.353a.5.5 0 1 0-.708-.708L9.293 7.586 3.94 2.233a.5.5 0 0 0-.708.708L8.586 8l-5.354 5.354a.5.5 0 0 0 .708.708L8 8.707l5.354 5.354a.5.5 0 0 0 .708-.708z'
          />
        </svg>
      </button>
    </div>
  );
};

export default AniDivForLore;
