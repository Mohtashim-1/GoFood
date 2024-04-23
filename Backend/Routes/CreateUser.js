const express = require('express')
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

// create user route
router.post('/createuser', [
    body('email', "Incorrect Email").isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', "Incorrect Password").isLength({ min: 5 })]
    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            await User.create({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                location: req.body.location,
            })
            res.json({ success: true })
        }
        catch (error) {
            console.log(error)
            res.json({ fail: false, error })
        }
    }
)

// login route


// create user route
router.post('/loginuser', [
    body('email', "Incorrect Email").isEmail(),
    body('password', "Incorrect Password").isLength({ min: 5 })],
    async (req, res) => {
    let email = req.body.email
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
          let userData =  await User.findOne(email)
            if(!userData){
                return res.status(400).json({error:"Try Logging with correct credentials"})
            }
            
            if(!req.body.password === userData.password){
                return res.status(400).json({error:"Try Logging with correct credentials"})
            }
            return res.json({success: true})
            }
            
        
        catch (error) {
            console.log(error)
            res.json({ fail: false, error })
        }
    }
)

module.exports = router;