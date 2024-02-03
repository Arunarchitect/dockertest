import pImg from '../../images/joseph.jpg';
import pImge from '../../images/p1.jpg';
import lImage from '../../images/Lakme.jpg';
import SImage from '../../images/Suresh.jpg';
import anImage from '../../images/anish.jpg';
import jImage from '../../images/joseph.jpg';
import AbImage from '../../images/Abu.jpg';
import caI from '../../images/cap.jpg';
import mI from '../../images/mini.jpg';
import muI from '../../images/mukesh.jpg';
import maI from '../../images/mangad.jpg';

const portData = [
  {
    id: 1,
    title: 'Lakme Salon',
    status:'Built-2023',
    
    imgUrl: lImage,
    category: 'Commercial',
    location: 'Thevally, Kollam',
    lUrl:'https://maps.app.goo.gl/yGaXhAgAfy2aHNwZ6',
    client:'Mr. RajKumar',
    design: ['Architect'],
    exec:['Noufal','Arun Raj'],
    description: "The project’s conceptualization aimed at transforming the existing residence into a multifaceted  commercial space, blending elements of luxury, relaxation, and creativity. The envisioned establishment will house a boutique, spa, and a dance studio, complemented by a private suite.The design phase commenced in December 2021, marking the initiation of our creative journeytowards realizing your vision and the first set of finalised drawings and renderings were issued on 8 January 2022.  To guarantee the structural integrity and safety of the envisioned space, we engaged the expertise of Dr. Lalu Mangal for comprehensive structural consultation. Dr. Mangal’s extensive experience and proficiency in structural engineering have proven invaluable in shaping the project’s foundation",
    fields: ['minimalist', 'energy-efficient'],
    phil:'The project’s conceptualization aimed at transforming the existing residence into a multifaceted  commercial space, blending elements of luxury, relaxation, and creativity.  '
  },
  {
    id: 2,
    title: 'Jayashree Arcade',
    status:'Built-2023',
    imgUrl: SImage,
    category: 'Commercial',
    location: 'Thevally, Kollam',
    lUrl:'https://maps.app.goo.gl/yGaXhAgAfy2aHNwZ6',
    client:'Mr. RajKumar',
    design: ['Architect'],
    exec:['Noufal','Arun Raj'],
    description: 'Located in Ashramam , Kollam',
    fields: ['classic', 'spacious'],
    phil:'The project’s conceptualization aimed at transforming the existing residence into a multifaceted  commercial space, blending elements of luxury, relaxation, and creativity.  '
  },
  {
    id: 3,
    title: "Dr. Pramod's Roots and Canals",
    status:'Built-2023',
    imgUrl: pImge,
    category: 'Hospital',
    location: 'Thevally, Kollam',
    lUrl:'https://maps.app.goo.gl/yGaXhAgAfy2aHNwZ6',
    client:'Mr. RajKumar',
    design: ['Architect'],
    exec:['Noufal','Arun Raj'],
    description: 'The dental clinic in Kollam is a harmonious blend of modernity and functionality, thoughtfully designed to create a welcoming and soothing environment for patients. Located in the heart of Kollam, the clinic boasts a contemporary facade that reflects a commitment to cutting-edge dental care. The interiors are characterized by a palette of calming colors, with natural light flooding in through strategically placed windows, enhancing the overall sense of openness and tranquility. The reception area is equipped with comfortable seating, and the decor incorporates elements inspired by local culture, creating a sense of familiarity for patients. State-of-the-art dental equipment is seamlessly integrated into treatment rooms, ensuring efficiency and precision in procedures. The clinic\'s design prioritizes patient comfort, privacy, and accessibility, fostering an atmosphere that promotes oral health and well-being.',
    fields: ['medical', 'accessible'],
    phil:'The project’s conceptualization aimed at transforming the existing residence into a multifaceted  commercial space, blending elements of luxury, relaxation, and creativity.  '
  },
  {
    id: 4,
    title: 'Dr.Anish',
    status:'Built-2024',
    imgUrl: anImage,
    category: 'Plan',
    location: 'Thevally, Kollam',
    lUrl:'https://maps.app.goo.gl/yGaXhAgAfy2aHNwZ6',
    client:'Mr. RajKumar',
    design: ['Architect'],
    exec:['Noufal','Arun Raj'],
    description: 'Description for Project 4',
    fields: ['architectural', 'urban'],
    phil:'The project’s conceptualization aimed at transforming the existing residence into a multifaceted  commercial space, blending elements of luxury, relaxation, and creativity.  '
  },
  {
    id: 5,
    title: 'Abu Shahman',
    status:'Unbuilt',
    imgUrl: AbImage,
    category: 'Commercial',
    location: 'Thevally, Kollam',
    lUrl:'https://maps.app.goo.gl/yGaXhAgAfy2aHNwZ6',
    client:'Mr. RajKumar',
    design: ['Architect'],
    exec:['Noufal','Arun Raj'],
    description: 'Description for Project 5',
    fields: ['minimalist', 'energy-efficient'], 
    phil:'The project’s conceptualization aimed at transforming the existing residence into a multifaceted  commercial space, blending elements of luxury, relaxation, and creativity.  '
  },
  {
    id: 6,
    title: 'Residence for Dr.Manoj & Dr.Mini',
    status:'Unbuilt',
    imgUrl: mI,
    category: 'House',
    location: 'Karunagappally',
    lUrl:'',
    client:'Dr.Manoj & Dr.Mini',
    design: ['Architect'],
    exec:['Noufal','Arun Raj'],
    description: 'Description for Project 6',
    fields: ['innovative', 'patient-focused'],
    phil:'The design of the project was conceived by integrating colonial and modern features of architecture in the context of Kerala.'
  },
  {
    id: 7,
    title: 'Residence Renovation: Mukesh MLA',
    status:'Unbuilt',
    imgUrl: muI,
    category: 'Plan',
    location: 'Thevally, Kollam',
    lUrl:'https://maps.app.goo.gl/yGaXhAgAfy2aHNwZ6',
    client:'Mr. RajKumar',
    design: ['Architect'],
    exec:['Noufal','Arun Raj'],
    description: 'Description for Project 7',
    fields: ['landscape', 'community'],
    phil:'The project’s conceptualization aimed at transforming the existing residence into a multifaceted  commercial space, blending elements of luxury, relaxation, and creativity.  '
  },
  {
    id: 8,
    title: 'Mangad Bank',
    status:'Unbuilt',
    imgUrl: pImg,
    category: 'House',
    location: 'Thevally, Kollam',
    lUrl:'https://maps.app.goo.gl/yGaXhAgAfy2aHNwZ6',
    client:'Mr. RajKumar',
    design: ['Architect'],
    exec:['Noufal','Arun Raj'],
    description: 'Description for Project 8',
    fields: ['contemporary', 'eco-friendly'],
    phil:'The project’s conceptualization aimed at transforming the existing residence into a multifaceted  commercial space, blending elements of luxury, relaxation, and creativity.  '
  },
  {
    id: 9,
    title: 'Residence for Mr. Ravikumar',
    status:'Unbuilt',
    imgUrl: pImg,
    category: 'House',
    location: 'Thevally, Kollam',
    lUrl:'https://maps.app.goo.gl/yGaXhAgAfy2aHNwZ6',
    client:'Mr. Ravikumar',
    design: ['Architect'],
    exec:['Noufal','Arun Raj'],
    description: 'Description for Project 9',
    fields: ['technological', 'healing'],
    phil:'The project’s conceptualization aimed at transforming the existing residence into a multifaceted  commercial space, blending elements of luxury, relaxation, and creativity.  '
  },
  {
    id: 10,
    title: 'Residence for Mr. Joseph',
    status:'Unbuilt',
    imgUrl: jImage,
    category: 'Plan',
    location: 'Thevally, Kollam',
    lUrl:'https://maps.app.goo.gl/yGaXhAgAfy2aHNwZ6',
    client:'Mr. RajKumar',
    design: ['Architect'],
    exec:['Noufal','Arun Raj'],
    description: 'Description for Project 10',
    fields: ['functional', 'efficient'],
    phil:'The project’s conceptualization aimed at transforming the existing residence into a multifaceted  commercial space, blending elements of luxury, relaxation, and creativity.  '
  },
  {
    id: 11,
    title: 'Renovation of Capithans Theatre ',
    status:'Unbuilt',
    imgUrl: caI,
    category: 'Commercial',
    location: 'Kavanad',
    lUrl:'https://maps.app.goo.gl/yGaXhAgAfy2aHNwZ6',
    client:'Mr. RajKumar',
    design: ['Architect'],
    exec:['Noufal','Arun Raj'],
    description: 'Description for Project 11',
    fields: ['luxurious', 'smart-home'],
    phil:'The project’s conceptualization aimed at transforming the existing residence into a multifaceted  commercial space, blending elements of luxury, relaxation, and creativity.  '
  },
  {
    id: 12,
    title: 'Co Operative Society Bank ',
    status:'Unbuilt',
    imgUrl: maI,
    category: 'Commercial',
    location: 'Mangad, Kollam',
    lUrl:'https://maps.app.goo.gl/yGaXhAgAfy2aHNwZ6',
    client:'Mr. RajKumar',
    design: ['Architect'],
    exec:['Noufal','Arun Raj'],
    description: 'Description for Project 12',
    fields: ['research', 'healing-environment'],
    phil:'The project’s conceptualization aimed at transforming the existing residence into a multifaceted  commercial space, blending elements of luxury, relaxation, and creativity.  '
  },
];

export default portData;
