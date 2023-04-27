import React,{useEffect} from 'react'

export default function HeroHeader() {
  useEffect(() => {
    const observertext = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if(entry.isIntersecting){
            entry.target.classList.add('showtext');
          }
      });
    });
    const hiddenText = document.querySelectorAll('.HeroHeader #text1');
    hiddenText.forEach((el)=> observertext.observe(el));
    const hiddenText2 = document.querySelectorAll('.HeroHeader #text2');
    hiddenText2.forEach((el) => {
      setTimeout(() => observertext.observe(el), 800);
    });
  })
  return (
        <div className='HeroHeader'>
            <h1 id='text1'>WE CAN HELP</h1>
            <br/>
            <h1 id='text2'>SAVE THE OCEANS</h1>
        </div>
      )
}
