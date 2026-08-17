import type { ComponentProps } from 'react';
// Importa el mapeo de componentes original de Docusaurus
import MDXComponents from '@theme-original/MDXComponents';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

// Tipado estricto opcional para mayor seguridad en TypeScript
type MDXComponentsType = typeof MDXComponents;

export default {
  // Hereda todos los componentes por defecto (como bloques de código, links, etc.)
  ...MDXComponents,
  // Registra tus componentes globales
  Tabs,
  TabItem,
} satisfies MDXComponentsType;
