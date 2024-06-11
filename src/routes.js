const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteById,
  deleteNoteByIdHandler,
} = require("./handler");

const rountes = [
  // create note
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  // display note at dasboard
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  // open created note to edit, get by search id
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdHandler,
  },
  // save edited note
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNoteByIdHandler,
  },
  // delete note
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteByIdHandler,
  },
];

module.exports = rountes;
