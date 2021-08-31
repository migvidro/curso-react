const Jsx = () => {
  const titulo = <h1>JSX e um conceito Central</h1>

  const subtitulo = () => {
    return <h2>{"muito legal".toUpperCase()}</h2> 
  }

  return (
    <div>
      {titulo}
      {subtitulo()}
      <p>
        {JSON.stringify({ nome: 'Miguel', idade: 20 })}
      </p>
    </div>
  );
};

export default Jsx;
