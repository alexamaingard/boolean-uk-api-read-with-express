const express = require("express");

const { createOne, getAll, getOneById, getPetTypes, getNonMicrochipedPets } = require("./controller");

const router = express.Router();

router.post("/", createOne);

router.get("/", getAll);

router.get("/types", getPetTypes);

router.get("/pets?microchip=false", getNonMicrochipedPets);

router.get("/:id", getOneById);

module.exports = router;