import type {ReactNode} from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type RasterImageFormat = 'png' | 'jpg' | 'webp' | 'avif' | 'gif' | 'svg';

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

const FeatureList: FeatureItem[] = [
  {
    title: 'Internet de las cosas',
    image: {
      format: 'png',
      src: require('@site/static/img/respaldo.png').default,
    },
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Robótica',
    image: {
      format: 'webp',
      src: '/img/respaldo.png',
      alt: 'SQL avanzado',
    },
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'IA en el borde',
    image: {
      format: 'webp',
      src: '/img/respaldo.png',
      alt: 'Respaldo',
    },
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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
            className={clsx(styles.featureSvg, styles.featureImage)}
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
