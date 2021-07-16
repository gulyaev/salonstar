const {Router} = require ('express');
const router = Router();

// /api/auth/register
router.post(
    '/register', 
    async (req, res) => {
        try {
            const {email, password} = req.body
        } catch (e) {
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
        }
});

// /api/auth/login
router.post(
    '/login', 
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
    
            if (!errors.isEmpty) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при входе в систему'
                });
            }
    
            
    
        } catch (e) {
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
        }
});


module.exports = router;