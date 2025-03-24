exports.getMapData = (req, res) => {
    res.json({
      center: [20.5937, 78.9629], // India's coordinates
      zoom: 4,
    });
  };
  