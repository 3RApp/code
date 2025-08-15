import { Header, Text } from "../../components"

import css from './ProductDescription.module.css';

export const ProductDescription = ({ description }) => {

  return (
    <section>
      <Header title="Детальное описание" size="lg" />
      <Text text={description} />
    </section>
  );
};