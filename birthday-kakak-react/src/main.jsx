
import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { Heart, Sparkles, Star } from 'lucide-react';
import './style.css';

const memories = [
  {
    id: '01',
    side: 'left',
    image: 'p1.jpeg',
    text: `Semoga kakak selalu diberikan kesehatan, kebahagiaan, dan dikelilingi oleh orang-orang baik yang tulus menyayangi kakak. Semoga segala hal yang sedang kakak usahakan bisa berjalan dengan lancar dan satu per satu impian kakak bisa tercapai. Semangat terus ya, Kak! Jangan lupa istirahat yang cukup, makan teratur, dan jangan terlalu memaksakan diri. Kakak juga harus menjaga diri sendiri, yaa!`,
    note: '♡',
    crop: '48% 52%',
  },
  {
    id: '02',
    side: 'right',
    image: 'p2.jpeg',
    text: `Walaupun di sisi lain, sekarang komentarku jadi sering nggak kebaca huhu｡⁠:ﾟ⁠(⁠;⁠´⁠∩⁠\`⁠;⁠)ﾟ⁠:⁠｡ Tapi nggak apa-apa kok, aku tetap senang melihat kakak berkembang sejauh ini. Justru aku ikut bahagia karena semakin banyak orang yang bisa mengenal dan menikmati hal-hal baik dari kakak.`,
    note: '♡',
    crop: '50% 35%',
  },
  {
    id: '03',
    side: 'left',
    image: 'p3.jpeg',
    text: `Terima kasih juga karena sudah menjadi salah satu bagian yang menyenangkan dalam hidupku. Berkat kakak, aku bisa mendapatkan banyak pengalaman baru yang sebelumnya mungkin nggak pernah aku bayangkan. Aku juga jadi bisa bertemu dan berteman dengan orang-orang baik seperti Ayya, Shizu, Nana, dan teman-teman lainnya. Kalau dipikir-pikir, lucu juga ya, bagaimana awalnya aku cuma datang untuk menonton kakak, tetapi ternyata aku bisa mendapatkan banyak kenangan dan pertemanan berharga dari sana. Rasanya bersyukur sekali bisa menjadi bagian kecil dari perjalanan ini. Jadi, terima kasih ya, Kak, sudah secara nggak langsung mempertemukan aku dengan banyak hal menyenangkan. Semoga semua kenangan baik itu bisa terus bertambah ke depannya! (⁠◕⁠ᴗ⁠◕⁠✿⁠)`,
    note: '♡',
    crop: '50% 68%',
  },
  {
    id: '04',
    side: 'right',
    image: 'p4.jpeg',
    text: `Maaf ya, Kak, akhir-akhir ini aku jarang join live kakak selama beberapa bulan. Soalnya aku lagi banyak laprak huhu TwT. Tapi sebentar lagi aku libur dan bisa join live kakak lagi. Aku nggak sabar bisa nonton kakak dan menggambar kakak lagi kayak dulu. Tapi aku harus melewati siksaan dunia bernama pembukuan ini dulu.`,
    note: '♡',
    crop: '52% 50%',
  },
  {
    id: '05',
    side: 'left',
    image: 'p5.jpeg',
    text: `Doakan aku bisa melewati semuanya dengan selamat ya, Kak, HAHAHA. (⁠╥⁠▽⁠╥⁠) Kakak jangan lupain aku dulu, ya? Aku yang ini, Kak, semisal aja kakak lupa (⁠´⁠ ⁠.⁠ ⁠.̫⁠ ⁠.⁠ ⁠\`⁠).`,
    note: '♡',
    crop: '48% 45%',
  },
  {
    id: '06',
    side: 'right',
    image: 'p6.jpeg',
    text: `Untuk ke depannya, aku berharap kakak bisa semakin sukses, semakin bahagia, dan selalu dipertemukan dengan hal-hal baik. Semoga perjalanan kakak ke depannya dipenuhi banyak kesempatan menyenangkan, orang-orang yang tulus, serta pencapaian yang bisa membuat kakak bangga terhadap diri sendiri. Kalau suatu hari nanti ada masa-masa yang terasa berat, semoga kakak selalu punya alasan untuk tetap tersenyum dan semangat menjalani hari.`,
    note: '♡',
    crop: '50% 55%',
  },
  {
    id: '07',
    side: 'left',
    image: 'p7.jpeg',
    text: `Dan satu hal yang ingin aku sampaikan, tetaplah menjadi diri kakak sendiri, ya. Jangan sampai kehilangan diri sendiri hanya karena terlalu sibuk berusaha membahagiakan orang lain. Kakak juga berhak untuk merasa lelah, beristirahat, membuat kesalahan, dan punya waktu untuk diri sendiri. Nggak harus selalu terlihat baik-baik saja di hadapan semua orang. Jangan terlalu keras terhadap diri sendiri, ya, Kak. Kebahagiaan kakak juga sama pentingnya dengan kebahagiaan orang-orang yang kakak sayangi. Aku harap kakak bisa terus melakukan hal-hal yang kakak sukai tanpa merasa harus menjadi orang lain demi memenuhi ekspektasi siapa pun.`,
    note: '♡',
    crop: '50% 40%',
  },
  {
    id: '08',
    side: 'right',
    image: 'p8.jpeg',
    text: `Semoga bertambahnya usia membawa lebih banyak kebahagiaan, pengalaman baru, cerita indah, dan kesempatan untuk mewujudkan hal-hal yang selama ini kakak impikan. Semoga tahun ini menjadi salah satu tahun terbaik dalam hidup kakak, bahkan lebih baik dari tahun-tahun sebelumnya. Jangan lupa menikmati setiap prosesnya, sekecil apa pun pencapaian yang berhasil kakak raih.`,
    note: '♡',
    crop: '52% 50%',
  },
  {
    id: '09',
    side: 'left',
    image: 'p9.jpeg',
    text: `Terima kasih sudah hadir dan menjadi bagian dari banyak cerita menyenangkan. Semoga suatu saat nanti, ketika kakak melihat kembali perjalanan yang sudah dilewati, kakak bisa tersenyum bangga dan berkata bahwa semuanya ternyata sangat berharga.`,
    note: '♡',
    crop: '48% 55%',
  },
  {
    id: '10',
    side: 'right',
    image: 'p10.jpeg',
    text: `Sekali lagi, HAPPY BIRTHDAY, KAKAKKK!! (⁠≧⁠▽⁠≦⁠) ♡`,
    note: '♡',
    crop: '50% 50%',
  },
];

function Photo({ item }) {
  return (
    <div
      className={`photo-wrap ${item.side}`}
      aria-label="Foto kenangan bergaya polaroid"
    >
      <div className="photo-back back-one" />
      <div className="photo-back back-two" />

      <figure className="polaroid">
        <img
          src={`/images/${item.image}`}
          alt="Foto kenangan"
          style={{ objectPosition: item.crop }}
        />
        <figcaption>{item.note}</figcaption>
      </figure>

      <span className="photo-sparkle">
        <Sparkles size={18} />
      </span>
    </div>
  );
}

function LetterCard({ item }) {
  return (
    <article
      className={`letter-row ${item.side}`}
      id={`letter-${item.id}`}
    >
      <section className="letter-card">
        <p>{item.text}</p>
      </section>

      <Photo item={item} />
    </article>
  );
}

function App() {
  const audioRef = useRef(null);

  const startMusic = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch((error) => {
        console.log('Musik belum bisa diputar:', error);
      });
    }
  };

  return (
    <main className="page-shell" onClick={startMusic}>

      {/* MUSIK BACKGROUND */}
      <audio
        ref={audioRef}
        src="/music/lagu.mp3"
        loop
        preload="auto"
      />

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="hero">
        <div className="eyebrow">
          <Star size={13} fill="currentColor" />
          a little birthday letter
          <Star size={13} fill="currentColor" />
        </div>

        <h1>
          Happy birthday,
          <br />
          <em>Kakakkk!</em>
        </h1>

        <p className="hero-subtitle">
          A small collection of wishes, gratitude, and lots of love.
        </p>

        <div className="hero-heart">
          <Heart size={20} fill="currentColor" />
        </div>

        <div className="scroll-cue">
          <span />
          scroll to read
        </div>
      </header>

      <section className="letters" aria-label="Ucapan ulang tahun">
        {memories.map((item) => (
          <LetterCard key={item.id} item={item} />
        ))}
      </section>

      <footer className="closing">
        <div className="closing-line" />

        <Sparkles size={20} />

        <p>sending you the warmest wishes</p>

        <h2>Have the sweetest year ahead!</h2>

        <span className="closing-heart">♡</span>
      </footer>

      <div className="tiny-footer">
        a birthday note, just for you · 2026
      </div>

    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
