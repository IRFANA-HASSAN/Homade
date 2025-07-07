
import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NaaturuchiShowcase from '@/components/NaaturuchiShowcase';

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className='mt-10'>
        <NaaturuchiShowcase />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
