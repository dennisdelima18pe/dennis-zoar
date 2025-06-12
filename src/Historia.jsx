import { useState, useRef, useEffect } from 'react'
import './App.css'
import { DateTime } from "luxon";



function TimeDifference({ fromDate }) {
  const [diff, setDiff] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = DateTime.now();
      const from = DateTime.fromISO(fromDate);
      const dur = now.diff(from, ["years", "months", "days", "hours", "minutes", "seconds"]).toObject();

      const pad = (n) => String(Math.floor(n)).padStart(2, "0");

      const formatted = `${pad(dur.years)} ano${Math.floor(dur.years) !== 1 ? "s" : ""} ` +
                        `${pad(dur.months)} mês${Math.floor(dur.months) !== 1 ? "es" : ""} ` +
                        `${pad(dur.days)} dia${Math.floor(dur.days) !== 1 ? "s" : ""} ` +
                        `${pad(dur.hours)} hora${Math.floor(dur.hours) !== 1 ? "s" : ""} ` +
                        `${pad(dur.minutes)} minuto${Math.floor(dur.minutes) !== 1 ? "s" : ""} e ` +
                        `${pad(dur.seconds)} segundo${Math.floor(dur.seconds) !== 1 ? "s" : ""}`;

      setDiff(formatted);
    }, 1000);

    return () => clearInterval(interval);
  }, [fromDate]);

  return <div>{diff}</div>;
}

function Historia() {
  const images = [
    '/assets/foto-1.jpeg',
    './assets/foto-3.jpeg',
    './assets/foto-4.jpeg',
    './assets/foto-5.jpeg',
    './assets/foto-6.jpeg',
    './assets/foto-7.jpeg',
    './assets/foto-8.jpeg',
    './assets/foto-9.jpeg',
    './assets/foto-10.jpeg',
    './assets/foto-12.jpeg',
    './assets/foto-13.jpeg',
    './assets/foto-14.jpeg',
    './assets/foto-15.jpeg',
    './assets/foto-16.jpeg',
    './assets/foto-17.jpeg',
  ];

  const carouselRef = useRef(null);

  // Controle simples do dragging
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDragging.current = false;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // velocidade de scroll
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Mesma lógica para touch events
  const onTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const onTouchEnd = () => {
    isDragging.current = false;
  };

  const onTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };
  
  return (
    <div id='tela-nossa-historia'>
     <h1 id='titulo-nossa-historia'>Dennis e Zoar</h1>
     <div
      className="carousel"
      ref={carouselRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
    >
      {images.map((src, index) => (
        <div
          className={`carousel-item ${
            // destaque central pelo scroll aproximado
            Math.round(carouselRef.current?.scrollLeft / 250) === index
              ? 'active'
              : ''
          }` }
          key={index}
        >
          <img src={src} alt={`slide-${index}`} draggable="false" />
        </div>
      ))}
    </div>
    <div id='container-coracao'>
        <div className='heart-img'>
                  <img src={"/assets/foto-2.jpeg"} />
        </div>
      
    </div>
    <p> 
      Compartilhando moomentos há
      <TimeDifference fromDate="2023-12-27T03:50:00" />   
   </p>
   <p>
    Desde 27 de Dezembro de 2023
   </p>
    
   <p>
    Você me completa de um jeito que ninguém mais consegue.
Traz alegria aos meus dias, razão para continuar, e motivos para sorrir mesmo nos momentos difíceis.
Você é, sem dúvida, a melhor coisa que me aconteceu.
Sou cada dia mais louco por você, e meu amor só cresce com o tempo.
Te amo, ontem, hoje e sempre.
    </p>  
    <h2> Te amo </h2>

    </div>
  )
}

export default Historia
