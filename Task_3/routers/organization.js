const Router = require("express");
const router = Router();
const config = require("../src/config/app.sepc.json");
const { Validation } = require("../src/organization/organization.js");
const {
    createRec,
    getRec,
    updateRec,
    deleteRec,
} = require('../src/organization/controller.js');
const { processFun } = require("../src/contact/contact")

router.post("/create/", Validation, createRec);

router.get("/get/", getRec);

router.put("/update/", updateRec);

router.delete("/delete/", deleteRec);

router.post("/contact", async(req, res) => {
    try {
        const __action = req.body.__action;
        const processFunction = processFun(__action);
        const contactBody = req.body.body || {};
        contactBody.refrectype = config.organization.rectype;
        console.log(contactBody)
        const result = await processFunction(contactBody);
        res.status(200).json({ status: "Success", results: result });
    } catch (error) {
        res.status(400).json({ status: "Error :", error: error });
    }
})


module.exports = router;