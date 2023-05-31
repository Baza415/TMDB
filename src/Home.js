
import Header_Main from "./Header_Main";
import Section_1 from "./Section1";
import Section_3 from "./Section_3";
import Footer_F from "./Footer";

function Home(props) {
    return(
      <div className="Main flex flex-col items-center">
              <Header_Main/>
              <Section_1/>
              <Section_3/>
              <Footer_F/>
      </div>
    )
}
export default Home