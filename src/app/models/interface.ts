export interface roleObject {
  roleId: number;
  role: string;
}

export interface apiObject {
  message: string;
  result: boolean;
  data: any;
}

export interface designationObject {
  designationId: number;
  designation: string;
}

export enum Icon {
  success = "success",
  warning = "warning",
  error = "error",
  info = "info",
  question = "question",
}

export interface clientProject {
  empName: string;
  empId: number;
  empCode: string;
  empEmailId: string;
  empDesignation: string;
  projectName: string;
  startDate: string;
  expectedEndDate: string;
  clientName: string;
  clientProjectId: number;
}

export interface employeeInterface {
  empName: string;
  empId: number;
  empCode: string;
  empEmailId: string;
  empDesignation: string;
  role: string;
}

export interface clientProjectPayloadInterface {
  clientProjectId: number;
  projectName: string;
  startDate: string;
  expectedEndDate: string;
  leadByEmpId: number;
  completedDate: string;
  contactPerson: string;
  contactPersonContactNo: string;
  totalEmpWorking: number;
  projectCost: number;
  projectDetails: string;
  contactPersonEmailId: string;
  clientId: number;
}
