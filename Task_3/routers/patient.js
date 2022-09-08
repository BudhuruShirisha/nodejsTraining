const Router = require("express");
const router = Router();
const config = require("../src/config/app.sepc.json")
const { processFun, getcontactRec } = require("../src/contact/contact.js")
const { Validation } = require("../src/patient/patient");
const {
    createRec,
    getRec,
    updateRec,
    deleteRec,
} = require("../src/patient/controller");
const { authenticateJWT } = require("../src/middleware/middleware")
router.post("/create/", authenticateJWT, Validation, createRec);

router.get("/get/", getRec);

router.put("/update/", updateRec);

router.delete("/delete/", deleteRec);
router.post("/contact", authenticateJWT, async(req, res) => {
    try {
        const __action = req.body.__action;
        const processFunction = processFun(__action);
        const contactBody = req.body.body || {};
        contactBody.refrectype = config.patient.rectype;
        const result = await processFunction(contactBody);
        res.status(200).json({ status: "Success", results: result });
    } catch (error) {
        res.status(400).json({ status: "Error :", error: error });
    }
})
router.get("/contact/get", getcontactRec);
module.exports = router;