const express = require ('express');
const app = express();
const port = 3000;

app.get ('/', (req, res)=>{
  res.send('hola respuesta');
  });

  app.get ('/inicio', (req, res)=>{
    res.send('hola desde el inicio');
  });

  app.get ('/autos', (req, res)=>{
    res.json([
      {
        name: 'coche',
      precio: 68900
      },
      {
        name: 'coche2',
      precio: 38900
      },
    ]

    );
  });
  app.get ('/autos/:id', (req, res)=>{
    const {id} = req.params;

    res.json(
      {
        id,
        name: 'coche',
        precio: 68900
      },
    );
  });

  app.get ('/autos/:autId/categoria/:catId', (req, res)=>{
    const {autId, catId} = req.params;

    res.json(
      {
        autId,
        catId,
      },
    );
  });


app.listen(port, ()=>{
  console.log("mi aplicacion" + port);
});

