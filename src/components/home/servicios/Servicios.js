import React from 'react';

class Servicios extends React.Component{

    render() {
        return (

            <div className="container servicios">
                <div className="row">

                    <div className="col-lg-4">
                        <img className="responsive border border-info rounded-circle" src="https://firebasestorage.googleapis.com/v0/b/web-personal-acdd1.appspot.com/o/arturito.jpg?alt=media&token=47f211e1-d734-4620-98ae-19774763fe5a" alt="Responsive image" >
                             
                        </img>
                        <h2>Servicio 1</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><a className="btn btn-info" href="#" type="button">Leer más &raquo;</a></p>

                    </div>

                    <div className="col-lg-4">

                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                            <title>Titulo del servicio 2</title>
                            <rect width="100%" height="100%" fill="#777" />
                            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                        </svg>
                        <h2>Servicio 2</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><a className="btn btn-info" href="#" type="button">Leer más &raquo;</a></p>
                        
                    </div>

                    <div className="col-lg-4">

                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                            <title>Titulo del servicio 3</title>
                            <rect width="100%" height="100%" fill="#777" />
                            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                        </svg>
                        <h2>Servicio 3</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><a className="btn btn-info" href="#" type="button">Leer más &raquo;</a></p>
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default Servicios;