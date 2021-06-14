var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
    name:'AttendanceApi',
    description: 'The nodejs.org example web server.',
    script: 'C:\\Rainbow\\biostar-app\\biostar-attendance\\backend\\dist\\server.js'    
  });


// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
    console.log('install init');
  
    svc.start();
    // console.log('The service exists: ',svc.exists);
    console.log('install started ');
  });
  
  svc.uninstall();
  //svc.install();
 
  console.log('install complete.');