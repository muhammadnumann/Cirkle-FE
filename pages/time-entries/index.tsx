import React from 'react';
import dynamic from 'next/dynamic';
const CustomTable = dynamic(() => import('components/CustomTable/index'));

function index() {
  return <CustomTable />;
}

export default index;
