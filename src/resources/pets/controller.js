const res = require("express/lib/response");
const Pet = require("./model");

const createOne = async (req, res) => {
  const petToCreate = {
    ...req.body
  };

  const createOne = Pet().createOnePet;
  const thisRes = await createOne(petToCreate, res);
  return res.json({ data: thisRes });
}

const getAll = async (req, res) => {
  const all = Pet().getAll;
  const thisRes = await all(res);
  return res.json({ data: thisRes });
}

const getOneById = async (req, res) => {
  const idToGet = req.params.id;

  const one = Pet().getOneById;
  const thisRes = await one(idToGet);
  return res.json({ data: thisRes });
}

const getPetTypes = async (req, res) => {
  const types = Pet().getPetTypes;
  const thisRes = await types(res);
  //make it so that types appears one per type
  return res.json({ data: thisRes });
}

const getNonMicrochipedPets = async (req, res) => {
  const nonMicrochiped = Pet().getNonMicrochipedPets;
  const thisRes = await nonMicrochiped(res);
  return res.json({ data: thisRes });
}

module.exports = {
  createOne,
  getAll,
  getOneById,
  getPetTypes,
  getNonMicrochipedPets
}