import React from 'react'
import { useParams } from 'react-router-dom'
import { getInvoiceById } from '../data/invoices'

const Invoice = () => {
    const {id} = useParams()
    const invoice = getInvoiceById(id)
  return (
    <div>
        <h2 className='text-3xl font-bold text-purple-700'>{invoice.name}</h2>
      <div className='divider'></div>
      <div>number: {invoice.number}</div>
      <div>number: {invoice.amount}</div>
      <div>due: {invoice.due}</div>
    </div>
  )
}

export default Invoice