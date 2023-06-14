import React, { useState } from 'react'
import CallToAction from '../components/CallToAction'
import imageCampus from '../assets/campus-tour.jpg'
import videoPlaceholder from '../assets/place-video.jpg'
import bgRoad from '../assets/background-0.jpg'
import blogImage from '../assets/image-tag.jpg'
import { data } from '../data/categories.js'
import { Link } from 'react-router-dom'
import { carousel } from '../data/hero.js'
import Articles from '../components/Articles'

function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = ()=> {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carousel.length -1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const nextSlide =() => {
    const isLastSlide = currentIndex === carousel.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className='flex flex-col'>
      {/**Hero Carousel */}
      <section className='w-full h-[400px] md:h-[740px] m-auto relative group'>
        <div style={{backgroundImage: `url(${carousel[currentIndex].url})`}} 
        className={`w-full h-full ${carousel[currentIndex].color} bg-center bg-contain bg-no-repeat duration-500`}></div>
        {/**left arrow */}
        <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 p-2 cursor-pointer'
        onClick={prevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
        {/**right arrow */}
        <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 p-2 cursor-pointer'
        onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        {/**Content */}
        <div className='absolute top-[50%] translate-x-0 translate-y-[-50%] md:left-[20%] max-w-7xl'>
          <div className='px-[30px] py-[51.5px] bg-white/[23%] text-black max-w-[420px] w-full text-center flex flex-col gap-6'>
            <h5 className='text-[16px] font-bold'>Parcours</h5>
            <p className='text-[12px] '>Nos parcours BTS et HND vous permettront d’être plus compétitif sur le marché de l’emploi</p>
            <button className='w-fit mx-auto text-[12px] px-[33px] py-[17px]'><Link to="#">Découvrez nos parcours</Link></button>
          </div>
        </div>
        {/**Navigation */}
        <div className='absolute bottom-[5%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex justify-center py-2 px-[10px] rounded-full bg-black/[22%] w-fit gap-5'>
          { carousel.map((item,slideIndex)=>(
            <div key={slideIndex} className={ slideIndex === currentIndex ? 'cursor-pointer text-[#DDDCDC]' : 'cursor-pointer' }
            onClick={()=> goToSlide(slideIndex)}>
              <svg height="12" width="12">
                <circle cx="6" cy="6" r="3" fill="currentColor" /> 
              </svg>
            </div>
          ))}
        </div>
      </section>

      {/**Campus */}
      <section className='max-w-7xl mx-auto px-2 pt-12 pb-7 xl:px-[60px]'>
        <h2>notre campus</h2>
        <div className='flex flex-col xl:flex-row xl:gap-[43px] xl:items-end'>
          <div className='max-w-[570px]'>
            <img src={imageCampus} alt="" />
          </div>
          <div className='max-w-[570px]'>
            <div className='bg-primary px-[45px] pt-[54px] pb-[72px] xl:relative xl:left-[-53px] xl:pr-[85px]'>
              <p className='text-[32px] font-extrabold text-white'>BIENVENUE A L’ISE</p>
              <p className='text-[16px] mt-[14px]'>Les actions de l’Institut Supérieur de l’Emergence sont portées vers la recherche de l’émergence des jeunes par la formation. 
              C’est la formation qui précède l’emploi, c’est pour cela que l’institut offre un cursus de formation abouti.</p>
            </div>
            <div className='mt-4'>
              <p className='max-w-[480px] text-[32px] text-primary font-semibold leading-9'>Pourquoi choisir l’Institut Supérieur de l’Emergence ?</p>
              <img src={videoPlaceholder} alt="" className='mt-4' />
            </div>
          </div>
        </div>
      </section>
      {/**Course categories */}
      <section className='max-w-7xl w-full mx-auto xl:px-[60px] py-7'>
      <div className='max-w-7xl mx-auto'><h2>nos filières</h2></div>
        <div className='max-w-7xl flex flex-row flex-wrap gap-x-[43px] justify-center gap-y-[55px] xl:justify-around mb-12'>
          { data.map((item, index)=>(
            <Link key={index} className='w-[250px] h-[250px] flex justify-center items-center relative' to={item.link}>
              {/**Overlay */}
              <div className={`absolute w-full h-full ${item.class}`}></div>
              <p className='w-[210px] absolute text-2xl font-semibold text-center text-white'>{item.name}</p>
              <img src={item.image} alt="" />
              
            </Link>
          )) }
        </div>
        <div className='mx-auto flex justify-center'>
          <Link to="filieres" className='btnCTA'>Consulter toutes les filières</Link>
        </div>  
      </section>
      {/**Blog */}
      <section className='max-w-7xl mx-auto w-full px-2 py-7 xl:px-[60px]'>
            <h2>actualités</h2>
            <Articles />
            <div className='mx-auto flex justify-center my-5 md:mb-12'>
              <Link to="blog" className='btnCTA'>Consulter toute l'actualité</Link>
            </div>
            <img src={blogImage} alt="" />
      </section>
      {/**Roads */}
      <section className='w-full mx-auto'>
        <div className='max-w-7xl w-full px-2 xl:px-[60px] mx-auto'><h2>Nos Parcours</h2></div>
        <div className='mx-auto flex justify-center py-11 bg-cover bg-center gap-5 xl:gap-1 flex-wrap' style={{backgroundImage: `url(${bgRoad})`}}>
          {/**Card */}
            <div className='max-w-[300px] w-full rounded-3xl bg-white'>
              <h4 className='w-full bg-primary text-white font-bold text-4xl text-center py-6 rounded-t-3xl uppercase'>BTS/HND</h4>
              <p className='w-full px-11 pt-7 text-[#A9A9AA]'>
                <span className='text-2xl text-primary font-bold flex w-full px-3 pb-2'>Frais d'Inscription</span>
                Vous aurez droit à :
              </p>
              <ul className='roadList marker:text-primary'>
                <li className='listRoad'>Un laboratoire bien équipé</li>
                <li className='listRoad'>Une bibliothèque physique</li>
                <li className='listRoad'>Une salle d'informatique de pointe</li>
                <li className='listRoad'>Un WiFi accessible aux étudiants</li>
              </ul>
              <h4 className='w-full  font-bold text-4xl text-center py-6 rounded-b-3xl border-t border-dashed border-[#A9A9AA]'>XAF 50.000</h4>
            </div>
            {/**End card */}
            {/**2*/}
            <div className='max-w-[300px] w-full rounded-3xl bg-white'>
              <h4 className='w-full bg-primary text-white font-bold text-4xl text-center py-6 rounded-t-3xl uppercase'>License</h4>
              <p className='w-full px-11 pt-7 text-[#A9A9AA]'>
                <span className='text-2xl text-primary font-bold flex w-full px-3 pb-2'>Frais d'Inscription</span>
                Vous aurez droit à :
              </p>
              <ul className='roadList marker:text-primary'>
                <li className='listRoad'>Un laboratoire bien équipé</li>
                <li className='listRoad'>Une bibliothèque physique</li>
                <li className='listRoad'>Une salle d'informatique de pointe</li>
                <li className='listRoad'>Un WiFi accessible aux étudiants</li>
              </ul>
              <h4 className='w-full  font-bold text-4xl text-center py-6 rounded-b-3xl border-t border-dashed border-[#A9A9AA]'>XAF 50.000</h4>
            </div>
            {/**3 */}
            <div className='max-w-[300px] w-full rounded-3xl bg-white'>
              <h4 className='w-full bg-primary text-white font-bold text-4xl text-center py-6 rounded-t-3xl uppercase'>master</h4>
              <p className='w-full px-11 pt-7 text-[#A9A9AA]'>
                <span className='text-2xl text-primary font-bold flex w-full px-3 pb-2'>Frais d'Inscription</span>
                Vous aurez droit à :
              </p>
              <ul className='roadList marker:text-primary'>
                <li className='listRoad'>Un laboratoire bien équipé</li>
                <li className='listRoad'>Une bibliothèque physique</li>
                <li className='listRoad'>Une salle d'informatique de pointe</li>
                <li className='listRoad'>Un WiFi accessible aux étudiants</li>
              </ul>
              <h4 className='w-full  font-bold text-4xl text-center py-6 rounded-b-3xl border-t border-dashed border-[#A9A9AA]'>XAF 50.000</h4>
            </div>
            {/**4 */}
            <div className='max-w-[300px] w-full rounded-3xl bg-white'>
              <h4 className='w-full bg-primary text-white font-bold text-4xl text-center py-6 rounded-t-3xl uppercase'>doctorat</h4>
              <p className='w-full px-11 pt-7 text-[#A9A9AA]'>
                <span className='text-2xl text-primary font-bold flex w-full px-3 pb-2'>Frais d'Inscription</span>
                Vous aurez droit à :
              </p>
              <ul className='roadList marker:text-primary'>
                <li className='listRoad'>Un laboratoire bien équipé</li>
                <li className='listRoad'>Une bibliothèque physique</li>
                <li className='listRoad'>Une salle d'informatique de pointe</li>
                <li className='listRoad'>Un WiFi accessible aux étudiants</li>
              </ul>
              <h4 className='w-full  font-bold text-4xl text-center py-6 rounded-b-3xl border-t border-dashed border-[#A9A9AA]'>XAF 50.000</h4>
            </div>
        </div>
            
      </section>

      <CallToAction />
    </div>
  )
}

export default Home