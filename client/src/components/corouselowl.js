import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Corouselcard from './spccard';
import './styleCss/corouselspec.css';

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
<Corouselcard mt-90 imgsrc='images/head.png'name='Ent Center' description='Pathologicals,conditions of the ear, nose or throat.'/>

  <div><Corouselcard mt-90 imgsrc='images/head.png'name='Ent Center' description='Pathologicals,conditions of the ear, nose or throat.'/></div>
  <div><Corouselcard mt-90 imgsrc='images/head.png'name='Ent Center' description='Pathologicals,conditions of the ear, nose or throat.'/></div>
  <Corouselcard mt-90 imgsrc='images/head.png'name='Ent Center' description='Pathologicals,conditions of the ear, nose or throat.'/>
  <Corouselcard mt-90 imgsrc='images/head.png'name='Ent Center' description='Pathologicals,conditions of the ear, nose or throat.'/>
  <Corouselcard mt-90 imgsrc='images/head.png'name='Ent Center' description='Pathologicals,conditions of the ear, nose or throat.'/>
  <Corouselcard mt-90 imgsrc='images/head.png'name='Ent Center' description='Pathologicals,conditions of the ear, nose or throat.'/>
  <Corouselcard mt-90 imgsrc='images/head.png'name='Ent Center' description='Pathologicals,conditions of the ear, nose or throat.'/>
  <Corouselcard mt-90 imgsrc='images/head.png'name='Ent Center' description='Pathologicals,conditions of the ear, nose or throat.'/>
  <Corouselcard mt-90 imgsrc='images/head.png'name='Ent Center' description='Pathologicals,conditions of the ear, nose or throat.'/>

</Carousel>
</div>
      
    );
  }
  export default Corouselspec;