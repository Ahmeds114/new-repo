module.exports = (srv) =>{
    const { Customers } = srv.entities;
srv.on('READ' , 'CUSTOMERS', async (req) =>{
    return await SELECT.from(Customers);
});

};