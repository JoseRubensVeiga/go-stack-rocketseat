import * as Yup from 'yup';

import Recipient from '../models/Recipient';

class RecipientController {

  async find(req, res) {
    const { id } = req.params;

    const recipient = await Recipient.findByPk(id);

    if (!recipient) {
      return res.status(400).json({
        error: `There is no recipient with this id: ${id}.`
      })
    }

    return res.json(recipient)
  }

  async index(req, res) {
    return res.json(await Recipient.findAll());
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zip_code: Yup.string().required()
    });

    if(! (await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Validations fails'
      });
    }

    const recipient = await Recipient.create(req.body);
  
    res.json(recipient);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.number(),
      complement: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      zip_code: Yup.string()
    });

    if(! (await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Validations fails'
      });
    }

    const { id } = req.params;

    const recipientExists = await Recipient.findByPk(id);

    if (!recipientExists) {
      return res.status(400).json({
        error: `There is no recipient with this id: ${id}.`
      })
    }

    Recipient.update(req.body, {
      where: {
        id
      }
    });

    return res.json({
      message: 'success'
    });
  }

  async destroy(req, res) {
    const { id } = req.params;

    const recipientExists = await Recipient.findByPk(id);

    if (!recipientExists) {
      return res.status(400).json({
        error: `There is no recipient with this id: ${id}.`
      })
    }

    Recipient.destroy({
      where: {
        id
      }
    });

    return res.json({
      message: 'success'
    });
  }
}

export default new RecipientController();