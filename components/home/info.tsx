export default function FeatureIcons() {
  const features = [
    {
      label: "Vegan",
      icon: (
        <svg width="32" height="32" fill="#555" style={{width: 'auto'}}>
          <path d="M10 2l4 6 4-6" stroke="#555" strokeWidth="2" fill="none" />
          <circle cx="16" cy="20" r="8" stroke="#555" strokeWidth="2" fill="none" />
        </svg>
      ),
    },
    {
      label: "Non-GMO",
      icon: (
        <svg width="32" height="32" fill="#555" style={{width: 'auto'}}>
          <circle cx="16" cy="16" r="10" stroke="#555" strokeWidth="2" fill="none" />
          <line x1="8" y1="8" x2="24" y2="24" stroke="#555" strokeWidth="2" />
        </svg>
      ),
    },
    {
      label: "Gluten-Free",
      icon: (
        <svg width="32" height="32" fill="#555" style={{width: 'auto'}}>
          <circle cx="16" cy="16" r="10" stroke="#555" strokeWidth="2" fill="none" />
          <path d="M12 12l8 8" stroke="#555" strokeWidth="2" />
        </svg>
      ),
    },
    {
      label: "FDA Registered",
      icon: (
        <svg width="32" height="32" fill="#555" style={{width: 'auto'}}>
          <polygon
            points="16,4 20,12 28,12 22,18 24,28 16,22 8,28 10,18 4,12 12,12"
            stroke="#555"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
    },
    {
      label: "USDA Organic",
      icon: (
        <svg width="32" height="32" fill="#555" style={{width: 'auto'}}>
          <path
            d="M16 4c6 0 10 4 10 10s-4 10-10 10S6 20 6 14 10 4 16 4z"
            stroke="#555"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M12 18c4-2 6-5 6-10"
            stroke="#555"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-3" style={{ background: "#E8E6FF" }}>
      <div className="container">
        <div className="row text-center justify-content-center">
          {features.map((item, index) => (
            <div className="col-6 col-md-2 mb-4" key={index}>
              <div className="d-flex flex-column align-items-center gap-2">
                {item.icon}
                <span style={{ color: "#555", fontWeight: "500", fontSize: "16px" }}>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
