import React from 'react';
import styles from '@/styles/Art.module.css';

interface ArtImage {
  name: string;
  link: string;
  type: string;
//   metadata: {
//     height: number;
//     width: number;
//   };
  attr: string[];
  date:string;
  hype:boolean;
}

const artData: ArtImage[] = [{
    "name": "Art - Tanjiro Kamado",
    "link": "0025.webp",
    "type": "art",
    "attr": [
        "Sanjeev Raj Ganji"
    ],
    "date": "2021-08-29T18:30:00.000Z",
    "hype": true
},
{
    "name": "Art - Saitama",
    "link": "0019.webp",
    "type": "art",
    "attr": [
        "Garima Mendhe"
    ],
    "date": "2021-08-13T18:30:00.000Z",
    "hype": true
},
{
    "name": "Art - Kirigakure Shinobi Massacre",
    "link": "0012.webp",
    "type": "art",
    "attr": [
        "Arpit Das"
    ],
    "date": "2020-05-12T18:30:00.000Z",
    "hype": true
},
{
    "name": "Art - Garou",
    "link": "0008.webp",
    "type": "art",
    "attr": [
        "Pritam Mallick"
    ],
    "date": "2019-10-28T00:00:00.000Z",
    "hype": true
}
];

const ArtPage: React.FC = () => {
  return (
    <div>
      <div className={styles.text}>
        Check out our content on here or on{' '}
        <a href="https://www.instagram.com/maskiitkgp" className={styles.link} target="_blank">
          Instagram
        </a>
        !
      </div>
      <section id="photos" className={styles.photos}>
        {artData.map((img, index) => (
          <div className={styles.imgContainer} key={index}>
            <img
              id={`img-${index}`}
              src={`/assets/art/${img.link}`}
              style={{
                // height: `calc(var(--col-width)*${img.metadata.height}/${img.metadata.width})`,
              }}
              loading="lazy"
            />
            <div className={styles.overlay}>
              <h1>{img.name.replace('Art - ', '')}</h1>
              <h3>{img.attr.join(', ')}</h3>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ArtPage;
