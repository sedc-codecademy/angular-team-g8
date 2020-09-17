export class DashboardRoutes {

  routes(): Array<object> {
    return [
      { name: 'Users', url: 'users' },
      { name: 'Products', url: 'orders' },
      { name: 'Orders', url: 'invoices' },
      { name: 'Invoices', url: 'shipping' },
      { name: 'Shipping', url: 'products' },
    ];
  }

}
