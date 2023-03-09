import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Corouselcard from './spccard';
import './styleCss/corouselspec.css';
import { SpecialityMenu } from '../Data/data';
import { Link } from 'react-router-dom';

function Corouselspec() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div>
        <Carousel responsive={responsive}
        autoPlaySpeed={500}>
          {SpecialityMenu.map((menu) => {
                
                return (

                  <Link to={`/doctor/${menu.name}`}><Corouselcard imgsrc={menu.imgsrc}name={menu.name} description={menu.description}/></Link>
            )})}

  

</Carousel>
</div>
      
    );
  }
  export default Corouselspec;