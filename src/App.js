import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cssstyle from './componant/Cssstyle.jsx';
import Section1gp from './componant/Section1gp.jsx';
import Sectionfeatures from './componant/Sectionfeatures.jsx';
import ServicesSec4 from './componant/ServicesSec4.jsx';
import Calltoactionsec5 from './componant/Calltoactionsec5.jsx';
import PortFolioSec6 from './componant/PortFolioSec6.jsx';
import PortFolioImages from './componant/PortFolioImages.jsx';
import AboutSection from './componant/AboutSection.jsx';
import CountSection from './componant/CountSection.jsx';
import ContactSection from './componant/ContactSection.jsx';
import FooterSection from './componant/FooterSection.jsx';
import ClientView from './componant/ClientView.jsx';
import SliderSection from './componant/SliderSection.jsx';
import AccordionSec from './componant/AccordionSec.jsx';
import TabViwe from './componant/TabViwe.jsx';
import HeaderGp from './componant/HeaderGp.jsx';
import Usememo from './componant/Usememo.jsx';
import Usecallback from './componant/Usecallback.jsx';
import { Router } from 'react-bootstrap-icons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './componant/Route/Header.jsx';
import Home from './componant/Route/Home.jsx';
import About from './componant/Route/About.jsx';
import Contact from './componant/Route/Contact.jsx';
import Gallery from './componant/Route/Gallery.jsx';
import Information from './componant/Route/Information.jsx';
import MainComp from './componant/ProtectedRouting/MainComp.jsx';
import SelectionAandB from './componant/SelectionAandB.jsx';
import ReducerCrud from './componant/ReducerCrud.jsx';
import Appcart from './componant/Appcart.jsx';
// import ReactApexChart from 'react-apexcharts';
import { useState } from 'react';
import ReactChartComp from './componant/ReactChartComp.jsx';
import Charts from './componant/Charts.jsx';
// import TaskAmazon from './componant/TaskAmazon.jsx';




function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  return (
<>
   {/* <HeaderGp />
    <Section1gp />
    <TabViwe />
    <AboutSection />
    <ClientView /> */}
    {/* <SliderSection /> */}
    {/* <Sectionfeatures />
    <ServicesSec4 />
    <Calltoactionsec5 />
    <PortFolioSec6 />
    <CountSection />
    <AccordionSec />
    <ContactSection />
    <FooterSection /> */}
    {/* <Usememo /> */}
    {/* <Usecallback /> */}

  {/* <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    <Route path='/gallery' element={<Gallery />}></Route>
    <Route path='/information' element={<Information  />}></Route>
  </Routes>
  </BrowserRouter> */}
  {/* <Routexm /> */}
  {/* <MainComp /> */}
  {/* <SelectionAandB /> */}
    {/* <ReducerCrud /> */}
    {/* <TaskAmazon /> */}
    {/* <Appcart /> */}
    {/* <ReactApexChart /> */} 
     {
        isOnline ?
        <ReactChartComp />
        :
        <>
          <div className='container d-flex justify-content-center align-items-center' style={{height: "100vh", width: "100%"}}>
            <h1>NO Internet Connection</h1>
          </div>
        </>
      } 
       <Charts /> 
  </>
  );
}

export default App;
