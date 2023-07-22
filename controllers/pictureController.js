const fs = require("fs");
const Picture = require("../models/Picture");
const upload = require("../config/multer");

exports.create = async (req, res) => {
  try {
    const { name } = req.body;

    const file = req.file;
    const picture = new Picture({
      name,
      src: file.path,
    });
    await picture.save();

    res.json({ picture, message: "Imagem inserida com sucesso" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao salvar a imagem." });
  }
};

exports.findAll = async (req, res) => {
  try {
    const pictures = await Picture.find();
    res.json(pictures);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar todas as imagens." });
  }
};

exports.remove = async (req, res) => {
  try {
    const picture = await Picture.findById(req.params.id);
    if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada" });
    }
    await picture.deleteOne();
    fs.unlinkSync(picture.src);

    res.json({ message: "Dado removido com sucesso" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao remover a imagem" });
  }
};
