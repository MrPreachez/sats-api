const knex = require("knex")(require("../knexfile"));
const fs = require("fs");
const { v4: uuid } = require("uuid");


// Example controller functions
function getAllMembers(req, res) {
    // Implement logic to retrieve all members
  }
  
  function getSingleMember(req, res) {
    // Implement logic to retrieve a single member by ID
  }
  
  function createNewMember(req, res) {
    // Implement logic to create a new member
  }
  
  function updateMemberById(req, res) {
    // Implement logic to update a member by ID
  }
  
  function deleteMemberById(req, res) {
    // Implement logic to delete a member by ID
  }
  
  module.exports = {
    getAllMembers,
    getSingleMember,
    createNewMember,
    updateMemberById,
    deleteMemberById,
  };
  
  
// const createNewMember = async (req, res) => {
//     try {
  
//     const memberSchema = {
//         id: uuidv4(),
//         member_firstName: req.body.memberFirstName,
//         member_lastName: req.body.memberLastName,
//         address: req.body.memberAddress,
//         country: req.body.memberCountry,
//         city: req.body.memberCity,
//         postalCode: req.body.memberPostalCode,
//         contact_phone: req.body.contactPhone,
//         contact_email: req.body.contactEmail,
//         password: req.body.memberPassword
//     };

//     await knex("members").insert(memberSchema);
//     res.status(201).send("new member created")
//     } catch (errors) {
//         res.status(400).send("issue with creating new member")
//     }
// }

// const getAllMembers = async (req, res) => {
//     knex
//     .select("*")
//     .from("members")
//     await ((data) => {
//         if (!data.length) {
//             return res.status(404).send("Members data request not found")
//     }
//     res.status(200).json(data[0])
//     })
//     .catch((err) =>
//     res.status(400).send('Error retrieving members details'))
// }

// const getSingleMember = (req, res) => {
//     knex("members")
//       .where({ id: req.params.id })
//       .then((data) => {
//         if (!data.length) {
//           return res
//             .status(404)
//             .send(`Member with id: ${req.params.id} is not found`);
//         }
//         res.status(200).json(data[0]);
//       })
//       .catch((err) =>
//         res.status(400).send(`Error retieveing member ${req.params.id} ${err}`)
//       );
//   };



