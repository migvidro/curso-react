const handler = (req, res) => {
  const codigo = req.query.codigo;
  res.status(200).json({
    id: codigo,
    nome: `Miguel ${codigo}`,
    email: `miguel${codigo}@email.com`,
  });
};

export default handler