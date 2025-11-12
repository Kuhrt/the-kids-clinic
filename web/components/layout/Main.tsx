import { ComponentPropsWithRef } from 'react';

export default function Main(props: ComponentPropsWithRef<'main'>) {
  return <main id="main" tabIndex={-1} {...props} />;
}
