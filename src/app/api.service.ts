import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { Observable, Subscriber } from 'rxjs';
import { config } from 'config';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = config.serverUrl;
  constructor(
    private httpClient: HttpClient,
  ) { }

  private handleError(error: any) {
    console.error(error);
  }

  get(url: string): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      var objectUrl: string;
      this.httpClient
        .get(url, {
          responseType: 'blob'
        })
        .subscribe(m => {
          objectUrl = URL.createObjectURL(m);
          observer.next(objectUrl);
        });

      return () => {
        if (objectUrl) {
          URL.revokeObjectURL(objectUrl);
        }
      };
    });
  }

  // login(email: any, password: any) {
  //   console.log("Called In API");
  //   return this.httpClient.post(`${this.baseUrl}/api/auth/login`, { "email": email, "password": password });
  // }

  RegisterValues(data: any) {
    console.log("REGISTERRRRR");
    return this.httpClient.post(`${this.baseUrl}/api/auth/register`, { data: data });
  }

  ForgotPassword(email: any) {
    console.log("FORGOTTTT");
    return this.httpClient.post(`${this.baseUrl}/ai/auth/forgot-password`, { data: email })
  }

  getCaptcha() {
    console.log("CAPTCHAAAA");
    return this.httpClient.get(`${this.baseUrl}/api/auth/captcha`);
  }

  Otpvalue(data: any) {
    console.log("OTP");
    return this.httpClient.post(`${this.baseUrl}/api/auth/verify-otp-reg`, { data: data });
  }

  UpdateNumberOTP(data: any) {
    console.log("RESEND OTP");
    return this.httpClient.post(`${this.baseUrl}/api/auth/resend-otp`, { data: data });
  }

  getMenuRole(userID: any) {
    return this.httpClient.get(`${this.baseUrl}/api/admin/role_management/getMenuRole?userID=` + userID);
  }

  checkapplications() {
    return this.httpClient.get(`${this.baseUrl}/api/attestation/checkapplications`);
  }

  getpreAppldetails() {
    return this.httpClient.get(`${this.baseUrl}/api/dashboard/getpreAppldetails`);
  }

  //new api's========================================================================================================================================================

  addUserEducationalDetails(formdata: any, user_id: any) {
    return this.httpClient.post(`${this.baseUrl}/api/student/educationalDetails`, { "formdata": formdata, "user_id": user_id });
  }

  deleteInstituteHrd(institute_id: any, purpose_name: any, user_id: any) {
    return this.httpClient.post(`${this.baseUrl}/api/student/deleteInstituteHrd`, { "institute_id": institute_id, "purpose_name": purpose_name, "user_id": user_id });
  }

  getAppliedDetails(app_id: any, user_type: any, user_id: any) {
    return this.httpClient.get(`${this.baseUrl}/api/student/getAppliedDetails?app_id=${app_id}&user_type=${user_type}&user_id=${user_id}`);
  }

  getCartDetails(user_id: any) {
    return this.httpClient.get(`${this.baseUrl}/api/student/getInstituteData?user_id=${user_id}`);
  }

  preViewApplication(user_id: any) {
    return this.httpClient.get(`${this.baseUrl}/api/student/preViewApplication?user_id=${user_id}`);
  }

  //admin
  updateOtp(user_id: any, otp: string) {
    return this.httpClient.post(`${this.baseUrl}/api/admin/updateOtp`, { "user_id": user_id, "otp": otp });
  }

  updateCollegeFaculty(purpose: any, type: any, function_type: any, formData: any, id: any, user_id: any, user_name: any, app_id: any) {
    return this.httpClient.post(`${this.baseUrl}/api/admin/updateCollegeFaculty`, { "purpose": purpose, "type": type, "function_type": function_type, "formData": formData, "id": id, "user_id": user_id, "user_name": user_name, "app_id": app_id });
  }

  getCollegeList(id: any) {
    return this.httpClient.get(`${this.baseUrl}/api/admin/getCollegeList?id=${id}`);
  }

  getFacultyList(id: any) {
    return this.httpClient.get(`${this.baseUrl}/api/admin/getFacultyList?id=${id}`);
  }

  deleteCollegeFaculty(purpose: any, dataCollegeFaculty: any, user_id: any, user_name: any, app_id: any) {
    return this.httpClient.post(`${this.baseUrl}/api/admin/deleteCollegeFaculty`, { "purpose": purpose, "dataCollegeFaculty": dataCollegeFaculty, "user_id": user_id, "user_name": user_name, "app_id": app_id });
  }

  activeinactiveCollege(event: any, dataCollegeFaculty: any, user_id: any, user_name: any, app_id: any) {
    return this.httpClient.post(`${this.baseUrl}/api/admin/activeinactiveCollege`, { "event": event, "dataCollegeFaculty": dataCollegeFaculty, "user_id": user_id, "user_name": user_name, "app_id": app_id });
  }

  saveNameChangedata(data: any, user_id: any) {
    console.log("iiiiidddddddddddd", user_id);
    console.log("data", data);

    return this.httpClient.post(`${this.baseUrl}/api/student/saveLetterNameChangeData`, { "data": data, "user_id": user_id });
  }
  getNameChangeData(user_id: any) {
    return this.httpClient.get(`${this.baseUrl}/api/student/getNameChangeData?user_id=` + user_id);
  }
  deleteInfo(id: number, type: string) {
    return this.httpClient.delete(`${this.baseUrl}/api/student/deleteInfo?id=${id}&type=${type}`);
  }


  getCollegeLists() {
    return this.httpClient.get(`${this.baseUrl}/api/student/getCollegeList`);
  }

  getuploadedCurriculum(user_id: any) {
    return this.httpClient.get(`${this.baseUrl}/api/student/getuploadedCurriculum?user_id=` + user_id,);
  }

  deleteDocument(id: number, type: string, user_id: number) {
    return this.httpClient.delete(`${this.baseUrl}/api/student/deleteDocument?id=${id}&type=${type}&user_id=${user_id}`);
  }
  getFacultyLists() {
    return this.httpClient.get(`${this.baseUrl}/api/student/getFacultyLists`);
  }
  saveUserMarkList(documentid: any, app_id: number, user_id: number, value: string, data: any) {
    return this.httpClient.post(`${this.baseUrl}/api/student/saveUserMarkList`, { "documentid": documentid, "app_id": app_id, "user_id": user_id, "value": value, "data": data });
  }
  getExtraDocuments(user_id: number) {
    return this.httpClient.get(`${this.baseUrl}/api/student/getExtraDocuments?user_id=${user_id}`);
  }

  saveInstructionalData(formData: any) {
    return this.httpClient.post(`${this.baseUrl}/api/student/saveInstructionalData`, formData)
  }

  saveAffiliationData(formData: any) {
    return this.httpClient.post(`${this.baseUrl}/api/student/saveAffiliationData`, formData)
  }

  getletterDetails(user_id: number, degrees: any) {
    return this.httpClient.get(`${this.baseUrl}/api/student/getletterDetails?user_id=${user_id}&degrees=${degrees}`);
  }

  getInstructionalForms(user_id: number) {
    return this.httpClient.get(`${this.baseUrl}/api/student/getInstructionalForms?user_id=${user_id}`);
  }

  getAppliedUserDetail(user_id: number) {
    return this.httpClient.get(`${this.baseUrl}/api/student/getAppliedUserDetail?user_id=${user_id}`);
  }

  updateAllInstitute(type: any, refNo: any, formData: any, user_id: any, app_id: any, institute_id: any, function_type: any, admin_id: any, admin_email: any, user_type: any) {
    return this.httpClient.post(`${this.baseUrl}/api/student/updateAllInstitute`, { "type": type, "refNo": refNo, "formData": formData, "user_id": user_id, "app_id": app_id, "institute_id": institute_id, "function_type": function_type, "admin_id": admin_id, "admin_email": admin_email, "user_type": user_type });
  }


  getInstituteData(app_id: any, purpose_name: any, user_id: any, institute_id: any) {
    return this.httpClient.get(`${this.baseUrl}/api/student/getInstituteData?app_id=${app_id}&purpose_name=${purpose_name}&user_id=${user_id}&institute_id=${institute_id}`);
  }

  getHrdInfo(user_id: any, degree_type: any, faculty_type: any, app_id: any) {
    return this.httpClient.get(`${this.baseUrl}/api/student/getHrdInfo?user_id=${user_id}&degree_type=${degree_type}&faculty_type=${faculty_type}&app_id=${app_id}`);
  }

  updateAllHrd(formData: any, user_id: any, function_type: any, degree_type: any, secondlastSem: any, lastSem: any, purpose_name: any, hrd_id: any, app_id: any, admin_id: any, admin_email: any, user_type: any) {
    return this.httpClient.post(`${this.baseUrl}/api/student/updateAllHrd`, { "formData": formData, "user_id": user_id, "function_type": function_type, "degree_type": degree_type, "secondlastSem": secondlastSem, "lastSem": lastSem, "purpose_name": purpose_name, "hrd_id": hrd_id, "app_id": app_id, "admin_id": admin_id, "admin_email": admin_email, "user_type": user_type });
  }

  getHrdData(user_id: any, hrd_id: any, purpose_name: any, app_id: any) {
    return this.httpClient.get(`${this.baseUrl}/api/student/getHrdData?user_id=${user_id}&hrd_id=${hrd_id}&purpose_name=${purpose_name}&app_id=${app_id}`);
  }

  getActivityTrackerList(student_id: any) {
    return this.httpClient.get(`${this.baseUrl}/api/admin/getActivityTrackerList?student_id=${student_id}`);
  }

  getStudentList(id: any) {
    return this.httpClient.get(`${this.baseUrl}/api/admin/getStudentList?id=${id}`);
  }

  activeinactiveStudent(event: any, studentData: any, user_id: any, user_name: any) {
    return this.httpClient.post(`${this.baseUrl}/api/admin/activeinactiveUser`, { "event": event, "studentData": studentData, "user_id": user_id, "user_name": user_name });
  }

  resetPasswordByAdmin(studentData: any, user_id: any, user_name: any) {
    return this.httpClient.post(`${this.baseUrl}/api/admin/resetPasswordByAdmin`, { "studentData": studentData, "user_id": user_id, "user_name": user_name });
  }

  resetDocumentByAdmin(studentData: any, user_id: any, user_name: any) {
    return this.httpClient.post(`${this.baseUrl}/api/admin/resetDocumentByAdmin`, { "studentData": studentData, "user_id": user_id, "user_name": user_name });
  }

  changeNameByAdmin(firstname: any, lastname: any, student_id: any, student_app_id: any, user_id: any, user_name: any) {
    return this.httpClient.post(`${this.baseUrl}/api/admin/changeNameByAdmin`, { "firstname": firstname, "lastname": lastname, "student_id": student_id, "student_app_id": student_app_id, "user_id": user_id, "user_name": user_name });
  }

  changeLocationByAdmin(studentData: any, location: any, user_id: any, user_name: any) {
    return this.httpClient.post(`${this.baseUrl}/api/admin/changeLocationByAdmin`, { "studentData": studentData, "location": location, "user_id": user_id, "user_name": user_name });
  }

  getDocumentsData(student_id: any, student_app_id: any) {
    return this.httpClient.get(`${this.baseUrl}/api/admin/getDocumentsData?student_id=${student_id}&student_app_id=${student_app_id}`);
  }

  deleteDocumentByAdmin(documentData: any, user_id: any, user_name: any, app_id: any, type: any) {
    return this.httpClient.post(`${this.baseUrl}/api/admin/deleteDocumentByAdmin`, { "documentData": documentData, "user_id": user_id, "user_name": user_name, "app_id": app_id, "type": type });
  }

  updateInstructionalAffiliation(formData: any, user_id: any, user_email: any, purpose: any, type: any, id: any, student_id: any, student_app_id: any) {
    return this.httpClient.post(`${this.baseUrl}/api/admin/updateInstructionalAffiliation`, { "formData": formData, "user_id": user_id, "user_email": user_email, "purpose": purpose, "type": type, "id": id, "student_id": student_id, "student_app_id": student_app_id });
  }

  ScanData(collegeid: any, education_type: any, patteren: any, faculty: any, app_id: number, user_id: number, value: string, formData: any) {
    return this.httpClient.post(`${this.baseUrl}/api/student/ScanData?value=${value}&user_id=${user_id}&app_id=${app_id}&collegeid=${collegeid}&education_type=${education_type}&patteren=${patteren}&faculty=${faculty}`, formData);
  }

  getUploadedDocuments(user_id: any, app_id: any) {
    return this.httpClient.get(`${this.baseUrl}/api/student/getUploadeddocument_student?user_id=${user_id}&app_id=${app_id}`);
  }

  getPurposeList(purpose_name: any) {
    return this.httpClient.get(`${this.baseUrl}/api/student/getPurposeList?purpose_name=${purpose_name}`);
  }

  // getUserApplication(tracker: any, status: any, app_id: any, offset: any, limit: any, name: any, email: any, globalSearch: any, purpose_search: any) {
  //   return this.httpClient.get(`${this.baseUrl}/api/admin/getApplicationData?tracker=${tracker}&status=${status}&app_id=${app_id}&offset=${offset}&limit=${limit}&name=${name}&email=${email}&globalSearch=${globalSearch}&purpose_search=${purpose_search}`);
  // }

  getDownloadExcel(startDate: any, endDate: any, type: any, tracker: any, status: any) {
    return this.httpClient.get(`${this.baseUrl}/api/admin/getDownloadExcel?startDate=${startDate}&endDate=${endDate}&type=${type}&tracker=${tracker}&status=${status}`);
  }

  getDownloadExcelBySaveAs(filepath: any) {
    let headers = new HttpHeaders();
    return this.httpClient.get(`${this.baseUrl}/api/admin/getDownloadExcel?filepath=${filepath}`, { headers: headers, responseType: 'blob' }).pipe(map((res: any) => {
      return new Blob([res], { type: 'application/pdf' });
    }));
  }

  resendApplication(user_id: any, app_id: any, user_name: any, type: any, admin_email: any) {
    return this.httpClient.post(`${this.baseUrl}/api/admin/resendApplication`, { "user_id": user_id, "app_id": app_id, "user_name": user_name, "type": type, "admin_email": admin_email });
  }

  rejectApplication(user_id: any, app_id: any, user_name: any, type: any, admin_email: any) {
    return this.httpClient.post(`${this.baseUrl}/api/admin/rejectApplication`, { "user_id": user_id, "app_id": app_id, "user_name": user_name, "type": type, "admin_email": admin_email });
  }

  updateNotes(notes_data: any, app_id: any, user_id: any, admin_email: any) {
    return this.httpClient.post(`${this.baseUrl}/api/admin/updateNotes`, { "notes_data": notes_data, "app_id": app_id, "user_id": user_id, "admin_email": admin_email });
  }

  getUserApplication(tracker:any,status:any,app_id:any,offset:number,limit:number,name:any,email:any,globalSearch:any,purpose_search: any){
    return this.httpClient.get(`${this.baseUrl}/api/admin/getApplicationData?tracker=${tracker}&status=${status}&app_id=${app_id}&offset=${offset}&limit=${limit}&name=${name}&email=${email}&globalSearch=${globalSearch}&purpose_search=${purpose_search}`)
  }
  rejectApplications(user_id:number,app_id:number,admin_email:any){
    return this.httpClient.post(`${this.baseUrl}/api/admin/rejectApplication`,{"user_id" :user_id,"app_id" :app_id,"admin_email" : admin_email})
  }

  verifiedApplication(user_id:number,app_id:number,admin_email:any){
    return this.httpClient.post(`${this.baseUrl}/api/admin/verifiedApplication`,{"user_id" :user_id,"app_id" :app_id,"admin_email" : admin_email})
  }

  getWesApplication(app_id:number,name:string,email:any,wesno:number,limit:number,offset:number){
    return this.httpClient.get(`${this.baseUrl}/api/admin/getWesApplication?app_id=${app_id}&name=${name}&email=${email}&wesno=${wesno}&limit=${limit}&offset=${offset}`)
  }

 

}    