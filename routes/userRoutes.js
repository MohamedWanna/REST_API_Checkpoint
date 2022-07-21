const express=require('express')
const { addUser, getUsers,deleteUser, updateUser} = require('../controllers/userControllers')
const router=express.Router()
/**
 * @params POST /user/adduser
 * @description add a new user to the database
 * @access public
 */
router.post("/adduser",addUser)

/**
 * @params GET /user/getuser
 * @description get all users from the database
 * @access public
 */
router.get("/",getUsers)

/**
 * @params PUT /user/:id
 * @description create a modification on a user on the database
 * @access public
 */
router.put("/:id",updateUser)

/**
 * @params DELETE /user/:id
 * @description delete a user from the database
 * @access public
 */
router.delete("/:id",deleteUser)

module.exports = router