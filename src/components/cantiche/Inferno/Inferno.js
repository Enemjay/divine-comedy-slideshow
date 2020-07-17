import React, {Component} from 'react';
import '../Cantiche.scss';

import Card from '../Card/Card';
import data from '../../../data/data';

class Inferno extends Component {
        state = {
          book: data.inferno,
          slide: data.inferno[0]
        }
      
      
        prevSlide = () => {
          const newIndex = this.state.slide.index-1;
          this.setState({
            slide: data.inferno[newIndex]
          })
        }

      nextSlide = () => {
        const newIndex = this.state.slide.index+1;
        this.setState({
          slide: data.inferno[newIndex]
        })
      }

    render () {
        const {slide} = this.state;

        let cards = (
            <div className={`cards-slider active-slide-${slide.index}`} >
              <div className="cards-slider-wrapper" style={{
                'transform': `translateX(-${slide.index*(100/this.state.book.length)}%)`
              }}>
                {
                  this.state.book.map(slide => <Card key={slide._id} slide={slide} />)
                }
              </div>
            </div>
        )

        return (
            <div className="card-container">
              <h1>Inferno</h1>
              <div className="buttons">
                <button 
                  onClick={() => this.prevSlide()} 
                  disabled={slide.index === 0}
                >Prev</button>
                <button 
                  onClick={() => this.nextSlide()} 
                  disabled={slide.index === data.inferno.length-1}
                >Next</button>
              </div>
              {cards}
          </div>
        );
    }
}

export default Inferno;

