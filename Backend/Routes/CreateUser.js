// authRoutes.js
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');

// Signup route
router.post('/signup', [
    body('email', "Incorrect Email").isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', "Incorrect Password").isLength({ min: 5 })],
    async (req, res) => {
        // Validation
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
            });
            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Server Error" });
        }
    }
);

// Login route
router.post('/login', [
    body('email', "Incorrect Email").isEmail(),
    body('password', "Incorrect Password").isLength({ min: 5 })],
    async (req, res) => {
        // Validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        try {
            const userData = await User.findOne({ email });
            if (!userData || userData.password !== password) {
                return res.status(400).json({ error: "Invalid credentials" });
            }
            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Server Error" });
        }
    }
);

module.exports = router;
