// Bibliotheque de validation
const Joi = require('joi');

const options = {
    abortEarly: false, // Quand il affiche les erreurs, comme cela il ne s'arrete pas a la premier erreur
    errors: { // Pour formater le resultat
      wrap: {
        label: ''
      }
    }
  };

//schema c'est genre le model (schema de donner que l'on a creer dans validation folder pour valider les donner entrer par l'utilisateur)
module.exports = (schema) => (req, res, next) => {
    // Transphormer le schema en un objet Joi puis valider le body avec les parametre contenu dans (obtions)
    const result = Joi.object(schema).validate(req.body, options);

    // si il y'a pas d'erreur il passe direction au prochaine middleware pour fonction 
    // si errer
    if (result.error) {
        // details des resultat de lerreur on map sur eux pour retourner que les erreurs que l'on veux afficher
        const errors = result.error.details.map(detail => {
            return {
                key: detail.context.key,
                message: detail.message
            }
        });
        return res.status(422).json(errors);
    }
    else {
        next();
    }
}
