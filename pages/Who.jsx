import React, { Component } from 'react';
import styles from './Who.css';

class Who extends Component {
  render() {
    return(
      <div className="test">
        <div class="bigcontainer">
          <h3>¿Quiénes Somos?</h3>
          <h6>Somos una organización ambiental que ofrece una experiencia única de contacto con la
            riqueza natural y cultural de Colombia, que promueve y ejecuta programas de educación,
            comunicación, recreación e investigación para la conservación de la biodiversidad colombiana.</h6>
        </div>
        <div class="bigcontainer">
          <h3>Nuestra Historia</h3>
          <p>Es innegable que la región ha redescubierto al Zoológico de Cali como epicentro de conservación,
            que goza de credibilidad en virtud de su transparencia, honestidad y profesionalismo. Por más de 
            una década ha ejercido un liderazgo en la comunidad zoológica nacional e internacional, promoviendo
            y acompañando el desarrollo de otras instituciones de su misma naturaleza, y participando activamente
            en la consolidación de una comunidad más comprometida con la conservación de la biodiversidad.
            El Zoológico de Cali ha crecido bajo una forma de organización con objetivos claros y compartidos,
            sustentada en principios y valores en el marco de un pensamiento estratégico que propone relatos
            innovadores en una institución que contribuye a crear escenarios de bienestar para las comunidades
            humanas y la vida silvestre. El Zoológico de Cali es una plataforma que promueve la construcción del
            compromiso ambiental.</p>
        </div>
        <div className="row">
          
          <div className="container col-sm-4">
           <h3>Nuestra Misión</h3>
            <p>El Zoológico de Cali es un parque temático de carácter ambiental que ofrece una experiencia única de
              contacto con la riqueza natural y cultural de Colombia, que promueve y ejecuta programas de educación,
              divulgación, recreación e investigación para la conservación de la biodiversidad colombiana y la formación
              de una conciencia pública ambiental. El Zoológico de Cali está comprometido en la prestación de servicios
              de calidad en todas sus áreas.
            </p>
          </div>
          <div class="container col-sm-4">
            <h3>Nuestros Valores</h3><br/>
            <div class="lista">
              <ul>
                <li>Conservamos la vida con pasión</li>
                <li>Todo lo que sabemos, lo sabemos todos</li>
                <li>Nos gusta la gente y nos importa su bienestar</li>
                <li>Nuestras capacidades y talentos sin reservas</li>
                <li>Innovamos con creatividad para dejar huella</li>
                <li>Actuamos como pensamos</li>  
              </ul>  
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Who; 