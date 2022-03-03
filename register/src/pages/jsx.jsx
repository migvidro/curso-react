import Layout from '../components/Layout'

const Jsx = () => {
  const titulo = <h1>JSX e um conceito Central</h1>;

  const subtitulo = () => <h2>{"muito legal".toUpperCase()}</h2>;

  return (
    <Layout titulo="Entendendo o JSX">
      {titulo}
      {subtitulo()}
      <p>{JSON.stringify({ nome: "Miguel", idade: 20 })}</p>
    </Layout>
  );
};

export default Jsx;
