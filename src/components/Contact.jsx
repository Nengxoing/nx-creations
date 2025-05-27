import '../css/Contact.css'

function Contact() {
  return (
    <div>
        <div className='contact-container'>
            <div className="contact-img">
                <img src="/images/contact.jpg" alt="" />
            </div>
            <div className="contact-info">
                <h1>Contact</h1>
                <div className="contact-tel">
                    <p><b>Tell:</b></p>
                    <p>+856 20 77 426 238</p>
                    <p>||</p>
                    <p>+856 20 97 482 461</p>
                </div>
                
                <div className="contact-icons">
                    <a href="https://web.facebook.com/ChengLarXiong"><img src="/icons/dark_facebook.png" alt="" /></a>
                    <a href="https://wa.me/+856 20 77 426 238"><img src="/icons/dark_whatsapp.png" alt="" /></a>
                    <a href="mailto:nengxiong.wtx195@gmail.com"><img src="/icons/dark_email.png" alt="" /></a>
                </div>
            </div>
            <div className="contact-icons-mobile">
                <a href="https://web.facebook.com/ChengLarXiong"><img src="/icons/dark_facebook.png" alt="" /></a>
                <a href="https://wa.me/+856 20 77 426 238"><img src="/icons/dark_whatsapp.png" alt="" /></a>
                <a href="mailto:nengxiong.wtx195@gmail.com"><img src="/icons/dark_email.png" alt="" /></a>
            </div>
        </div>
        <div className="cop">
            <p>© 2024 by Nengxiong. Powered and secured by Nengxiong Web Solutions.</p>
        </div>
    </div>
  )
}

export default Contact
