import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuario";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO usuario(`nome`, `email`, `telefone`, `cidade`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.telefone,
    req.body.cidade,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE usuario SET `nome` = ?, `email` = ?, `telefone` = ?, `cidade` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.telefone,
    req.body.cidade,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuario WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};