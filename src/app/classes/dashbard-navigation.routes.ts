export class AdminRoutes {
  routes(): Array<object> {
    return [
      { name: 'Users', url: 'users' },
      { name: 'Products', url: 'products' },
      { name: 'Orders', url: 'orders' },
      { name: 'Invoices', url: 'invoices' },
      { name: 'Shipping', url: 'shipping' },
      { name: 'Profile', url: 'profile' },
    ];
  }
}

export class UserRoutes {
  routes(): Array<object> {
    return [
      { name: 'Orders', url: 'orders' },
      { name: 'Profile', url: 'profile' },
    ];
  }
}
