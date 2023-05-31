
import {useNavigate} from 'react-router-dom'
import {Nav} from "react-bootstrap";

function Header_Navbar() {
  const navigate = useNavigate()
  return(
    <>
      <div className="Navbar_Main bg-tmdbDarkBlue h-16 w-[100%] flex justify-center items-center">
        <div className="w-[100%] h-10 flex justify-center">
          <div className="Nav_Container flex justify-between items-center text-white h-10 px-[40px] w-[80%]">
            <div className="Nav_Left flex">
              <div className="Nav_Left_logo flex items-center w-[180px]">
                <img
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                  alt=""
                  className="h-5"
                  onClick={() => {
                    navigate('/')
                  }}
                />




              </div>
              <div className="Nav_Left_Movie p-[8px]" >
                <Nav.Link className="Link" onClick={() => navigate('/movie')}>Фильмы</Nav.Link>
              </div>
              <div className="Nav_Left_Serial p-[8px]">
                <Nav.Link  className="Link" onClick={() => navigate('/serial')}> Сериалы</Nav.Link>
              </div>
              <div className="Nav_Left_People p-[8px]">
                <Nav.Link  className="Link" onClick={() => navigate('/people')}>Люди</Nav.Link>
              </div>
              <div className="Nav_Left_Eshe p-[8px]">
                Еще
              </div>
            </div>
            <div className={'Nav_Right flex'}>
              <div>+</div>
              <div>-</div>
              <div>search</div>
              <div>buuton </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header_Navbar