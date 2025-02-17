import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/style/hero.css';

export default function Hero() {
  const { t } = useTranslation();

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js';
    script.async = true;
    script.onload = () => {
      if ((window as any).particlesJS) {
        (window as any).particlesJS('particles-js', {
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#FFFFFF', // Цвет частиц — белый
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000',
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#FFFFFF', // Цвет линий между частицами — белый
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'attract',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              attract: {
                distance: 400,
                duration: 0.2,
              },
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 50,
                duration: 2,
                opacity: 8,
                speed: 1,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Запрет копирования и выделения текста
  useEffect(() => {
    const disableSelect = (e: Event) => e.preventDefault();

    document.addEventListener('contextmenu', disableSelect);
    document.addEventListener('selectstart', disableSelect);

    return () => {
      document.removeEventListener('contextmenu', disableSelect);
      document.removeEventListener('selectstart', disableSelect);
    };
  }, []);

  return (
    <section className="bg-customDark relative min-h-screen flex items-center justify-center overflow-hidden select-none">
      {/* Контейнер для частиц */}
      <div id="particles-js" className="absolute top-0 left-0 w-full h-full z-0"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-100">
          {t('hero.titleLine1')}
          <br />
          {t('hero.titleLine2')}
        </h1>
      </div>
    </section>
  );
}
