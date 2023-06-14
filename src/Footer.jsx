import React from 'react'
import studios from './assets/house.png'
import { Link } from 'react-router-dom'
import fbIcon from './assets/Facebook-icon.svg'

function Footer() {
  return (
    <div className='flex flex-col mx-auto xl:flex-row'>
        <div className='text-white bg-black px-4 py-12 flex flex-col justify-center gap-10 md:flex-row md:pt-[75px] md:gap-[26px] xl:px-12'>
            <div className='mx-auto flex flex-col gap-[18px] py-4 lg:m-0'>
                <img src={studios} alt="image home" className='w-[212px]' />
                {/**Google maps here */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3347.7641071531516!2d11.537529568126356!3d3.7699098800305917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scm!4v1686418277661!5m2!1sfr!2scm" 
                width="212" height="123" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Responsive Google Map'></iframe>
            </div>
            <div className='mx-auto max-w-[186px] flex flex-col gap-[21px] lg:m-0'>
                <h5 className='font-bold'>Institut Supérieur de l'Emergence</h5>
                <p className='text-[12px]'>Borne 12, Odza, (Entrée Sabel) Yaoundé, Cameroun</p>
                <p className='text-[12px]'>Téléphone <br /><br /> (+237) 6 73 88 76 59 <br /> (+237) 6 58 66 84 15</p>
                <p>
                Adresse mail <br /><a href="mailto:isup.emergence@gmail.com">isup.emergence@gmail.com</a>
                </p>
            </div>          
            
        </div>
        {/**Second side */}
        <div className='bg-[#101010] text-white px-4 py-12 flex flex-col justify-center gap-10 lg:flex-row lg:py-[75px] lg:gap-[26px] lg:pr-[52px] grow'>
            <div className='mx-auto'>
                <h4 className='font-bold text-2xl'>Découvrez l’ISE</h4>
                <ul className='flex flex-col gap-[38px] py-8'>
                    <li className='hover:text-secondary capitalize'><Link to="/parcours">Nos Parcours</Link></li>
                    <li className='hover:text-secondary capitalize'><Link to="/filieres">Nos Filières</Link></li>
                    <li className='hover:text-secondary capitalize'><Link to="/campus">Notre Campus</Link></li>
                    <li className='hover:text-secondary capitalize'><Link to="/blog">Actualités</Link></li>
                    <li className='hover:text-secondary capitalize'><Link to="/admission">admission</Link></li>
                    <li className='hover:text-secondary capitalize'><Link to="/carriere">Faire carrière à l’ISE</Link></li>
                </ul>
            </div>
            <div className='mx-auto'>
                <button className='px-3 py-[7px]'>Demande d'information</button>
                <div className='pt-[65px] flex flex-col justify-center'>
                    <p className='font-bold text-2xl text-center'>Suivez-<span className='text-primary'>nous</span></p>
                    <div className='mx-auto'>
                    <img src={fbIcon} alt="facebook-icon" className='w-[90.75px] mt-[41px]'/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer