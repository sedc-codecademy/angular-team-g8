export class DashboardRoutes {

  routes(): Array<object> {
    return [
      { name: 'Users', url: 'users' },
      { name: 'Products', url: 'products' },
      { name: 'Orders', url: 'orders' },
      { name: 'Invoices', url: 'invoices' },
      { name: 'Shipping', url: 'shipping' },
    ];
  }

}
