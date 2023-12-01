export interface User {
   id?: string,
   email?: string,
   name?: string,
   avatar?: string,
   age?: number,
   gender?: string,
   password?: string,
   loading?: boolean,
   isauth?: boolean,
   error?: string,
   token?:string,
   siderCollapsed?: boolean,
}