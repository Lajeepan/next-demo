import { GetServerSideProps } from 'next';

interface ProductProps {
  id: string;
}

const Product: React.FC<ProductProps> = ({ id }) => {
  return (
    <div>
      <h1>Product ID: {id}</h1>
      <p>Details about product {id}...</p>
    </div>
  );
};

// Get dynamic `id` parameter from the URL
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string }; // Type assertion to ensure `id` is a string

  return {
    props: { id }, // Pass the `id` as a prop to the page
  };
};

export default Product;
