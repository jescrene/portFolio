import {makeStyles} from '@mui/styles';
import Weather from '../components/Weather';
import {Typography} from '@mui/material';

const useStyles = makeStyles({
  container: {
    padding: '20px',
  },
  section: {
    marginBottom: '20px',
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h4" gutterBottom className={classes.section}>
        Hola, Mi nombre es Eddy Socarras, y muestro de manera resumida mi
        experiencia en mi camino hacia el DESARROLLO WEB
      </Typography>
      <Typography variant="body1" className={classes.section}>
        He trabajado como Front-End Developer en varios proyectos de desarrollo
        web, utilizando tecnologías como Figma, HTML, CSS, JavaScript y Git. Me
        especializo en el desarrollo de aplicaciones web personalizadas y en la
        implementación de soluciones de diseño innovadoras para satisfacer las
        necesidades de mis clientes. Además, he comenzado a aprender React y
        Jira, lo que me ha permitido trabajar en proyectos más desafiantes y
        complejos. Soy un profesional creativo y orientado a los detalles, con
        habilidades en diseño y desarrollo web. Me encanta trabajar en equipo y
        colaborar con otros profesionales para lograr los objetivos del
        proyecto. Como freelance, he trabajado en varios proyectos de diseño
        web, incluyendo la creación de portafolios, landing pages y
        maquetaciones de páginas. He utilizado Figma para diseñar y crear
        diseños de alta calidad. Además, he trabajado en modificaciones visuales
        a plantillas de script desarrollados en framework en PHP. Mi experiencia
        en diseño web me ha permitido trabajar en proyectos de diferentes
        tamaños y complejidades, lo que me ha brindado una amplia gama de
        habilidades y conocimientos. Soy un experto en Figma y framework en PHP,
        y tengo experiencia en el uso de otras herramientas de diseño y
        desarrollo web. Durante mi tiempo como desarrollador de front-end, he
        trabajado como programador en un equipo de desarrollo web. Mi trabajo ha
        consistido en escribir código en HTML, CSS y JavaScript para crear
        sitios web y aplicaciones web personalizadas y únicas. He trabajado en
        proyectos de diferentes tamaños y complejidades, desde pequeñas páginas
        web hasta aplicaciones web más grandes. Mi trabajo ha incluido la
        creación de diseños de sitios web y aplicaciones web, la implementación
        de esos diseños en código HTML y CSS, y la programación de la
        funcionalidad de la aplicación utilizando JavaScript. También he
        trabajado en la optimización del rendimiento de los sitios web y
        aplicaciones web, asegurándome de que se carguen rápidamente y sean
        fáciles de usar. Además, he trabajado en la resolución de problemas y
        errores en el código existente, y he colaborado con otros miembros del
        equipo para asegurarme de que el código sea escalable y fácil de
        mantener. He utilizado herramientas de control de versiones como Git
        para gestionar el código fuente y he trabajado en entornos de desarrollo
        integrados. Actitudes y Habilidades Adicionales: Desarrollo y
        Metodología Ágil HTML, CSS, JavaScript React.js Node.js En resumen, mi
        trabajo como programador en HTML, CSS y JavaScript en el desarrollo web
        ha sido variado y desafiante, y me ha permitido desarrollar mis
        habilidades en estas tecnologías y en el trabajo en equipo.
      </Typography>
      <div className={classes.section}>
        <Weather />
      </div>
    </div>
  );
};

export default Home;
