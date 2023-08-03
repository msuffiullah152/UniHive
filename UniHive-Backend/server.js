const express = require("express");
const cors = require("cors");
const {User, group} = require('./models'); 
const session = require("express-session"); //Might not need to use since were using socket.io
const http = require("http"); //Socket.io is created upon a http server so this is the recommended way of establishing it
//We grab the server class from the socket.io libary
const {Server}=require("socket.io")
const bcrypt=require("bcrypt");
require("dotenv").config();
const app = express();
app.use(express.json());//Allows app to parse JSON bodies
app.use(cors({ origin: "*", methods: ["GET", "POST"] }));//Sets up cors
//Creates the http server with express
const server=http.createServer(app);

//const app = express();
app.use(
    cors({
      origin: ["*"],
      methods: ["GET", "POST", "PATCH", "DELETE"],
    })
  );


const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  },
});

//Creates the different namespaces for our sockets
//A namespace allows us to separate connections so that they can have different functionalities.
const groupChatNamespace= io.of("/groupchat");
const directMessageNamespace= io.of("/directMessage");
const feedNamespace= io.of("/feed");

//group_name is a unique string, allowing for this to be a unique room for the group.  
//Takes a call back function that will join the room and allow the user to listen for and emit events.
/*
groupChatNamespace.on('connection', socket => {

 
  //Joins the specified room
  socket.join(group_name);

   // Listen for chat message
   socket.on('chatMessage', (msg) => {
    console.log('Message received: ' + msg);

    // Emit event to same room 
    chatNamespace.in(group_name).emit('newMessage', msg);
  });

});
*/



/*
//Create groupchat logic
groupChatNamespace.on("connection",(socket)=>{

   // socket.join("Testgroup");

    socket.on("creategroup", async (formData)=>{
        console.log('Received create group(hive) request:', formData);
 
        try{
            await group.create({
                group_name:formData.hiveName,
                group_description:formData.hiveDescription,
                group_college:formData.selectedCollege, 
                college_major:formData.selectedMajor,

             });

        }catch(e){
            //Returns error if group was not successfully made.
            console.error(e);
        }
    })

});
*/

//Signup backend socket.io logic ########################################
io.on('connection',(socket)=> {

    //Sign up form Logic################################
    socket.on('signup', async (formData) => {
    console.log('Received signup request:', formData);

  // Input validation
 //makes sure that the user inputted the correct confirm password
  if (formData.password !== formData.confirmPassword) {
    console.log('Passwords do not match');
    };
  

  //Trys to create  a new user based to the recieved values from the client-side
  try {

    // Save user to database
        User.create({
        name: formData.fullName,
        college_level: formData.collegeLevel,
        email: formData.email,
        password: formData.password,
        college: formData.selectedCollege,
        major: formData.selectedMajor,
    });
    //Returns console message if the user was successfully created
    console.log( 'User created!');

  } catch (err) {
    //Returns an error if the user was not successfully created
    console.error(err);
   
  }
  console.log("User connected:", User.name);

  // Assuming you have the user's ID available, you can assign it to the socket object
  socket.userId = User.name; // Replace "123" with the actual user's ID
});

//Socket.io LOGIN LOGIC######################################################
socket.on('login', async (formData) => {
    try {
        //Finds the user based on the username the client has provided
        const user = await User.findOne({ where: { name: formData.username } });
    
        //If not username is found then an error will occur
        if (user === null) {
          
            console.log("Incorrect credentials");
          
        }
    
        //Makes sure that the password the the user entered matches the stored password.
        if(formData.password === user.password){
          
            // passwords match
            //Sets the session id to the users id
            //req.session.userId = user.id;
           
            //Returns a status message if the user was logged in successfully.
            console.log("Logged in successfully");
          } else {
            //Returns ann error if the passwords don't match.
            console.log("Incorrect credentials");
          }
        }//Returns an error if the await did not return a promise.
       catch (error) {
        console.error(error);
      }

     
    });




   //Create Group(Hive) Logic############################
   //Gets the form data from the modal on the client side and puts that data into the database.
   socket.on("creategroup", async (formData)=>{
    console.log('Received create group(hive) request:', formData);

    try{
          group.create({
            group_name:formData.hiveName,
            group_description:formData.hiveDescription,
            group_college:formData.selectedCollege, 
            college_major:formData.selectedMajor,

         });

    }catch(e){
        //Returns error if group was not successfully made.
        console.error(e);
    }
})











    //Need to test how to set the users socket id.
/*
    console.log("User connected:", User.name);

    // Assuming you have the user's ID available, you can assign it to the socket object
    socket.userId = User.name; // Replace "123" with the actual user's ID
*/


});




/*
//SignUp Backend Logic Axios##########################
app.post("/signup", async (req, res) => {

    
    console.log('Received signup request:', req.body);

  // Input validation
 //makes sure that the user inputted the correct confirm password
  if (req.body.password !== req.body.confirmPassword) {
    return res.status(400).json({
      error: 'Passwords do not match'
    });
  }

  //Trys to create  a new user based to the recieved values from the client-side
  try {

    // Save user to database
    await User.create({
        name: req.body.fullName,
        college_level: req.body.collegeLevel,
        email: req.body.email,
        password: req.body.password,
        college: req.body.selectedCollege,
        major: req.body.selectedMajor,
    });
    //Returns console message if the user was successfully created
    res.status(201).json({ message: 'User created!' });

  } catch (err) {
    //Returns an error if the user was not successfully created
    console.error(err);
    res.status(500).json({ error: 'Error creating user' }) 
  }


});
*/
/*
//Login back end logic using socket.io instead of axios
io.on('connection',(socket)=> {

    socket.on('login', async (formData) => {
        try {
            //Finds the user based on the username the client has provided
            const user = await User.findOne({ where: { name: formData.username } });
        
            //If not username is found then an error will occur
            if (user === null) {
              return res.status(401).json({
                message: "Incorrect credentials"
              })
            }
        
            //Makes sure that the password the the user entered matches the stored password.
            if(formData.password === user.password){
              
                // passwords match
                //Sets the session id to the users id
                //req.session.userId = user.id;
      
                //Returns a status message if the user was logged in successfully.
                res.status(200).json({
                  message: "Logged in successfully",
                  user: {
                    name: user.username,
                    password: user.password
                  }
                })
              } else {
                //Returns ann error if the passwords don't match.
                return res.status(401).json({
                  message: "Incorrect credentials",
                });
              }
            }//Returns an error if the await did not return a promise.
           catch (error) {
            console.error(error);
            res.status(500).json({ message: "An error occurred during the login process"})
          }
        });
    });
*/


//LOGIN Back-End Logic#################################
/*
app.post("/login", async (req, res) => {
    try {
      //Finds the user based on the username the client has provided
      const user = await User.findOne({ where: { name: req.body.username } });
  
      //If not username is found then an error will occur
      if (user === null) {
        return res.status(401).json({
          message: "Incorrect credentials"
        })
      }
  
      //Makes sure that the password the the user entered matches the stored password.
      if(req.body.password === user.password){
        
          // passwords match
          //Sets the session id to the users id
          //req.session.userId = user.id;

          //Returns a status message if the user was logged in successfully.
          res.status(200).json({
            message: "Logged in successfully",
            user: {
              name: user.username,
              password: user.password
            }
          })
        } else {
          //Returns ann error if the passwords don't match.
          return res.status(401).json({
            message: "Incorrect credentials",
          });
        }
      }//Returns an error if the await did not return a promise.
     catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred during the login process"})
    }
});

  */





//Defines the server port and Starts the server
const port = 3010;
app.listen(3011, () => {
    console.log(`Server running on port 3011`);
    //console.log("SERVER IS RUNNING AT "+ server.address().port);
  });
  
io.listen(port, () => {
  console.log(`Server running on port ${port}`);
  //console.log("SERVER IS RUNNING AT "+ server.address().port);
});



/*
// Define the POST endpoint to handle form submission
router.post("/api/submit-form", async (req, res) => {
  try {
    // Get the form data from the request body
    const formData = req.body;

    // Insert the form data into the database using the User model
    const newUser = await User.create({
      name: formData.fullName,
      email: formData.email,
      password: formData.password,
      college_level: formData.collegeLevel,
      college:formData.selectedCollege,
      major:formData.selectedMajor,
    });

    // Respond with a success message and the newly created user (optional)
    res.json({ message: "Form data submitted successfully!", newUser });
  } catch (error) {
    console.error(error);
    // Handle error (e.g., send an error response to the frontend)
    res.status(500).json({ message: "Error submitting form data." });
  }
});

// Export the router
module.exports = router;

 const newUser = await User.createTable({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        college_level: req.body.college_level,
        college:req.body.college,
        major:req.body.major,
    });




/*


      const newUser = await User.create({
        name: formData.name,
        college_level: formData.college_level,
      email: formData.email,
      password: formData.password,
      college:formData.college,
      major:formData.major,
      course_intrest: formData.course_intrest,
    });

*/