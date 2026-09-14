const express= require("express")
const userController= require("../controllers/userContrellrs")
const router = express.Router()

router.get("/users",userController.getAll)

module.exprorts=router;
