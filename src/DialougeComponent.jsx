import React from 'react';

export function Dialouge() {

  function speakDialouge() {
    const Dialouges = ['You always have a choice.',
      'I believe in work, I don\'t fuck with luck.',
      'It\'s going to happen, because I am going to make it happen.',
      'The only time success comes before work is in the dictionary.',
      'Kill them with success. Bury them with a smile.',
      'People respond to how we\'re dressed, so like it or not this is what you have to do.',
      'Never give up on something that you can’t go a day without thinking about.',
      'According to me is the only according to that matters.',
      'If you kinda sorta try, then you kinda sorta fail.',
      'I\'m against having emotions, not against using them.',
      'Ever loved someone so much, you would do anything for them? Yeah, well make that someone yourself and do whatever the hell you want.',
      'Sorry, I can’t hear you over the sound of how awesome I am.',
      'It\'s not bragging if it’s true.',
      'If they think you care, they\'ll walk all over you.',
      'Have goals so big you get uncomfortable telling small minded people.',
      'Life has two rules: 1. Never quit. 2. Always remember rule #1.',
      '97% of people who gave up are employed by the 3% who never gave up.',
      'I refuse to answer that on the grounds I don’t want to.',
      'Anyone can do my job, but no one can be me.',
      'I don\'t have dreams, I have goals.',
      'Focus on making yourself better. Not on thinking that you are better.',
      'I\'m working on myself, for myself, by myself.',
      'Don\'t waste your time with explanations. People only hear what they want to hear.',
      'Whoever is trying to bring you down is already below you.',
      'Let them hate. Just make sure they spell your name right.',
      'Life is a game. Play to win.',
      'When you\'re backed against the wall, break the goddamn thing down.',
      'Winners don\'t make excuses.',
      'I\'m not interested in great, I want to know who its Daddy is.',
      'Don\'t raise your voice, improve your argument.',
      'Win a no win situation by rewriting the rules.',
      'That\'s the difference between you and me. You wanna lose small, I wanna win big.',
      'I like to smile at people who don\'t like me.',
      'When achieving your goal is more important than partying, welcome to the 1%.',
      'Sometimes good guys gotta do bad things to make the bad guys pay.'
    ]
    const len = Dialouges.length
    const dialouge = Dialouges[Math.floor(Math.random() * len)]
    const sp = new SpeechSynthesisUtterance(dialouge);
    sp.lang = 'en-UK';
    // For different voices use getVoices() method.
    // [sp.voice] = speechSynthesis.getVoices();
    speechSynthesis.speak(sp);
  }

  return (
    <div>
      <p>
        Want to here a dialouge???
        <br/>
        <button onClick={speakDialouge}>
          Click Me
        </button>
      </p>
    </div>
  )
}
