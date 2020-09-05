import React from 'react';

class Slider extends React.Component{

    render(){

        return(
            <div id="slider" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#slider" data-slide-to="0" className="active"></li>
                    <li data-target="#slider" data-slide-to="1"></li>
                    <li data-target="#slider" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="img-slider" src="https://firebasestorage.googleapis.com/v0/b/web-personal-acdd1.appspot.com/o/example-slide-350-1.jpg?alt=media&token=be5451d9-0601-4f33-ad82-0cc859d11cbb"/>   
                    </div>
                    <div className="carousel-item">
                        <img className="img-slider" src="https://firebasestorage.googleapis.com/v0/b/web-personal-acdd1.appspot.com/o/example-slide-350-2.jpg?alt=media&token=cc985a5d-2507-47a7-8f56-01a05dfb6fc7"/>  
                    </div>
                    <div className="carousel-item">
                        <img className="img-slider" src="https://firebasestorage.googleapis.com/v0/b/web-personal-acdd1.appspot.com/o/example-slide-350-3.jpg?alt=media&token=53d547fd-1f9f-412c-b280-ae9b1f078802"/>  
                    </div>
                </div>
                <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
                 <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Slider;