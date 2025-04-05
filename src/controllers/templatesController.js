const templatesController = {
    getTemplates: async (req, res) => {
      try {
        // Exemplo: retorno de templates hardcoded; depois você pode buscar no Supabase
        const templates = [
          {
            templateId: "classic-easter",
            name: "Clássico de Páscoa",
            description: "Template tradicional com ovos decorados e coelhinhos."
          },
          {
            templateId: "minimal-pastel",
            name: "Minimalista Pastel",
            description: "Design clean com cores suaves e layout moderno."
          },
          {
            templateId: "easter-egg-hunt",
            name: "Caça aos Ovos",
            description: "Cartão interativo onde você clica nos ovos para revelar surpresas."
          }
        ];
        res.json(templates);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  };
  
  module.exports = templatesController;  