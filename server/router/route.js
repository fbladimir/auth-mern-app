import { Router } from 'express'; 

const router = Router(); 

/* Post Method */ 

router.route('/register').post((req, res) => res.json('register route')); 
router.route('/registerMail').post(); //send email 
router.route('/authenticate').post(); // authenticate user 
router.route('/login').post(); // login in app 



/*GET methods */ 

router.route('/user/:username').get();  //user with username 
router.route('/generateOTP').get();  // generate random otp 
router.route('/verifyOTP').get();  // verify generated otp 
router.route('/createResetSession').get();  //reset all the variables 


/* PUT METHODS */ 
router.route('/updateuser').put();  //update the user profile 
router.route('/resetPassword').put();  //use to reset password 

export default router; 

