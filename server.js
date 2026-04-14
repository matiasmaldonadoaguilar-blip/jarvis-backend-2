const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // Permite que tu HTML se conecte

// ESTA ES TU "CAJA FUERTE" DE RECETAS
const baseDeDatosRecetas = {
    "jarra de limonada": {
        "titulo": "🍋 Limonada de la Casa",
        "ingredientes": "3 limones, 1lt de agua, miel, hielo.",
        "preparacion": "Exprimir los limones, mezclar en licuadora con agua y miel por 10 segundos. Servir con mucho hielo.",
        // 👇 NUEVOS CAMPOS
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR51hh9H0eYWvoZgpThcqkzXLyT3dyvDc5xWA&s", 
        "decoracion": "Una rodaja de limón en el borde y una ramita de menta fresca.",
        "voz": "Claro, aquí tienes la receta de la limonada. No olvides la decoración con menta."
    },
    "mojito": {
        "titulo": "🍸 Mojito Pro",
        "ingredientes": "Ron blanco, menta, soda, azúcar, lima.",
        "preparacion": "Machacar la menta con azúcar y lima. Añadir hielo picado, ron y completar con soda.",
        // 👇 NUEVOS CAMPOS
        "imagen": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500",
        "decoracion": "Una rama generosa de menta y una bombilla (pajita) ecológica.",
        "voz": "Excelente elección. El mojito Pro requiere hielo picado y menta fresca."
    },
    "pisco": {
        "titulo": "Pisco Sour",
        "ingredientes": " 2oz Pisco Puro, 1oz Zumo de limo, Huevo, 1oz Goma",
        "preparacion": "En la licuadora echa 2 y media de pisco despues una onza de goma, de zumo, luego de eso echa solo la yema del huevo, y despues licua durante maximmo 1 minuto",
        //CAMPO APARTE
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgYj2nBlYbMFUlb3FlJ5_GQPIscDeHXE8-w&s",
        "decoracion": "Para la decoracion solo le echas 3 gotas de vino en el medio",
        "voz": "Primero En la licuadora echa 2 y media de pisco despues una onza de goma, de zumo, luego de eso echa solo la yema del huevo, y despues licua durante maximmo 1 minuto",
    }
};
// La "Puerta" de enlace (Endpoint)
app.get('/receta', (req, res) => {
    const nombre = req.query.nombre.toLowerCase();
    const receta = baseDeDatosRecetas[nombre];

    if (receta) {
        res.json(receta); // Envía la receta si existe
    } else {
        res.status(404).json({ error: "Receta no encontrada" });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Cerebro de Jarvis funcionando en http://localhost:${PORT}`);
});