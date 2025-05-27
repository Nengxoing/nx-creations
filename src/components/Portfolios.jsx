import '../css/Portfolios.css';

function Portfolios() {
  return (
    <div className='portfolios-container'>
      <h1>Portfolios</h1>

      <div className="port-items">
            <div className="item">
                <div className="image-box">
                  <a href="#"><img src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='port-image'/></a>
                  <div className="text-box">
                    <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius libero neque possimus animi cumque rem praesentium dolores quaerat eaque. Expedita!</p>
                  </div>
                </div>
                <p className='name'>Code Mastery</p>
            </div>
            <div className="item">
                <div className="image-box">
                    <a href="#"><img src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='port-image'/></a>
                    <div className="text-box">
                      <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius libero neque possimus animi cumque rem praesentium dolores quaerat eaque. Expedita!</p>
                  </div>
                </div>
                <p className='name'>Skill Set Showcase</p>
            </div>
            <div className="item">
                <div className="image-box">
                    <a href="#"><img src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='port-image'/></a>
                    <div className="text-box">
                      <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius libero neque possimus animi cumque rem praesentium dolores quaerat eaque. Expedita!</p>
                  </div>
                </div>
                <p className='name'>Programming Proficiency</p>
            </div>
      </div>
    </div>
  )
}

export default Portfolios
