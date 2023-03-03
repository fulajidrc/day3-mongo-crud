const usersRouter = require('./users')
const categoryRouter = require('./category.route')
const postRouter = require('./post.route')
const authRouter = require('./auth.route')

const router = {}

router.usersRouter = usersRouter;
router.categoryRouter = categoryRouter;
router.postRouter = postRouter;
router.authRouter = authRouter;

module.exports = router;