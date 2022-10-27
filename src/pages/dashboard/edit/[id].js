import React, { useState, useEffect } from 'react';
import FromProduct from '@components/fromProduct';
import { useRouter } from 'next/router';
import axios from 'axios';
import endPoints from '@services/api';

export default function Edit() {
  const [product, setProduct] = useState({});
  const [notId, setNotId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return;
    async function getProducts() {
      try {
        const response = await axios.get(endPoints.product.getProduct(id));
        setProduct(response.data);
        setNotId(false);
      } catch (err) {
        console.log(err);
        setNotId(true);
      }
    }
    getProducts();
  }, [router?.isReady]);

  return notId ? <h1>Page not Fount, check id</h1> : <FromProduct product={product} />;
}
