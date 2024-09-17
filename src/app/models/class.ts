export class Client {
  clientId: number;
  contactPersonName: string;
  companyName: string;
  address: string;
  city: string;
  pincode: string;
  state: string;
  employeeStrength: number;
  gstNo: string;
  contactNo: string;
  regNo: string;

  constructor() {
    this.clientId = 0;
    this.companyName = "";
    this.address = "";
    this.city = "";
    this.contactPersonName = "";
    this.pincode = "";
    this.state = "";
    this.employeeStrength = 0;
    this.gstNo = "";
    this.contactNo = "";
    this.regNo = "";
  }
}
