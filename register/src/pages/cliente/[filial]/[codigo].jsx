import React from 'react';
import Layout from '../../../components/Layout';
import { useRouter } from 'next/router'

const ClientePorCodigo = () => {

  const router = useRouter()

  return (
    <Layout titulo="Navegacao Dinamica">
      <div>Codigo = {router.query.codigo}</div>
      <div>Filial = {router.query.filial}</div>
    </Layout>
  )
}

export default ClientePorCodigo