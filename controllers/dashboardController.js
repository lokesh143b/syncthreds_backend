exports.getDashboard = (req, res) => {
  res.json({

    // major city cordinates in india
    cards: [
      { id: 1, title: "New Delhi", coordinates: [28.6139, 77.2090] },
      { id: 2, title: "Mumbai", coordinates: [19.0760, 72.8777] },
      { id: 3, title: "Bangalore", coordinates: [12.9716, 77.5946] },
      { id: 4, title: "Chennai", coordinates: [13.0827, 80.2707] },
      { id: 5, title: "Kolkata", coordinates: [22.5726, 88.3639] },
      { id: 6, title: "Hyderabad", coordinates: [17.3850, 78.4867] },
      { id: 7, title: "Pune", coordinates: [18.5204, 73.8567] },
      { id: 8, title: "Ahmedabad", coordinates: [23.0225, 72.5714] },
      { id: 9, title: "Jaipur", coordinates: [26.9124, 75.7873] },
      { id: 10, title: "Surat", coordinates: [21.1702, 72.8311] },
      { id: 11, title: "Lucknow", coordinates: [26.8467, 80.9462] },
      { id: 12, title: "Kanpur", coordinates: [26.4499, 80.3319] },
      { id: 13, title: "Nagpur", coordinates: [21.1458, 79.0882] },
      { id: 14, title: "Visakhapatnam", coordinates: [17.6868, 83.2185] },
      { id: 15, title: "Indore", coordinates: [22.7196, 75.8577] },
      { id: 16, title: "Thane", coordinates: [19.2183, 72.9781] },
      { id: 17, title: "Bhopal", coordinates: [23.2599, 77.4126] },
      { id: 18, title: "Patna", coordinates: [25.5941, 85.1376] },
      { id: 19, title: "Vadodara", coordinates: [22.3072, 73.1812] },
      { id: 20, title: "Ludhiana", coordinates: [30.9010, 75.8573] }
    ]
  });
};
