
import styles from './Hero.module.css'
import Image from 'next/image';
import food from '../../public/hero-image.jpg'

const Hero = () => {
  return (
    <div>
      <section className={styles.hero}>

        <h1>Welcome to Pinch of Yum!</h1>
        <Image
       src={food} alt="foodimage" className='w-[400px] h=[400px] ml-5'
       />
      </section>
      </div>
  )
}

export default Hero;