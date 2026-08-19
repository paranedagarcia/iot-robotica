import type {ReactNode} from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type RasterImageFormat = 'png' | 'jpg' | 'webp' | 'avif' | 'gif' | 'svg';

const SUPPORTED_IMAGE_EXTENSIONS = ['png', 'jpg', 'webp', 'svg','gif'];

function hasSupportedImageFormat(imagePath) {
  const extension = imagePath.split('.').pop()?.toLowerCase();
  return SUPPORTED_IMAGE_EXTENSIONS.includes(extension);
}


type FeatureImage =
  | {
      format: 'svg';
      src: React.ComponentType<React.ComponentProps<'svg'>>;
    }
  | {
      format: RasterImageFormat;
      src: string;
      alt?: string;
    };

type FeatureItem = {
  title: string;
  image: FeatureImage;
  description: ReactNode;
};

const FeatureList = [
  {
    title: 'Internet de las Cosas (IoT)',
    image: {
      format: 'jpg',
      src: '/img/iot.jpg',
    },
    description: (
      <>
        Conoce el mundo del Internet de las Cosas. Sus aplicaciones, protocolos y herramientas para el desarrollo de proyectos de IoT. Aprende a desplegar tus proyectos en la nube.
      </>
    ),
  },
  {
    title: 'Robótica y Automatización',
    image: {
      format: 'jpg',
      src: '/img/robot.jpg',
    },
    description: (
      <>
        Aprende a desarrollar proyectos de Robótica y automatización, tanto para educación como investigación. Inicia localmente y despliega tus proyectos en la nube.
      </>
    ),
  },
  {
    title: 'IA en el borde',
    image: {
      format: 'jpg',
      src: '/img/aiedge.jpg',
    },
    description: (
      <>
        Descubre cómo implementar inteligencia artificial en dispositivos de borde, optimizando el rendimiento y la eficiencia de tus proyectos.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  const imageSrc = image.format === 'svg' ? undefined : useBaseUrl(image.src);

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {image.format === 'svg' ? (
          <image.src className={styles.featureSvg} role="img" />
        ) : (
          <img
            src={imageSrc}
            className={clsx(styles.featureImage)}
            alt={image.alt ?? title}
          />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
