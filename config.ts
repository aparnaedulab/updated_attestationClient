export var config = {
    //serverUrl : "http://sndt.admissiondesk.org:5000",
    // serverUrl : "https://mu.etranscript.in",
    // serverUrl : "https://guattestation.studentscenter.in",
  
    serverUrl  : "http://localhost:5000",
    //socketioUrl : "http://localhost:2",
    ENV_sendgrid_Twilio : "production",
     transUploadUrl:"http://localhost:5000/api/student/upload_transcript",
     NameChangeLetterUrl:"http://localhost:5000/api/student/upload_letterforNameChange",
     markListUploadUrl : "http://localhost:5000/api/student/uploadUserMarkList",
     curriculumUploadUrl: "http://localhost:5000/api/student/upload_curriculum",
     migrationUploadUrl :"http://localhost:5000/api/student/upload_migration",
    letterUploadUrl: "http://localhost:5000/api/student/upload_gradeToPercentLetter",
    CompetencyletterUploadUrl :"http://localhost:5000/api/student/upload_CompetencyLetter",
    PaymentIssueUrl :"http://localhost:5000/api/student/Upload_PaymentIssueUrl",
    WesLetterUrl :"http://localhost:5000/api/student/WesLetterUrl",
    migrationurl :'',
    verificationurl :'',
    convactionurl :'',
    pdcurl : ''
    // markListUploadUrl : "https://mu.etranscript.in/api/attestation/uploadMarkList",
    // transUploadUrl:"https://mu.etranscript.in/api/attestation/upload_transcript",
    // curriculumUploadUrl: "https://mu.etranscript.in/api/attestation/upload_curriculum",
    // letterUploadUrl: "https://mu.etranscript.in/api/attestation/upload_gradeToPercentLetter",
  }
  