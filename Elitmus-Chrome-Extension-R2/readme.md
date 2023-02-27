# ELITMUS CHROME EXTENSION - R2
A chrome extension that works on top of any exam website, starting when the
user opens a exam test page. This extension is useful to preventing people from any type of malicious activities in online exams.
When the user clicks on Start Test, the extension check for Webcam, Mic, Internet and goes into full screen and warns when tabs are switch.
Once the user clicks the end test button, the chrome extension is disabled automatically and the browser returns to its normal state. 

# Installation
1. Download the Elitmus Test Chrome Extension Folder from github.
2. Then go to Google Chrome, click on extensions icon on top right corner of browser.
3. Then from dropdown menu click on Manage Extensions.
4. Then click Load Unpacked, and then select downloaded folder i.e. Elitmus Chrome Extension - R2.
5. Now this extension should appear with all of your other extension, and pin it by again going in the dropdown by clicking 
extensions icon on top right corner of browser.
6. Now go to https://www.google.com/ and your extension is good to go.(Extension does not work on any other website but you can edit to work on other websites.)

# Feature
-  Works only for selected url (deafult - google homepage)
-  Trigger to start the extension working(click on Start Test)
-  Full screen mode
-  Popup when trying to switch
-  Warns if more than one tab are running while trying to start the test
-  Check for availability of Microphone
-  Check for availability of Camera 
-  Check for availability of Internet    

# Files

- Background: To check it is Google homepage and completely loaded, number of tabs open at that instance
- Contentscript: To check cam, mic, internet. Create button, full screen , disabled keys, end test 
- popup: If site is google homepage then load extension.
- user: To get user realted information using geoiplookup and store all detail to local storage

I am deeply appreciative to Elitmus for giving me the opportunity to build my first chrome extension project. This elitmus opportunity gave me chance to use my web development skills in practical and learn more around it. I am impressed by how much I was able to learn quickly under pressure, my approach to solve errors and accomplish assignment in just two days.

Thank you Elitmus.