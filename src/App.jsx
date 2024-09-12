import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import navLogo from "./assets/img/logo.png";
import TopBar from "./components/TopBar/TopBar";
import {
  navListItems,
  sliderData,
  appointmentCards,
  checkedParagraph,
  clinicInfoCardData,
  featuresParagraph,
  servicesData,
  departmentData,
  doctorsData,
  questionsData,
  pricingData,
  contactData,
  footerLinksData,
  footerMainColumnData,
  testimonialsData,
  galleryData,
} from "./Data/Data";
import CarouselsComponent from "./components/CarouselsComponent/CarouselsComponent";
import AppointmentSection from "./components/AppointmentSection/AppointmentSection";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import aboutUsImg from "./assets/img/about.jpg";
import featureImg from "./assets/img/features.jpg";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import MakeAnAppointmentSection from "./components/MakeAnAppointmentSection/MakeAnAppointmentSection";
import DepartmentSection from "./components/DepartmentSection/DepartmentSection";
import DoctorsSection from "./components/DoctorsSection/DoctorsSection";
import AskedQuestionsSection from "./components/AskedQuestionsSection/AskedQuestionsSection";
import Pricing from "./components/Pricing/Pricing";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import GallerySectoin from "./components/GallerySectoin/GallerySectoin";
import ScrollComponent from "./components/ScrollComponent/ScrollComponent";

function App() {
  return (
    <>
      <TopBar />
      <NavBarComponent logo={navLogo} navListItems={navListItems} />
      <CarouselsComponent sliderData={sliderData} />
      <AppointmentSection appointmentCards={appointmentCards} />
      <AboutUsSection
        checkedParagraph={checkedParagraph}
        clinicInfoCardData={clinicInfoCardData}
        aboutUsImg={aboutUsImg}
      />
      <FeaturesSection
        featureImg={featureImg}
        featuresParagraph={featuresParagraph}
      />
      <ServicesSection servicesData={servicesData} />
      <MakeAnAppointmentSection
        departmentData={departmentData}
        doctorsData={doctorsData}
      />
      <DepartmentSection departmentData={departmentData} />
      <TestimonialsSection testimonialsData={testimonialsData} />
      <DoctorsSection doctorsData={doctorsData} />
      <GallerySectoin galleryData={galleryData} />
      <Pricing pricingData={pricingData} />
      <AskedQuestionsSection questionsData={questionsData} />
      <ContactSection contactData={contactData} />
      <Footer
        footerLinksData={footerLinksData}
        footerMainColumnData={footerMainColumnData}
      />
      <ScrollComponent />
    </>
  );
}

export default App;
