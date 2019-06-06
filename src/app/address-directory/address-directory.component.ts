import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material';
import { KandyService } from 'app/kandy.service';

@Component({
  selector: 'tcc-address-directory',
  templateUrl: './address-directory.component.html',
  styleUrls: ['./address-directory.component.css']
})
export class AddressDirectoryComponent implements OnInit {

  loginType: string = 'directory';
  value: boolean;
  option: any;
  select: any;
  check: any;
  searchName: any;
  selectedUser: any;
  currentUsers: any[] = [];
  status: any;
  contactId: any;
  primaryContact: any;
  firstName: any;
  lastName: any;
  homePhoneNumber: any;
  businessPhone: any;
  email: any;
  buddy: boolean;

  constructor(private ks: KandyService) { 
    this.ks.client.on('directory:change', () => {
      this.log('Updating User List');
      this.updateUserList()
    })

    this.ks.client.on('directory:error', (error) => {
      this.log('An error occured: ' + JSON.stringify(error))
    })

    this.ks.client.on('contacts:change', () => {
      this.log('Updating contacts table')
      this.updateContactsTable()
    })

    this.ks.client.on('contacts:new', contact => {
      this.log('Updating contacts table')
      this.updateContactsTable()
    })
  }

  ngOnInit() {
  }

  onChangeContactType(mrChange: MatRadioChange) {
    this.loginType = mrChange.value;
  }

  // radio_select(membership: any) {
  //   if (membership == 'Directory') {
  //     this.value = false;
  //   }
  //   if (membership == 'Address Book') {
  //     this.value = true;
  //   }
  // }

  selectOption(mrChange: MatRadioChange) {
    // console.log('event fires --', event);
    // console.log((<HTMLInputElement>event.target).nextElementSibling.innerText);
    // console.log((event.srcElement as HTMLElement).nextElementSibling.innerText);
    // console.log((event.target as HTMLElement).nextElementSibling.textContent);
    // this.option = (event.target as HTMLElement).nextElementSibling.textContent;
    this.option = mrChange.value;
    console.log(this.option);
  }

  userList(status: any) {
    console.log('event is --- ', event);
    this.status = this.selectedUser;
    console.log('selected status is ', status);
  }

  searchDirectory() {
    console.log(this.option + this.searchName)
    console.log(this.ks.client.user);
    this.ks.client.user.search({ [this.option]: this.searchName });
    this.log('User rendered successfully')
  }

  getSelectedUser() {
    return this.currentUsers;
  }

  updateUserList() {
    this.selectedUser = this.ks.client.user.getAll();
    this.currentUsers = [];
    for (var userId in this.selectedUser) {
      // console.log(userId);
      this.currentUsers.push(userId)
      console.log(this.currentUsers);
    }
    this.selectedUser = this.currentUsers[0];
    console.log(this.selectedUser);
    console.log(this.selectedUser.length);
    if (this.currentUsers.length === 2) {
      this.renderUser(this.currentUsers)
    }
  }

  renderUser(id) {
    const getUser = id || this.getSelectedUser();
    console.log(getUser[0]);
    if (getUser[0]) {
      const user = this.ks.client.user.get(getUser[0]);
      console.log(user);
      document.getElementById('results').innerHTML = JSON.stringify(user, null, 4);
    }
  }

  updateContactsTable() {
    const table = document.getElementById('table')
    table.innerHTML = '';
    const br = document.createElement('br')
    const contacts = this.ks.client.contacts.getAll()
    console.log(contacts)
    for (let contactId in contacts) {
      for (let prop in contacts[contactId]) {
        console.log(prop);
        console.log(contacts[contactId][prop]);
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        const td = document.createElement('td');
        table.appendChild(tr);
        tr.appendChild(th);
        tr.appendChild(td);
        th.innerHTML = prop;
        td.innerHTML = contacts[contactId][prop];
      }
    }
    table.appendChild(br)

  }

  addContacts() {
    console.log(this.buddy, this.contactId);
    var table = document.getElementById('table');
    table.innerHTML = "";
    const getContact = this.getContactFormData();
    console.log(getContact)
    for (let property in getContact) {
      const tr = document.createElement('tr');
      const th = document.createElement('th');
      const td = document.createElement('td');
      table.appendChild(tr);
      tr.appendChild(th);
      tr.appendChild(td);
      th.innerHTML = property;
      td.innerHTML = getContact[property];
    }
    if (!getContact || !getContact.contactId) {
      this.log('Cannot add a contact to Address Book without a contact ID!')
    } else {
      this.ks.client.contacts.add(this.getContactFormData())
    }
    return table

  }

  getContactFormData() {
    const contactId = this.contactId;
    const primaryContact = this.primaryContact;
    const firstName = this.firstName;
    const lastName = this.lastName;
    const homePhoneNumber = this.homePhoneNumber;
    const businessPhoneNumber = this.businessPhone;
    const emailAddress = this.email;
    const buddy = this.buddy;
    return { contactId, primaryContact, firstName, lastName, homePhoneNumber, businessPhoneNumber, emailAddress, buddy }
  }

  removeContacts() {
    this.ks.client.contacts.remove(this.contactId);
    this.log('Contact removed successfully!');

  }

  updateContacts() {
    const contacts = this.ks.client.contacts.getAll();
    console.log(contacts);
    const upContact = this.getContactFormData();
    if (upContact) {
      if (!upContact.contactId) {
        this.log('Cannot update a contact with no contact ID');
      } else {
        this.ks.client.contacts.update(upContact.contactId, upContact);
        this.log('Contact updated successfully!');
      }
    }
  }

  clearContacts() {
    this.contactId = "";
    this.primaryContact = "";
    this.firstName = "";
    this.lastName = "";
    this.homePhoneNumber = "";
    this.businessPhone = "";
    this.email = "";
    this.buddy = false;
  }

  refreshContacts() {
    this.ks.client.contacts.refresh();
    this.log('Contacts refreshed successfully!');
  }

  log(message: any) {
    var messageDiv = document.getElementById('messageLogs');
    messageDiv.innerHTML += '<div>' + message + '</div>';
    messageDiv.scrollTop = messageDiv.scrollHeight;
    messageDiv.scrollIntoView(false)

  }

}
