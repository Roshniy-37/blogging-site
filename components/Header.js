import Image from 'next/image'
import Logo from '../public/blog-logo.png'

function Header (){
  const styles = {
    wrapper : "flex justify-center gap-10 p-5 bg-[#fcc017]"

  }
  return(
    <div className="flex justify-center gap-10 p-5 bg-[#fcc017]">
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
          className={styles.logo}
            src={Logo}
            alt='logo'
            height={50}
            width={160}
            priority
          />
        </div>
        <div className={styles.bannerNav}>
          <div>Our Story</div>
          <div>Membership</div>
          <div>Sign In</div>
          <div>Get Started</div>
        </div>
      </div>
    </div>
  )
}
export default Header