const cliente = (req, res) => {

  if(req.method === "GET"){
    handleGet(req, res)
  } else {
    res.status(405).send()
  }

  
}

const handleGet = (req, res) => {
  res.status(200).json({
    id: 3,
    nome: "Miguel",
    email: 'miguel@email.com'
  })
}

export default cliente;