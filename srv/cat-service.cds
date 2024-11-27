using my.customer from '../db/schema';

service CatalogService{
    entity Customers as projection on customer.Customers;
}