import React from 'react';
import {getInvoices} from '../data/invoices';
import { Link } from 'react-router-dom';

const Invoices = () => {
  const invoices = getInvoices()
  return (
    <div>
      <h2 className='text-3xl font-bold text-purple-700'>Invoices</h2>
      <div className='divider'></div>
      <div className="flex flex-col gap-2">
        {invoices.map((invoice) => (
          <Link to={`/invoices/${invoice.id}`} key={invoice.id}>
          {invoice.name}
          </Link>
        ))} 
      </div>
      </div>
  )
}



export default Invoices;