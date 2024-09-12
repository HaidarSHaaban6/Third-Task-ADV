import firstHeroCarouselImg from "./../assets/img/hero-carousel/hero-carousel-1.jpg";
import secondHeroCarouselImg from "./../assets/img/hero-carousel/hero-carousel-2.jpg";
import thirdHeroCarouselImg from "./../assets/img/hero-carousel/hero-carousel-3.jpg";
import firstDepartmentImg from "./../assets/img/departments-1.jpg";
import secondDepartmentImg from "./../assets/img/departments-2.jpg";
import thirdDepartmentImg from "./../assets/img/departments-3.jpg";
import fourthDepartmentImg from "./../assets/img/departments-4.jpg";
import fifthDepartmentImg from "./../assets/img/departments-5.jpg";
import firstDoctorImg from "./../assets/img/doctors/doctors-1.jpg";
import secondDoctorImg from "./../assets/img/doctors/doctors-2.jpg";
import thirdDoctorImg from "./../assets/img/doctors/doctors-3.jpg";
import fourthDoctorImg from "./../assets/img/doctors/doctors-4.jpg";
import firstTestimonialImg from "./../assets/img/testimonials/testimonials-1.jpg";
import secondTestimonialImg from "./../assets/img/testimonials/testimonials-2.jpg";
import thirdTestimonialImg from "./../assets/img/testimonials/testimonials-3.jpg";
import fourthTestimonialImg from "./../assets/img/testimonials/testimonials-4.jpg";
import fifthTestimonialImg from "./../assets/img/testimonials/testimonials-5.jpg";
import firstGalleryImg from "./../assets/img/gallery/gallery-1.jpg";
import secondGalleryImg from "./../assets/img/gallery/gallery-2.jpg";
import thirdGalleryImg from "./../assets/img/gallery/gallery-3.jpg";
import fourthGalleryImg from "./../assets/img/gallery/gallery-4.jpg";
import fifthGalleryImg from "./../assets/img/gallery/gallery-5.jpg";
import sixthGalleryImg from "./../assets/img/gallery/gallery-6.jpg";
import seventhGalleryImg from "./../assets/img/gallery/gallery-7.jpg";
import eighthGalleryImg from "./../assets/img/gallery/gallery-8.jpg";
import {
  FaAward,
  FaDna,
  FaHandHoldingMedical,
  FaHeartbeat,
  FaHospitalUser,
  FaNotesMedical,
  FaThermometer,
  FaWheelchair,
} from "react-icons/fa";
import { LiaCapsulesSolid } from "react-icons/lia";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaStaffSnake,
  FaUserDoctor,
  FaXTwitter,
} from "react-icons/fa6";
import { CiHospital1 } from "react-icons/ci";
import { SlChemistry } from "react-icons/sl";
import { FaSuitcaseMedical } from "react-icons/fa6";
import { FaLungs } from "react-icons/fa";

// NavBar Data

export const navListItems = [
  { type: "navLink", value: "HOME" },
  { type: "navLink", value: "ABOUT" },
  { type: "navLink", value: "SERVICE" },
  { type: "navLink", value: "DEPARTMENTS" },
  { type: "navLink", value: "DOCTORS" },
  { type: "navLink", value: "CONTACT" },
  { type: "navDropdown", value: "INFO" },
  { type: "navDropdown", value: "LOCATION" },
  { type: "navDropdown", value: "DETAILS" },
];

// Carouse Data

export const sliderData = [
  {
    header: "Lorem ipsum dolor sit amet",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe earum porro error accusantium repellendus ex laudantium facilis, perferendis voluptas totam veniam quod aliquid iure impedit.",
    btnText: "Read More",
    imgPath: firstHeroCarouselImg,
  },
  {
    header: "Lorem ipsum dolor sit amet",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe earum porro error accusantium repellendus ex laudantium facilis, perferendis voluptas totam veniam quod aliquid iure impedit.",
    btnText: "Read More",
    imgPath: secondHeroCarouselImg,
  },
  {
    header: "Lorem ipsum dolor sit amet",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe earum porro error accusantium repellendus ex laudantium facilis, perferendis voluptas totam veniam quod aliquid iure impedit.",
    btnText: "Read More",
    imgPath: thirdHeroCarouselImg,
  },
];

// Appointment Section

export const appointmentCards = [
  {
    header: "Lorem ipsum",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
    icon: <FaHeartbeat />,
  },
  {
    header: "Lorem ipsum",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
    icon: <LiaCapsulesSolid />,
  },
  {
    header: "Lorem ipsum",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit",
    icon: <FaThermometer />,
  },
  {
    header: "Lorem ipsum",
    paragraph:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit",
    icon: <FaDna />,
  },
];

// About Us Section

export const checkedParagraph = [
  {
    id: 0,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quidem nulla.",
  },
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quidem nulla odio a repudiandae error.",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ullam cumque illum adipisci quae odio a repudiandae error, quidem nulla odio arepudiandae error.",
  },
];

export const clinicInfoCardData = [
  {
    icon: <FaUserDoctor />,
    num: 25,
    paragraph: "Doctors",
  },
  {
    icon: <CiHospital1 />,
    num: 15,
    paragraph: "Depatrments",
  },
  {
    icon: <SlChemistry />,
    num: 8,
    paragraph: "Research Labs",
  },
  {
    icon: <FaAward />,
    num: 150,
    paragraph: "Awards",
  },
];

// Feature Section

export const featuresParagraph = [
  {
    icon: <FaHandHoldingMedical />,
    header: "Lorem, ipsum dolor",
    paragraph:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto fugiat incidunt, perspiciatis accusamus dolorem quod. Dolorum,",
  },
  {
    icon: <FaSuitcaseMedical />,
    header: "Lorem, ipsum dolor",
    paragraph:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto fugiat incidunt, perspiciatis accusamus dolorem quod. Dolorum,",
  },
  {
    icon: <FaStaffSnake />,
    header: "Lorem, ipsum dolor",
    paragraph:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto fugiat incidunt perspiciatis accusamus dolorem quod. Dolorum perspiciatis accusamus dolorem quod. Dolorum,",
  },
  {
    icon: <FaLungs />,
    header: "Lorem, ipsum dolor",
    paragraph:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto fugiat incidunt, perspiciatis accusamus dolorem quod. Dolorum,",
  },
];

// Services Section

export const servicesData = [
  {
    icon: <FaHeartbeat />,
    header: "Lorem ipsum",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto fugiat incidunt, perspiciatis",
  },
  {
    icon: <LiaCapsulesSolid />,
    header: "Lorem ipsum",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto fugiat incidunt",
  },
  {
    icon: <FaHospitalUser />,
    header: "Lorem ipsum",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto fugiat incidunt",
  },
  {
    icon: <FaDna />,
    header: "Lorem ipsum",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto fugiat incidunt",
  },
  {
    icon: <FaWheelchair />,
    header: "Lorem ipsum",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto fugiat incidunt",
  },
  {
    icon: <FaNotesMedical />,
    header: "Lorem ipsum",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto fugiat incidunt",
  },
];

// Make An Appointment Section

export const departmentData = [
  {
    id: 1,
    name: "Cardiology",
    order: "first",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae culpa ad fuga provident accusamus similique corporis, quidem soluta! Pariatur sit assumenda magnam? Natus, quam, excepturi tempora, nesciunt sint minima optio ullam obcaecati quia commodi facilis voluptates quibusdam! Veniam.",
    img: firstDepartmentImg,
  },
  {
    id: 2,
    name: "Neurology",
    order: "second",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusamus commodi corrupti, expedita dolore rem molestiae cumque veritatis libero modi maxime harum nesciunt error aperiam ipsa ad ut illum distinctio.",
    img: secondDepartmentImg,
  },
  {
    id: 3,
    name: "Hepatology",
    order: "third",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ad ut illum distinctio, ipsum dolor sit amet consectetur adipisicing elit. Ratione ad ut illum distinctio, ipsum dolor sit amet consectetur adipisicing elit. Ratione ad ut illum distinctio,",
    img: thirdDepartmentImg,
  },
  {
    id: 4,
    name: "Pediatrics",
    order: "fourth",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusamus commodi corrupti, expedita dolore rem molestiae cumque veritatis libero modi maxime harum nesciunt error aperiam ipsa ad ut illum distinctio. veritatis libero modi maxime harum nesciunt error aperiam ipsa ad ut illum distinctio.",
    img: fourthDepartmentImg,
  },
  {
    id: 5,
    name: "Orthopedics",
    order: "fifth",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusamus commodi corrupti, expedita dolore rem molestiae cumque veritatis libero modi maxime harum nesciunt error aperiam ipsa ad ut illum distinctio. veritatis libero modi maxime harum nesciunt error aperiam ipsa ad ut illum distinctio.",
    img: fifthDepartmentImg,
  },
];

export const doctorsData = [
  {
    id: 1,
    name: "Walter White",
    img: firstDoctorImg,
    specialization: "Chief Medical Officer",
  },
  {
    id: 2,
    name: "Sarah Jhonson",
    img: secondDoctorImg,
    specialization: "Anesthesiologist",
  },
  {
    id: 3,
    name: "William Anderson",
    img: thirdDoctorImg,
    specialization: "Cardiology",
  },
  {
    id: 4,
    name: "Amanada Jepson",
    img: fourthDoctorImg,
    specialization: "Neurosurgeon",
  },
];

// Asked Questions Section

export const questionsData = [
  {
    id: 0,
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ad ut illum distinctio, ipsum dolor sit amet consectetur adipisicing elit. Ratione ad ut illum distinctio, ipsum dolor sit amet consectetur adipisicing elit. Ratione ad ut illum distinctio,",
  },
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet adipisicing elit ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ad ut illum distinctio, ipsum dolor sit amet consectetur adipisicing elit. Ratione ad ut illum distinctio, ipsum dolor sit amet consectetur adipisicing elit. Ratione ad ut illum distinctio,",
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ad ut illum distinctio, ipsum dolor sit amet consectetur adipisicing elit. Ratione ad ut illum distinctio, ipsum dolor sit amet consectetur adipisicing elit. Ratione ad ut illum distinctio,",
  },
  {
    id: 3,
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ad ut illum distinctio, ipsum dolor sit amet consectetur adipisicing elit. Ratione ad ut illum distinctio, ipsum dolor sit amet consectetur adipisicing elit. Ratione ad ut illum distinctio,",
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ad ut illum distinctio, ipsum dolor sit amet consectetur adipisicing elit. Ratione ad ut illum distinctio, ipsum dolor sit amet consectetur adipisicing elit. Ratione ad ut illum distinctio,",
  },
  {
    id: 5,
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ad ut illum distinctio, ipsum dolor sit amet consectetur adipisicing elit. Ratione ad ut illum distinctio, ipsum dolor sit amet consectetur adipisicing elit. Ratione ad ut illum distinctio,",
  },
];

// Pricing Sectioin

export const pricingData = [
  {
    id: 0,
    class: "Free",
    price: 0,
    property1: "Lorem ipsum",
    property2: "Lorem sit ipsum",
    property3: "Lorem dolor ipsum",
    property4: "Lorem ipsum",
    property5: "Lorem ipsum",
    btnText: "Buy Now",
    "is-available-property1": true,
    "is-available-property2": true,
    "is-available-property3": true,
    "is-available-property4": false,
    "is-available-property5": false,
    "is-business": false,
    "is-advanced": false,
  },
  {
    id: 1,
    class: "Business",
    price: 19,
    property1: "Lorem ipsum",
    property2: "Lorem sit ipsum",
    property3: "Lorem dolor ipsum",
    property4: "Lorem ipsum",
    property5: "Lorem ipsum",
    btnText: "Buy Now",
    "is-available-property1": true,
    "is-available-property2": true,
    "is-available-property3": true,
    "is-available-property4": true,
    "is-available-property5": false,
    "is-business": true,
    "is-advanced": false,
  },
  {
    id: 2,
    class: "Developer",
    price: 29,
    property1: "Lorem ipsum",
    property2: "Lorem sit ipsum",
    property3: "Lorem dolor ipsum",
    property4: "Lorem ipsum",
    property5: "Lorem ipsum",
    btnText: "Buy Now",
    "is-available-property1": true,
    "is-available-property2": true,
    "is-available-property3": true,
    "is-available-property4": true,
    "is-available-property5": true,
    "is-business": false,
    "is-advanced": false,
  },
  {
    id: 3,
    class: "Ultimate",
    price: 49,
    property1: "Lorem ipsum",
    property2: "Lorem sit ipsum",
    property3: "Lorem dolor ipsum",
    property4: "Lorem ipsum",
    property5: "Lorem ipsum",
    btnText: "Buy Now",
    "is-available-property1": true,
    "is-available-property2": true,
    "is-available-property3": true,
    "is-available-property4": true,
    "is-available-property5": true,
    "is-business": false,
    "is-advanced": true,
  },
];

// Contact Section

export const contactData = [
  {
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96771.88278147831!2d-73.9863298348157!3d40.715345322213246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250d225bfafdd%3A0x249f013a2cd25d9!2z2KzZitix2LPZiiDYs9mK2KrZitiMINmG2YrZiCDYrNmK2LHYs9mK2Iwg2KfZhNmI2YTYp9mK2KfYqiDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2snl!4v1725966839644!5m2!1sar!2snl",
    address: "A108 Adam Street, New York, NY 535022",
    tel: "+1 5589 55488 55",
    email: "info@example.com",
  },
];

// Footer Section

export const footerLinksData = [
  {
    header: "Useful Links",
    link1: "Home",
    link2: "About us",
    link3: "Services",
    link4: "Terms of service",
    link5: "Privacy Policy",
  },
  {
    header: "Our Services",
    link1: "Web Design",
    link2: "Web Development",
    link3: "Product Management",
    link4: "Marketing",
    link5: "Graphic Design",
  },
  {
    header: "Hic Solutasetp",
    link1: "Lorem ipsum dolor",
    link2: "Amet consectet",
    link3: "Ipsum dolor",
    link4: "Terms",
    link5: "Dolor sit amet",
  },
  {
    header: "Lorem ipsum",
    link1: "Lorem",
    link2: "Amet consectet",
    link3: "Services",
    link4: "Ipsum",
    link5: "Dolor",
  },
];

export const footerMainColumnData = [
  {
    header: "Medicio",
    locationStreet: "A108 Adam Street",
    locationCity: "New York, NY535022",
    phone: "+1 5589 55488 55",
    email: "info@example.com",
    iconList: [
      <FaXTwitter key="twitter" />,
      <FaFacebook key="facebook" />,
      <FaInstagram key="instagram" />,
      <FaLinkedin key="linkedin" />,
    ],
  },
];

// Testimonials Section

export const testimonialsData = [
  {
    title: "Card 1",
    description: "Description for card 1",
    image: firstTestimonialImg,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusamus commodi corrupti, expedita dolore rem molestiae cumque veritatis libero modi expedita dolore rem molestiae cumque veritatis",
    name: "Bob Karlis",
    job: "Software Developer",
  },
  {
    title: "Card 2",
    description: "Description for card 2",
    image: secondTestimonialImg,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusamus commodi corrupti, expedita dolore rem molestiae cumque veritatis libero modi expedita dolore rem molestiae cumque veritatis",
    name: "Olivia Daniel",
    job: "Doctor",
  },
  {
    title: "Card 3",
    description: "Description for card 3",
    image: thirdTestimonialImg,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusamus commodi corrupti, expedita dolore rem molestiae cumque veritatis libero modi expedita dolore rem molestiae cumque veritatis",
    name: "Jena Karlis",
    job: "Store Owner",
  },
  {
    title: "Card 4",
    description: "Description for card 4",
    image: fourthTestimonialImg,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusamus commodi corrupti, expedita dolore rem molestiae cumque veritatis libero modi expedita dolore rem molestiae cumque veritatis",
    name: "William Damian",
    job: "IT Manager",
  },
  {
    title: "Card 5",
    description: "Description for card 5",
    image: fifthTestimonialImg,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusamus commodi corrupti, expedita dolore rem molestiae cumque veritatis libero modi expedita dolore rem molestiae cumque veritatis",
    name: "George Jacob",
    job: "Lawyer",
  },
];

// Gallery Section

export const galleryData = [
  {
    id: 1,
    img: firstGalleryImg,
  },
  {
    id: 2,
    img: secondGalleryImg,
  },
  {
    id: 3,
    img: thirdGalleryImg,
  },
  {
    id: 4,
    img: fourthGalleryImg,
  },
  {
    id: 5,
    img: fifthGalleryImg,
  },
  {
    id: 6,
    img: sixthGalleryImg,
  },
  {
    id: 7,
    img: seventhGalleryImg,
  },
  {
    id: 8,
    img: eighthGalleryImg,
  },
];
