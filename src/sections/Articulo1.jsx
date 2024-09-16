import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import newBackgroundImage from '../assets/librocerca.png';
import logoImage from '../assets/logo.png';
import { Typography, Button } from '@mui/material';
import './Articulo1.css';

export const Articulo1 = () => {
  const [page, setPage] = useState(1); // Estado para la página actual
  const [inProp, setInProp] = useState(true); // Estado para la animación

  useEffect(() => {
    // Cambiar el fondo del body a una nueva imagen cuando el componente se monte
    document.body.style.backgroundImage = `url(${newBackgroundImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';

    // Restaurar el fondo original cuando el componente se desmonte
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundAttachment = '';
    };
  }, []);

  const handleNextPage = () => {
    if (page < content.length) {
      setInProp(false); // Desactivar el contenido actual
      setTimeout(() => {
        setPage(page + 1);
        setInProp(true); // Activar el nuevo contenido
      }, 300);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setInProp(false); // Desactivar el contenido actual
      setTimeout(() => {
        setPage(page - 1);
        setInProp(true); // Activar el nuevo contenido
      }, 300);
    }
  };

  // Contenido dividido en páginas
  const content = [
    {
      left: (
        <>
          <Typography variant="h5" gutterBottom>
            En este artículo se va a profundizar sobre el precepto 217.4 de la Ley 1/2000
          </Typography>
          <Typography variant="body1" paragraph>
            de 7 de enero, de Enjuiciamiento Civil (“LEC”) el cual tiene especial importancia en materia de competencia desleal.
          </Typography>
          <Typography variant="body1" paragraph>
            Para analizar bien este artículo, es necesario referenciar literalmente el artículo 217.4 LEC:
          </Typography>
          <Typography variant="body1" paragraph>
            "En los procesos sobre competencia desleal y sobre publicidad ilícita corresponderá al demandado la carga de la prueba de la exactitud y veracidad de las indicaciones y manifestaciones realizadas y de los datos materiales que la publicidad exprese, respectivamente."
          </Typography>
          <Typography variant="body1" paragraph>
            Como se aprecia de su lectura, el Legislador hace una inversión de la carga de la prueba en un supuesto muy concreto, es decir, cuando en materia de competencia desleal y publicidad ilícita relacionadas con la veracidad y exactitud de manifestaciones.
          </Typography>
          <Typography variant="body1" paragraph>
            Esta disposición tiene implicaciones importantes para la forma en que se manejan las disputas legales en estos contextos, obligando al demandado a demostrar la veracidad de sus declaraciones y actos.
          </Typography>
        </>
      ),
      right: (
        <>
          <Typography variant="body1" paragraph>
            Por lo tanto, sobre el resto de materias amparadas por la Ley 3/1991, de 10 de enero, de Competencia Desleal (“LCD”) no se invierte la carga de la prueba, teniendo que acreditar los hechos la parte que los alegue.
          </Typography>
          <Typography variant="body1" paragraph>
            Después de tantos años dedicado exclusivamente a la litigación en materia de competencia desleal no son pocas las veces que en distintas Demandas he podido apreciar que se utiliza inadecuadamente el artículo 217.4 LEC para tratar de invertir la carga de la prueba en materias distintas a las recogidas en el meritado artículo.
          </Typography>
          <Typography variant="body1" paragraph>
            A modo de ejemplo, en un procedimiento por el que se suplica se declare que las actuaciones de la parte demandada han incurrido en explotación de reputación ajena. Esta situación subraya la importancia de una correcta interpretación y aplicación de la ley en estos casos específicos.
          </Typography>
          <Typography variant="body1" paragraph>
            De lo contrario, se corre el riesgo de complicar aún más el proceso legal y de imponer cargas injustas a las partes involucradas.
          </Typography>
        </>
      ),
    },
    {
      left: (
        <>
          <Typography variant="body1" paragraph>
            Invertir la carga de la prueba en cualquiera de las materias defendidas en la LCD supondría instaurar una prueba diabólica a la parte contraria, fin que no es perseguido por el Legislador.
          </Typography>
          <Typography variant="body1" paragraph>
            Sobre esto ha tenido ocasión de pronunciarse el Alto Tribunal con el fin de sentar doctrina y hacer valer su función nomofiláctica. Destacar, entre muchas otras, la Sentencia del Tribunal Supremo nº445/2014, de 4 de septiembre, Fundamento de Derecho Séptimo:
          </Typography>
          <Typography variant="body1" paragraph>
            Cuando el art. 217.4 de la Ley de Enjuiciamiento Civil prevé que en los procesos sobre competencia desleal corresponderá al demandado la carga de la prueba de la exactitud y veracidad de las indicaciones y manifestaciones realizadas, previsión que cobra todo su sentido cuando la demanda se ha interpuesto por la realización de actos desleales de denigración, no se está obligando al demandado a adoptar una determinada iniciativa probatoria.
          </Typography>
          <Typography variant="body1" paragraph>
            Lo que se hace es prever a qué parte debe perjudicar la falta de prueba adecuada sobre determinadas cuestiones controvertidas en ese tipo de procesos, excepcionando en parte, o al menos matizando, otras reglas contenidas en dicho art. 217.
          </Typography>
          <Typography variant="body1" paragraph>
            Este matiz legal es fundamental para entender cómo se distribuyen las responsabilidades probatorias en casos de competencia desleal.
          </Typography>
        </>
      ),
      right: (
        <>
          <Typography variant="body1" paragraph>
            La aplicación de esta doctrina pacífica ha dado lugar a resoluciones como la Sentencia de la Audiencia Provincial de Zaragoza, Sección Quinta, nº490/2020, de 24 de junio, Fundamento de Derecho Séptimo:
          </Typography>
          <Typography variant="body1" paragraph>
            El artículo 217.4 LEC establece una auténtica inversión de la carga de la prueba al disponer que "En los procesos sobre competencia desleal y sobre publicidad ilícita corresponderá al demandado la carga de la prueba de la exactitud y veracidad de las indicaciones y manifestaciones realizadas y de los datos materiales que la publicidad exprese, respectivamente."
          </Typography>
          <Typography variant="body1" paragraph>
            No obstante, conviene precisar que dicha regla solo se aplica en aquellos casos en que la conducta se base en la emisión de indicaciones o manifestaciones falsas o inexactas respecto de las que entra en juego la exceptio veritatis, como en los casos de denigración o en los de publicidad.
          </Typography>
          <Typography variant="body1" paragraph>
            Esta interpretación limita la aplicación del artículo 217.4 a situaciones específicas, evitando una expansión innecesaria de su alcance.
          </Typography>
        </>
      ),
    },
    {
      left: (
        <>
          <Typography variant="body1" paragraph>
            En este sentido la sentencia del TS de 4 de septiembre de 2014 puntualiza: "Lo que el art. 217.4 de la Ley de Enjuiciamiento Civil establece es que la falta de prueba adecuada sobre la exactitud y veracidad de indicaciones y manifestaciones denigratorias perjudica al demandado."
          </Typography>
          <Typography variant="body1" paragraph>
            Dicha excepción no es de aplicación al resto de los casos en que se atribuyen al infractor conductas distintas, pues no solo carecería de sentido invocar la exceptio veritatis, sino que ello sería tanto como imponer al demandado una probatio diabólica.
          </Typography>
          <Typography variant="body1" paragraph>
            Por tanto, cuando se trata de imputaciones desleales que no entrañan la emisión de indicaciones o manifestaciones falsas o inexactas, se aplican las reglas generales del artículo 217 LEC, correspondiendo a la parte actora acreditar los hechos constitutivos de la conducta desleal que se imputa a la demandada.
          </Typography>
          <Typography variant="body1" paragraph>
            Este enfoque asegura que las partes en un litigio tengan un campo de juego equitativo, donde las pruebas deben ser presentadas y sostenidas de acuerdo con las normas legales establecidas.
          </Typography>
        </>
      ),
      right: (
        <>
          <Typography variant="body1" paragraph>
            En el caso que nos ocupa, la demandante recurrente imputa a la demandada actos de violación de secretos, actos de engaño y actos de explotación de la reputación ajena.
          </Typography>
          <Typography variant="body1" paragraph>
            Consecuentemente, no yerra la sentencia al concluir que HISPACOLD no ha acreditado que KELD haya realizado tales conductas.
          </Typography>
          <Typography variant="body1" paragraph>
            Otra resolución más reciente es la Sentencia de la Audiencia Provincial de Toledo, Sección Primera, nº410/2022, de 23 de marzo, Fundamento de Derecho Tercero, donde se incide que fuera de los casos en los que se esté discutiendo la exactitud y veracidad de las indicaciones en el seno de la competencia desleal o publicidad ilícita, invertir la carga de la prueba supondría una probatio diabolica.
          </Typography>
          <Typography variant="body1" paragraph>
            Esta sentencia refuerza el principio de que la carga de la prueba debe ser manejada con cuidado y en contextos apropiados, para evitar injusticias procesales.
          </Typography>
        </>
      ),
    },
    {
      left: (
        <>
          <Typography variant="body1" paragraph>
            En conclusión, queda meridianamente claro que la inversión de la carga de la prueba establecida en el artículo 217.4 LEC solo es de aplicación cuando el objeto del procedimiento versa sobre la exactitud o veracidad de manifestaciones en el seno de la competencia desleal o publicidad ilícita.
          </Typography>
          <Typography variant="body1" paragraph>
            ALFECO ABOGADOS es un despacho especializado exclusivamente en litigios de competencia desleal y secreto empresaria, por lo que cuenta con un equipo experto en dicha materia y amplia experiencia en sede judicial, prestando una defensa jurídica íntegra en los procedimientos judiciales relacionados con este ámbito.
          </Typography>
        </>
      ),
      right: (
        <>
          <Typography variant="body1" paragraph>
            En conclusión, queda meridianamente claro que la inversión de la carga de la prueba establecida en el artículo 217.4 LEC solo es de aplicación cuando el objeto del procedimiento versa sobre la exactitud o veracidad de manifestaciones en el seno de la competencia desleal o publicidad ilícita.
          </Typography>
          <Typography variant="body1" paragraph>
            ALFECO ABOGADOS es un despacho especializado exclusivamente en litigios de competencia desleal y secreto empresaria, por lo que cuenta con un equipo experto en dicha materia y amplia experiencia en sede judicial, prestando una defensa jurídica íntegra en los procedimientos judiciales relacionados con este ámbito.
          </Typography>
          <Typography variant="body1" paragraph>
            El despacho se enorgullece de su historial en la protección de los derechos de sus clientes en asuntos complejos y de alto riesgo.
          </Typography>
        </>
      ),
    },
  ];
  
  
  
  
  

  return (
    <div className="articulo-container">
      <Link to="/articulos" className="logo-container">
        <img src={logoImage} alt="Logo" className="logo" />
        <div className="back-link">Volver a Artículos</div>
      </Link>
      <div className="book-container">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={page}
            in={inProp}
            timeout={300}
            classNames="fade"
          >
            <div className="left-page">
              {content[page - 1].left}
              <Button
                onClick={handlePrevPage}
                sx={{
                  color: '#56070c',
                  borderRadius: '8px',
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  padding: '8px 16px',
                  '&:hover': {
                    backgroundColor: '#555555',
                  },
                }}
              >
                Anterior
              </Button>
            </div>
          </CSSTransition>
        </SwitchTransition>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={page}
            in={inProp}
            timeout={300}
            classNames="fade"
          >
            <div className="right-page">
              {content[page - 1].right}
              <Button
                onClick={handleNextPage}
                sx={{
                  color: '#56070c',
                  borderRadius: '8px',
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  padding: '8px 16px',
                  '&:hover': {
                    backgroundColor: '#555555',
                  },
                }}
              >
                Siguiente
              </Button>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};
