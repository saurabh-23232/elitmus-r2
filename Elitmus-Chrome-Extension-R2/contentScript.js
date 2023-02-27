(() => {
  //all Variables 
  let testStatus = false,
    micWorking = false,
    internetworking=false,
    camWorking = false;
  let totalTabsOpened = 0;

  //adds an event listener to the extension to listen 
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, len } = obj;
    totalTabsOpened = len;
    if (type === "PageLoaded") {
      Dashboard();
    }
    //Send back response
    response({ response: "Response from background script" });
  });



  //A function to check mic
  const checkMyMic = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
    
      .then(function (stream) {
        console.log("Microphone is available.");
        micWorking = true;
        alert("Microphone is Working Fine");
      })
      .catch(function (error) {
        alert("Microphone is not available.");
      });
  };

// Function to check internet connection
  const checkmyinternet = () => {

    let status = navigator.onLine;
    if(status===true){
          console.log("Internet is available.");
          internetworking = true;
          alert("Internet is Working Fine");
        }
        // .catch(function (error) {
          else{
          alert("internet is not available.");
        }
  
  };

  //Function to check camera
  const checkMyCam = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        camWorking = true;
        alert("Camera detected and perfectly Fine");
      })
      .catch(function (error) {
        alert("Camera is not available.");
      });
  };


  // Start Test Button
  const createStartTestButton = () => {
    let startTest = document.createElement("button");
    startTest.className = "button";
    startTest.innerText = "Begin Your Test";
    startTest.title = "Click to begin the test";
    document.body.append(startTest);
    startTest.addEventListener("click", startTestEvent);
  };

  //End Test Button
  const createEndTestButton = () => {
    let endTest = document.createElement("button");
    let nextLine = document.createElement("br");
    endTest.className = "button";
    endTest.innerText = "End Your Test";
    endTest.title = "Click to end Test";
    document.body.append(endTest);
    document.body.append(nextLine);
    endTest.addEventListener("click", endTestEvent);
  };

  // Check Cam Button
  const createCheckCamButton = () => {
    let checkCam = document.createElement("button");
    let nextLine = document.createElement("br");
    checkCam.className = "check-button";
    checkCam.innerText = "Check Your system Camera";
    checkCam.title = "Click to check Cam";
    document.body.append(checkCam);
    document.body.append(nextLine);
    checkCam.addEventListener("click", checkMyCam);
  };

  //Check Mic Button
  const createCheckMicButton = () => {
    let checkMic = document.createElement("button");
    let nextLine = document.createElement("br");
    checkMic.className = "check-button";
    checkMic.innerText = "Check Your system Mic";
    checkMic.title = "Click to check Mic";
    document.body.append(checkMic);
    document.body.append(nextLine);
    checkMic.addEventListener("click", checkMyMic);
  };


//create check button
  const createInternetButton = () => {
    let checkinternet = document.createElement("button");
    let nextLine = document.createElement("br");
    checkinternet.className = "check-button";
    checkinternet.innerText = "Check Your Internet connection";
    checkinternet.title = "Click to check Internet Connection";
    document.body.append(checkinternet);
    document.body.append(nextLine);
    checkinternet.addEventListener("click", checkmyinternet);
  };



  //Dashboard
  const Dashboard = () => {
    createStartTestButton();
    createEndTestButton();
    createCheckCamButton();
    createCheckMicButton();
    createInternetButton();
  
  };

  //This thing works when we click on start test
  const startTestEvent = () => {
    testStatus = true;
    //If the cam or mic is not working then we won't let user start the test
    if (!camWorking || !micWorking ||  !internetworking) {
      alert("Please check your webcam, Internet and mic");
    } else {
      //If more than one tab open
      if (totalTabsOpened > 1) {
        alert("Please Close all other tabs");
      } else {
        /* Full Screen */
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
          //Alert on switches tab
          document.addEventListener("visibilitychange", function () {
            if (testStatus && document.hidden) {
              alert("!! Close Other Tabs !!");
            }
          });
        }
      }
    }
  };
  
// Keys disabled
  document.onkeydown = function(e) {
    if (e.key === "F11") {
        return false;
    }
    if (e.key === "Escape") {
        return false;
    }
};
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);
document.onmousedown = function(e) {
    if (e.button == 2) {
        return false;
    }
};
 

  //End test
  const endTestEvent = () => {
    testStatus = false;
    document.exitFullscreen();
    window.location.reload();
  };
})();




