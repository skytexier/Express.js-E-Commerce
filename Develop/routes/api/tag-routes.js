const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
  // find all tags
  // be sure to include its associated Product data
router.get('/', (req, res) => {
  Tag.findAll({
    include : [
      {
        model: Product,
        through: ProductTag,
      },
    ],
    }).then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
  });

router.get('/:id', (req, res) => {
    Tag.findOne({
      where: {
        id: req.params.id,
      },
      include : [
        {
          model: Product,
          through: ProductTag,
        },
      ],
      }).then((data) => res.status(200).json(data))
      .catch((err) => res.status(500).json(err));
    });

router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body,
    }).then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
  });

router.put('/:id', (req, res) => {
  Tag.update({
    where: {
      id: req.params.id,
    },
    }).then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
  });

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
    }).then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
  });

module.exports = router;
