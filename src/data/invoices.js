const invoices = [
    {
        id: 1,
        name: 'Santa Monica',
        number: 1995,
        amount: '$10,800',
        due: '12/05/1995',
    },
    {
        id: 2,
        name: 'Viktor Kuz',
        number: 1989,
        amount: '$8,000',
        due: '10/08/2000',
    },
    {
        id: 3,
        name: 'Ocean Avenue',
        number: 2003,
        amount: '$9,500',
        due: '07/22/2002',
    },
    {
        id: 4,
        name: 'Olivia',
        number: 1991,
        amount: '$14,000',
        due: '09/01/1997',
    },
    {
        id: 5,
        name: 'Open Space',
        number: 1998,
        amount: '$4,000',
        due: '01/27/1998',
    },
];

export const getInvoices = () => invoices;
export const getInvoiceById = (id) => invoices.find((item) => item.id === +id)
