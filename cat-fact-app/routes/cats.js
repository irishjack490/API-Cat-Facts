const express = require('express');
const router = express.Router();


router.get('/cats/fact', (req, res, next) => {
  axios.get('https://catfact.ninja/fact')
    .then(response => {
      const fact = response.data.fact;
      res.render('cat-fact', { fact });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
});

// // Export the router
// module.exports = router;