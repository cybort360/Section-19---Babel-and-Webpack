import { styleBody, addTitle, contact } from './dom';
import users, { getPremUsers } from './data';

console.log('index file');

styleBody();
addTitle('potato');
console.log(contact);
console.log(users);
const premUsers = getPremUsers(users);
console.log(premUsers);

console.log('test');
console.log('another test');