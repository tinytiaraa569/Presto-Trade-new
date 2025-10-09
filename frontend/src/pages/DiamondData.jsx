// Import all diamond images
import brilliant_round_main from "../assets/diamonds/brilliant_round_diamond.png";
import brilliant_round_side from "../assets/diamonds/brilliant_round_side_diamond.png";
import brilliant_round_top from "../assets/diamonds/brilliant_round_diamond.png";
import brilliant_round_cert from "../assets/diamonds/brilliant_round_diamond.png";
import brilliant_round_video from "../assets/diamond.mp4";

import oval_fancy_main from "../assets/diamonds/oval_fancy_diamond.png";
import oval_fancy_side from "../assets/diamonds/oval_fancy_side_diamond.png";
import oval_fancy_hand from "../assets/diamonds/oval_fancy_diamond.png";
import oval_fancy_video from "../assets/daimond_video.mp4";

// Diamond Types
export const diamondTypes = {
  NATURAL: 'Natural',
  LAB_GROWN: 'Lab-Grown'
};

// Diamond Categories (based on type)
export const diamondCategories = {
  NATURAL: {
    MELEE: 'Melee Natural',
    LARGE: 'Large Natural',
    SPECIAL_WITH_REPORT: 'Special Natural (With Report)',
    SPECIAL_WITHOUT_REPORT: 'Special Natural (Without Report)'
  },
  LAB_GROWN: {
    MELEE: 'Melee Lab-Grown',
    LARGE: 'Large Lab-Grown',
    WITH_REPORT: 'Lab-Grown (With Report)',
    WITHOUT_REPORT: 'Lab-Grown (Without Report)',
    GCAL_8X_WITH_REPORT: 'GCAL 8X Lab-Grown (With Report)',
    GCAL_8X_WITHOUT_REPORT: 'GCAL 8X Lab-Grown (Without Report)'
  }
};

// All categories flat list for filters
export const allDiamondCategories = [
  'All Diamonds',
  ...Object.values(diamondCategories.NATURAL),
  ...Object.values(diamondCategories.LAB_GROWN)
];

// Diamond Shapes (different from categories)
export const diamondShapes = [
  'All Shapes',
  'Round',
  'Princess',
  'Cushion',
  'Oval',
  'Emerald',
  'Pear',
  'Marquise',
  'Heart',
  'Radiant',
  'Asscher',
  'Baguette',
  'Trillion'
];

// Carat Weight Ranges
export const caratWeightRanges = {
  MELEE: '0.001 - 0.18 ct',
  SMALL: '0.18 - 0.50 ct',
  MEDIUM: '0.50 - 1.00 ct',
  LARGE: '1.00 - 3.00 ct',
  EXTRA_LARGE: '3.00+ ct'
};

// Diamond carat options for filters
export const diamondCarats = [
  '0.01-0.18', '0.18-0.25', '0.25-0.50', '0.50-0.75', '0.75-1.0', 
  '1.0-1.25', '1.25-1.5', '1.5-1.75', '1.75-2.0', '2.0-2.5', 
  '2.5-3.0', '3.0-4.0', '4.0-5.0', '5.0+'
];

// The 5 Cs of Diamonds
export const fiveCs = {
  CARAT: 'Carat Weight',
  CUT: 'Cut Quality',
  COLOR: 'Color Grade',
  CLARITY: 'Clarity Grade',
  CERTIFICATE: 'Certification'
};

// Enhanced Filter Options
export const diamondFilterOptions = {
  // Type filter
  type: Object.values(diamondTypes),
  
  // Category filter (based on selected type)
  category: allDiamondCategories,
  
  // Shape filter (separate from category)
  shape: diamondShapes.filter(s => s !== 'All Shapes'),
  
  // Carat Weight (1st C)
  caratWeight: diamondCarats,
  caratRange: {
    min: 0.01,
    max: 10.0,
    step: 0.01
  },
  
  // Cut Quality (2nd C)
  cut: ['Excellent', 'Ideal', 'Very Good', 'Good', 'Fair', 'Poor'],
  cutGrade: {
    hearts_arrows: 'Hearts & Arrows',
    triple_excellent: 'Triple Excellent (Cut, Polish, Symmetry)',
    excellent: 'Excellent',
    very_good: 'Very Good',
    good: 'Good'
  },
  
  // Color Grade (3rd C)
  color: ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'],
  colorCategory: {
    colorless: ['D', 'E', 'F'],
    near_colorless: ['G', 'H', 'I', 'J'],
    faint: ['K', 'L', 'M'],
    very_light: ['N']
  },
  fancyColor: ['Yellow', 'Pink', 'Blue', 'Green', 'Orange', 'Red', 'Purple', 'Brown', 'Black', 'Gray'],
  fancyColorIntensity: ['Faint', 'Very Light', 'Light', 'Fancy Light', 'Fancy', 'Fancy Intense', 'Fancy Vivid', 'Fancy Deep', 'Fancy Dark'],
  
  // Clarity Grade (4th C)
  clarity: ['FL', 'IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2', 'I1', 'I2', 'I3'],
  clarityCategory: {
    flawless: ['FL', 'IF'],
    very_very_slightly: ['VVS1', 'VVS2'],
    very_slightly: ['VS1', 'VS2'],
    slightly_included: ['SI1', 'SI2'],
    included: ['I1', 'I2', 'I3']
  },
  
  // Certification (5th C)
  certification: ['GIA', 'IGI', 'HRD', 'AGS', 'EGL', 'GCAL', 'GSI', 'NGTC', 'GRS', 'None'],
  certificationLevel: {
    premium: ['GIA', 'AGS', 'HRD'],
    standard: ['IGI', 'GCAL', 'GSI'],
    basic: ['EGL', 'NGTC', 'GRS'],
    none: ['None']
  },
  
  // Additional Quality Factors
  polish: ['Excellent', 'Very Good', 'Good', 'Fair', 'Poor'],
  symmetry: ['Excellent', 'Very Good', 'Good', 'Fair', 'Poor'],
  
  // Fluorescence
  fluorescence: ['None', 'Faint', 'Medium', 'Strong', 'Very Strong'],
  fluorescenceColor: ['Blue', 'Yellow', 'White', 'Green', 'Orange'],
  
  // Origin
  origin: [
    'South Africa', 'Botswana', 'Russia', 'Canada', 'India', 
    'Australia', 'Brazil', 'Angola', 'Namibia', 'Lab-Grown USA', 
    'Lab-Grown India', 'Lab-Grown China', 'Unknown'
  ],
  
  // Lab-Grown Specific
  growthMethod: ['CVD', 'HPHT'],
  
  // Price Ranges
  priceRange: [
    '<1000', '1000-2500', '2500-5000', '5000-10000', 
    '10000-20000', '20000-50000', '50000-100000', '100000+'
  ],
  
  // Table & Depth Percentages
  tablePercentage: {
    min: 50,
    max: 70,
    ideal: { min: 54, max: 60 }
  },
  depthPercentage: {
    min: 55,
    max: 75,
    ideal: { min: 59, max: 62.5 }
  },
  
  // Measurements
  measurements: {
    length: { min: 0, max: 20 }, // mm
    width: { min: 0, max: 20 }, // mm
    depth: { min: 0, max: 15 } // mm
  },
  
  // Ratio (for fancy shapes)
  lengthToWidthRatio: {
    min: 1.0,
    max: 2.5,
    idealRatios: {
      Round: 1.0,
      Princess: { min: 1.0, max: 1.05 },
      Cushion: { min: 1.0, max: 1.10 },
      Oval: { min: 1.30, max: 1.50 },
      Emerald: { min: 1.30, max: 1.50 },
      Pear: { min: 1.45, max: 1.75 },
      Marquise: { min: 1.75, max: 2.25 },
      Heart: { min: 0.90, max: 1.10 },
      Radiant: { min: 1.15, max: 1.35 }
    }
  },
  
  // Special Features
  specialFeatures: [
    'Hearts & Arrows',
    'Triple Excellent',
    'No Fluorescence',
    'Eye Clean',
    'Conflict Free',
    'Vintage Cut',
    'Antique',
    'Fancy Color',
    'Type IIa',
    'Investment Grade'
  ],
  
  // Availability
  availability: ['In Stock', 'Made to Order', 'Coming Soon'],
  
  // Treatment
  treatment: ['None', 'HPHT Enhanced', 'Clarity Enhanced', 'Color Enhanced', 'Laser Drilled'],
  
  // Girdle
  girdle: ['Very Thin', 'Thin', 'Medium', 'Slightly Thick', 'Thick', 'Very Thick', 'Extremely Thick'],
  girdleCondition: ['Faceted', 'Polished', 'Bruted'],
  
  // Culet
  culet: ['None', 'Pointed', 'Very Small', 'Small', 'Medium', 'Large', 'Very Large'],
  
  // Setting Recommendations
  recommendedSettings: ['Solitaire', 'Halo', 'Three Stone', 'Pavé', 'Vintage', 'Bezel', 'Channel'],
  
  // Metal Compatibility
  metalCompatibility: ['Platinum', 'White Gold', 'Yellow Gold', 'Rose Gold', 'Silver']
};

// Diamond Products Data with Enhanced Structure
export const diamondProducts = [
  // === NATURAL DIAMONDS ===
  
  // Natural - Melee
  {
    id: 1,
    type: diamondTypes.NATURAL,
    category: diamondCategories.NATURAL.MELEE,
    name: 'Round Brilliant Melee Diamond',
    shape: 'Round',
    price: 150,
    badge: 'Melee',
    carat: 0.10,
    color: 'G',
    clarity: 'VS2',
    cut: 'Very Good',
    polish: 'Very Good',
    symmetry: 'Very Good',
    fluorescence: 'None',
    certification: 'None',
    certNumber: null,
    origin: 'India',
    treatment: 'None',
    growthMethod: null,
    measurements: {
      length: 3.0,
      width: 3.0,
      depth: 1.8,
      depthPercentage: 60.0,
      tablePercentage: 57.0
    },
    description: 'Small round brilliant melee diamond perfect for accent stones in jewelry settings.',
    features: ['Accent Stone', 'G Color', 'VS2 Clarity', 'Natural Origin', 'Conflict Free'],
    specifications: {
      shape: 'Round Brilliant',
      culet: 'None',
      girdle: 'Thin',
      girdleCondition: 'Faceted'
    },
    sku: 'NAT-MEL-RND-001',
    inStock: true,
    availableQuantity: 100,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main, brilliant_round_side],
      hover: brilliant_round_side
    },
    videos: []
  },
  
  // Natural - Large
  {
    id: 2,
    type: diamondTypes.NATURAL,
    category: diamondCategories.NATURAL.LARGE,
    name: 'Brilliant Round Natural Diamond',
    shape: 'Round',
    price: 7500,
    badge: 'Premium',
    carat: 1.0,
    color: 'D',
    clarity: 'VVS1',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'GIA',
    certNumber: 'GIA-2345678901',
    origin: 'South Africa',
    treatment: 'None',
    growthMethod: null,
    measurements: {
      length: 6.5,
      width: 6.5,
      depth: 4.0,
      depthPercentage: 61.5,
      tablePercentage: 57.0
    },
    description: 'An exceptional D color, VVS1 clarity round brilliant diamond with triple excellent cut grades.',
    detailedDescription: 'This magnificent 1.0 carat round brilliant diamond represents the pinnacle of diamond quality. With its D color grade (colorless), VVS1 clarity (very very slightly included), and excellent cut proportions, it delivers maximum light return and sparkle.',
    features: [
      'Triple Excellent (Cut, Polish, Symmetry)',
      'D Color - Completely Colorless',
      'VVS1 Clarity - Eye Clean',
      'No Fluorescence',
      'Ideal Proportions',
      'GIA Certified',
      'Conflict-Free Origin'
    ],
    specifications: {
      shape: 'Round Brilliant',
      culet: 'None',
      girdle: 'Medium to Slightly Thick',
      girdleCondition: 'Faceted',
      crownAngle: 34.5,
      crownHeight: 15.0,
      pavilionAngle: 40.8,
      pavilionDepth: 43.0,
      starLength: 50,
      lowerHalfLength: 80
    },
    sku: 'NAT-LRG-RND-001-D-VVS1',
    inStock: true,
    availableQuantity: 1,
    images: {
      main: brilliant_round_main,
      gallery: [
        brilliant_round_main,
        brilliant_round_side,
        brilliant_round_top,
        brilliant_round_cert
      ],
      hover: brilliant_round_side,
      certificate: brilliant_round_cert
    },
    videos: [
      {
        url: brilliant_round_video,
        type: '360-view',
        thumbnail: brilliant_round_main
      }
    ]
  },
  
  // Natural - Special with Report
  {
    id: 3,
    type: diamondTypes.NATURAL,
    category: diamondCategories.NATURAL.SPECIAL_WITH_REPORT,
    name: 'Oval Diamond Natural Special',
    shape: 'Oval',
    price: 6800,
    badge: 'Certified',
    carat: 1.2,
    color: 'E',
    clarity: 'VS2',
    cut: 'Very Good',
    polish: 'Very Good',
    symmetry: 'Very Good',
    fluorescence: 'Faint',
    certification: 'IGI',
    certNumber: 'IGI-3456789012',
    origin: 'Russia',
    treatment: 'None',
    growthMethod: null,
    measurements: {
      length: 7.5,
      width: 5.5,
      depth: 3.8,
      depthPercentage: 62.0,
      tablePercentage: 58.0,
      lengthToWidthRatio: 1.36
    },
    description: 'A stunning 1.2 carat oval diamond with E color and VS2 clarity. The elongated shape creates the illusion of greater size.',
    detailedDescription: 'This beautiful oval diamond combines elegance with value. The E color grade ensures near-colorless appearance, while the VS2 clarity provides eye-clean beauty at a more accessible price point.',
    features: [
      'Near Colorless E Grade',
      'Eye Clean VS2 Clarity',
      'Elegant Oval Shape',
      'Very Good Cut Grade',
      'Faint Fluorescence',
      'IGI Certified',
      'Russian Origin'
    ],
    specifications: {
      shape: 'Oval',
      culet: 'None',
      girdle: 'Medium',
      girdleCondition: 'Faceted',
      crownAngle: 33.5,
      crownHeight: 14.5,
      pavilionAngle: 41.0,
      pavilionDepth: 43.5
    },
    sku: 'NAT-SPR-OVL-002-E-VS2',
    inStock: true,
    availableQuantity: 1,
    images: {
      main: oval_fancy_main,
      gallery: [oval_fancy_main, oval_fancy_side, oval_fancy_hand],
      hover: oval_fancy_side
    },
    videos: [
      {
        url: oval_fancy_video,
        type: '360-view',
        thumbnail: oval_fancy_main
      }
    ]
  },
  
  // Natural - Special without Report
  {
    id: 4,
    type: diamondTypes.NATURAL,
    category: diamondCategories.NATURAL.SPECIAL_WITHOUT_REPORT,
    name: 'Princess Cut Natural Diamond',
    shape: 'Princess',
    price: 4200,
    badge: 'Best Value',
    carat: 0.9,
    color: 'F',
    clarity: 'SI1',
    cut: 'Good',
    polish: 'Good',
    symmetry: 'Good',
    fluorescence: 'None',
    certification: 'None',
    certNumber: null,
    origin: 'Canada',
    treatment: 'None',
    growthMethod: null,
    measurements: {
      length: 5.5,
      width: 5.5,
      depth: 3.6,
      depthPercentage: 65.5,
      tablePercentage: 65.0
    },
    description: 'A modern 0.9 carat princess cut diamond featuring clean lines and brilliant faceting. F color with SI1 clarity offers excellent value.',
    features: [
      'Modern Square Shape',
      'F Color - Colorless',
      'SI1 Clarity - Good Value',
      'No Fluorescence',
      'Canadian Origin',
      'No Report - Lower Price',
      'Ethical Sourcing'
    ],
    specifications: {
      shape: 'Princess',
      culet: 'Pointed',
      girdle: 'Medium',
      girdleCondition: 'Faceted',
      crownAngle: 32.0,
      crownHeight: 13.5,
      pavilionAngle: 42.0,
      pavilionDepth: 44.0
    },
    sku: 'NAT-SPW-PRI-003-F-SI1',
    inStock: true,
    availableQuantity: 2,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },
  
  // === LAB-GROWN DIAMONDS ===
  
  // Lab-Grown - Melee
  {
    id: 5,
    type: diamondTypes.LAB_GROWN,
    category: diamondCategories.LAB_GROWN.MELEE,
    name: 'Round Melee Lab Diamond',
    shape: 'Round',
    price: 75,
    badge: 'Eco-Friendly',
    carat: 0.08,
    color: 'F',
    clarity: 'VS1',
    cut: 'Very Good',
    polish: 'Very Good',
    symmetry: 'Very Good',
    fluorescence: 'None',
    certification: 'None',
    certNumber: null,
    origin: 'Lab-Grown USA',
    treatment: 'None',
    growthMethod: 'CVD',
    measurements: {
      length: 2.8,
      width: 2.8,
      depth: 1.7,
      depthPercentage: 60.7,
      tablePercentage: 56.0
    },
    description: 'Small lab-grown melee diamond perfect for accent stones. Eco-friendly and affordable.',
    features: ['Lab-Grown', 'CVD Method', 'F Color', 'VS1 Clarity', 'Sustainable Choice'],
    specifications: {
      shape: 'Round Brilliant',
      culet: 'None',
      girdle: 'Thin',
      girdleCondition: 'Faceted'
    },
    sku: 'LAB-MEL-RND-001',
    inStock: true,
    availableQuantity: 200,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },
  
  // Lab-Grown - Large
  {
    id: 6,
    type: diamondTypes.LAB_GROWN,
    category: diamondCategories.LAB_GROWN.LARGE,
    name: 'Round Brilliant Lab Diamond',
    shape: 'Round',
    price: 4800,
    badge: 'Eco-Friendly',
    carat: 1.5,
    color: 'E',
    clarity: 'VVS1',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'IGI',
    certNumber: 'IGI-LG2345678901',
    origin: 'Lab-Grown USA',
    treatment: 'None',
    growthMethod: 'HPHT',
    measurements: {
      length: 7.2,
      width: 7.2,
      depth: 4.4,
      depthPercentage: 61.1,
      tablePercentage: 57.0
    },
    description: 'A brilliant 1.5 carat lab-grown diamond with exceptional E color and VVS1 clarity. Identical to natural diamonds.',
    detailedDescription: 'Lab-grown diamonds are chemically, physically, and optically identical to natural diamonds. This 1.5 carat round brilliant offers exceptional quality at a more accessible price point.',
    features: [
      'Large 1.5 Carats',
      'Lab-Grown Sustainable',
      'VVS1 Exceptional Clarity',
      'E Color - Near Colorless',
      'Triple Excellent',
      'IGI Certified',
      'Ethical Choice'
    ],
    specifications: {
      shape: 'Round Brilliant',
      culet: 'None',
      girdle: 'Medium',
      girdleCondition: 'Faceted',
      crownAngle: 34.5,
      crownHeight: 15.0,
      pavilionAngle: 40.8,
      pavilionDepth: 43.0,
      growthMethod: 'HPHT'
    },
    sku: 'LAB-LRG-RND-011-E-VVS1',
    inStock: true,
    availableQuantity: 3,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },
  
  // Lab-Grown - With Report
  {
    id: 7,
    type: diamondTypes.LAB_GROWN,
    category: diamondCategories.LAB_GROWN.WITH_REPORT,
    name: 'Princess Lab Diamond Certified',
    shape: 'Princess',
    price: 3200,
    badge: 'Certified',
    carat: 1.0,
    color: 'D',
    clarity: 'VS1',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'IGI',
    certNumber: 'IGI-LG3456789012',
    origin: 'Lab-Grown India',
    treatment: 'None',
    growthMethod: 'CVD',
    measurements: {
      length: 5.8,
      width: 5.8,
      depth: 3.9,
      depthPercentage: 67.2,
      tablePercentage: 66.0
    },
    description: 'A perfect 1.0 carat lab-grown princess cut with D color and VS1 clarity. Comes with full IGI certification.',
    features: [
      'Lab-Grown Sustainable',
      'D Color - Colorless',
      'VS1 High Clarity',
      'Perfect Square Shape',
      'Triple Excellent',
      'IGI Certified',
      'Great Value'
    ],
    specifications: {
      shape: 'Princess',
      culet: 'Pointed',
      girdle: 'Medium',
      girdleCondition: 'Faceted',
      crownAngle: 32.0,
      crownHeight: 13.5,
      pavilionAngle: 42.0,
      pavilionDepth: 44.0,
      growthMethod: 'CVD'
    },
    sku: 'LAB-RPT-PRI-012-D-VS1',
    inStock: true,
    availableQuantity: 2,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },
  
  // Lab-Grown - Without Report
  {
    id: 8,
    type: diamondTypes.LAB_GROWN,
    category: diamondCategories.LAB_GROWN.WITHOUT_REPORT,
    name: 'Cushion Lab Diamond',
    shape: 'Cushion',
    price: 2800,
    badge: 'Best Value',
    carat: 1.2,
    color: 'E',
    clarity: 'VS2',
    cut: 'Very Good',
    polish: 'Very Good',
    symmetry: 'Very Good',
    fluorescence: 'None',
    certification: 'None',
    certNumber: null,
    origin: 'Lab-Grown China',
    treatment: 'None',
    growthMethod: 'HPHT',
    measurements: {
      length: 6.2,
      width: 5.8,
      depth: 3.9,
      depthPercentage: 63.0,
      tablePercentage: 61.0,
      lengthToWidthRatio: 1.07
    },
    description: 'Beautiful 1.2 carat lab-grown cushion cut. No certification report for maximum value.',
    features: [
      'Lab-Grown',
      'E Color',
      'VS2 Clarity',
      'Cushion Cut',
      'No Report - Lower Price',
      'HPHT Method'
    ],
    specifications: {
      shape: 'Cushion',
      culet: 'Small',
      girdle: 'Medium',
      girdleCondition: 'Faceted',
      growthMethod: 'HPHT'
    },
    sku: 'LAB-NRP-CUS-013-E-VS2',
    inStock: true,
    availableQuantity: 5,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },
  
  // Lab-Grown - GCAL 8X with Report
  {
    id: 9,
    type: diamondTypes.LAB_GROWN,
    category: diamondCategories.LAB_GROWN.GCAL_8X_WITH_REPORT,
    name: 'GCAL 8X Round Lab Diamond',
    shape: 'Round',
    price: 5500,
    badge: 'GCAL 8X',
    carat: 1.3,
    color: 'D',
    clarity: 'VVS2',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'GCAL',
    certNumber: 'GCAL-8X-456789012',
    origin: 'Lab-Grown USA',
    treatment: 'None',
    growthMethod: 'CVD',
    measurements: {
      length: 6.9,
      width: 6.9,
      depth: 4.2,
      depthPercentage: 60.9,
      tablePercentage: 57.0
    },
    description: 'Premium GCAL 8X certified lab-grown diamond with superior light performance and hearts & arrows pattern.',
    detailedDescription: 'GCAL 8X certification represents the highest standard for lab-grown diamonds, ensuring exceptional cut quality, light performance, and optical symmetry. This diamond features a perfect hearts and arrows pattern.',
    features: [
      'GCAL 8X Certified',
      'Hearts & Arrows',
      'D Color - Colorless',
      'VVS2 Clarity',
      'Superior Light Performance',
      'Triple Excellent',
      'Premium Lab-Grown'
    ],
    specifications: {
      shape: 'Round Brilliant',
      culet: 'None',
      girdle: 'Medium',
      girdleCondition: 'Faceted',
      crownAngle: 34.5,
      crownHeight: 15.0,
      pavilionAngle: 40.8,
      pavilionDepth: 43.0,
      growthMethod: 'CVD',
      heartsAndArrows: true
    },
    sku: 'LAB-GCAL-RND-014-D-VVS2',
    inStock: true,
    availableQuantity: 1,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main, brilliant_round_side, brilliant_round_cert],
      hover: brilliant_round_side,
      certificate: brilliant_round_cert
    },
    videos: [
      {
        url: brilliant_round_video,
        type: '360-view',
        thumbnail: brilliant_round_main
      }
    ]
  },
  
  // Lab-Grown - GCAL 8X without Report
  {
    id: 10,
    type: diamondTypes.LAB_GROWN,
    category: diamondCategories.LAB_GROWN.GCAL_8X_WITHOUT_REPORT,
    name: 'GCAL 8X Oval Lab Diamond',
    shape: 'Oval',
    price: 4200,
    badge: 'GCAL 8X',
    carat: 1.4,
    color: 'E',
    clarity: 'VS1',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'None',
    certNumber: null,
    origin: 'Lab-Grown USA',
    treatment: 'None',
    growthMethod: 'CVD',
    measurements: {
      length: 8.0,
      width: 5.8,
      depth: 3.7,
      depthPercentage: 61.5,
      tablePercentage: 58.0,
      lengthToWidthRatio: 1.38
    },
    description: 'GCAL 8X quality oval lab-grown diamond without certification report for better value. Same exceptional cut quality.',
    features: [
      'GCAL 8X Quality',
      'E Color',
      'VS1 Clarity',
      'Excellent Cut',
      'No Report - Lower Price',
      'Premium Lab-Grown'
    ],
    specifications: {
      shape: 'Oval',
      culet: 'None',
      girdle: 'Medium',
      girdleCondition: 'Faceted',
      crownAngle: 33.5,
      crownHeight: 14.5,
      pavilionAngle: 41.0,
      pavilionDepth: 43.5,
      growthMethod: 'CVD'
    },
    sku: 'LAB-GCAL-NR-OVL-015-E-VS1',
    inStock: true,
    availableQuantity: 2,
    images: {
      main: oval_fancy_main,
      gallery: [oval_fancy_main, oval_fancy_side],
      hover: oval_fancy_side
    },
    videos: []
  },
  
  // Additional Natural Diamonds - Various Shapes
  {
    id: 11,
    type: diamondTypes.NATURAL,
    category: diamondCategories.NATURAL.LARGE,
    name: 'Emerald Cut Natural Diamond',
    shape: 'Emerald',
    price: 12500,
    badge: 'Premium',
    carat: 2.0,
    color: 'G',
    clarity: 'VVS2',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'GIA',
    certNumber: 'GIA-5678901234',
    origin: 'Botswana',
    treatment: 'None',
    growthMethod: null,
    measurements: {
      length: 8.0,
      width: 6.0,
      depth: 4.5,
      depthPercentage: 62.5,
      tablePercentage: 62.0,
      lengthToWidthRatio: 1.33
    },
    description: 'A spectacular 2.0 carat emerald cut diamond with step-cut facets that create a hall-of-mirrors effect.',
    features: [
      'Large 2.0 Carat Size',
      'Step-Cut Elegance',
      'VVS2 Exceptional Clarity',
      'G Color - Near Colorless',
      'Triple Excellent Grades',
      'GIA Certified',
      'Botswana Origin'
    ],
    specifications: {
      shape: 'Emerald',
      culet: 'None',
      girdle: 'Thin to Medium',
      girdleCondition: 'Faceted',
      crownAngle: 28.0,
      crownHeight: 11.5,
      pavilionAngle: 39.5,
      pavilionDepth: 42.0,
      steps: 3
    },
    sku: 'NAT-LRG-EME-004-G-VVS2',
    inStock: true,
    availableQuantity: 1,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  },
  
  {
    id: 12,
    type: diamondTypes.NATURAL,
    category: diamondCategories.NATURAL.SPECIAL_WITH_REPORT,
    name: 'Pear Cut Natural Diamond',
    shape: 'Pear',
    price: 11000,
    badge: 'Unique',
    carat: 1.1,
    color: 'D',
    clarity: 'IF',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    certification: 'GIA',
    certNumber: 'GIA-7890123456',
    origin: 'South Africa',
    treatment: 'None',
    growthMethod: null,
    measurements: {
      length: 8.0,
      width: 5.0,
      depth: 3.5,
      depthPercentage: 62.0,
      tablePercentage: 58.0,
      lengthToWidthRatio: 1.60
    },
    description: 'An exquisite 1.1 carat pear-shaped diamond with flawless IF clarity and D color.',
    features: [
      'Internally Flawless',
      'D Color - Colorless',
      'Elegant Pear Shape',
      'Triple Excellent',
      'No Fluorescence',
      'GIA Certified',
      'Rare Quality'
    ],
    specifications: {
      shape: 'Pear',
      culet: 'None',
      girdle: 'Thin to Medium',
      girdleCondition: 'Faceted',
      crownAngle: 33.0,
      crownHeight: 14.0,
      pavilionAngle: 41.0,
      pavilionDepth: 43.5,
      shoulderHeight: 'Ideal'
    },
    sku: 'NAT-SPR-PEA-006-D-IF',
    inStock: true,
    availableQuantity: 1,
    images: {
      main: brilliant_round_main,
      gallery: [brilliant_round_main],
      hover: brilliant_round_side
    },
    videos: []
  }
];

// Helper Functions

// Get diamonds by type
export const getDiamondsByType = (type) => {
  return diamondProducts.filter(d => d.type === type);
};

// Get diamonds by category
export const getDiamondsByCategory = (category) => {
  if (category === 'All Diamonds') return diamondProducts;
  return diamondProducts.filter(d => d.category === category);
};

// Get diamonds by shape
export const getDiamondsByShape = (shape) => {
  if (shape === 'All Shapes') return diamondProducts;
  return diamondProducts.filter(d => d.shape === shape);
};

// Get diamond by ID
export const getDiamondById = (id) => {
  return diamondProducts.find(d => d.id === parseInt(id));
};

// Enhanced filter function with all filter options
export const filterDiamonds = (filters) => {
  return diamondProducts.filter(diamond => {
    // Type filter
    if (filters.type && filters.type.length > 0) {
      if (!filters.type.includes(diamond.type)) return false;
    }
    
    // Category filter
    if (filters.category && filters.category !== 'All Diamonds') {
      if (diamond.category !== filters.category) return false;
    }
    
    // Shape filter (NEW - separate from category)
    if (filters.shape && filters.shape.length > 0 && !filters.shape.includes('All Shapes')) {
      if (!filters.shape.includes(diamond.shape)) return false;
    }
    
    // Carat Weight Filter (1st C)
    if (filters.caratWeight && filters.caratWeight.length > 0) {
      const matchesCarat = filters.caratWeight.some(range => {
        const [min, max] = range.split('-').map(v => parseFloat(v.replace('+', '')));
        if (range.includes('+')) return diamond.carat >= min;
        return diamond.carat >= min && diamond.carat <= max;
      });
      if (!matchesCarat) return false;
    }
    
    // Carat Range (slider)
    if (filters.caratMin !== undefined && diamond.carat < filters.caratMin) return false;
    if (filters.caratMax !== undefined && diamond.carat > filters.caratMax) return false;
    
    // Cut Filter (2nd C)
    if (filters.cut && filters.cut.length > 0) {
      if (!filters.cut.includes(diamond.cut)) return false;
    }
    
    // Color Filter (3rd C)
    if (filters.color && filters.color.length > 0) {
      if (!filters.color.includes(diamond.color)) return false;
    }
    
    // Clarity Filter (4th C)
    if (filters.clarity && filters.clarity.length > 0) {
      if (!filters.clarity.includes(diamond.clarity)) return false;
    }
    
    // Certification Filter (5th C)
    if (filters.certification && filters.certification.length > 0) {
      if (!filters.certification.includes(diamond.certification)) return false;
    }
    
    // Polish filter
    if (filters.polish && filters.polish.length > 0) {
      if (!filters.polish.includes(diamond.polish)) return false;
    }
    
    // Symmetry filter
    if (filters.symmetry && filters.symmetry.length > 0) {
      if (!filters.symmetry.includes(diamond.symmetry)) return false;
    }
    
    // Fluorescence filter
    if (filters.fluorescence && filters.fluorescence.length > 0) {
      if (!filters.fluorescence.includes(diamond.fluorescence)) return false;
    }
    
    // Origin filter
    if (filters.origin && filters.origin.length > 0) {
      if (!filters.origin.includes(diamond.origin)) return false;
    }
    
    // Growth Method filter (for lab-grown)
    if (filters.growthMethod && filters.growthMethod.length > 0) {
      if (!filters.growthMethod.includes(diamond.growthMethod)) return false;
    }
    
    // Price range filter
    if (filters.priceRange && filters.priceRange.length > 0) {
      const matchesPrice = filters.priceRange.some(range => {
        if (range === '<1000') return diamond.price < 1000;
        if (range === '1000-2500') return diamond.price >= 1000 && diamond.price <= 2500;
        if (range === '2500-5000') return diamond.price >= 2500 && diamond.price <= 5000;
        if (range === '5000-10000') return diamond.price >= 5000 && diamond.price <= 10000;
        if (range === '10000-20000') return diamond.price >= 10000 && diamond.price <= 20000;
        if (range === '20000-50000') return diamond.price >= 20000 && diamond.price <= 50000;
        if (range === '50000-100000') return diamond.price >= 50000 && diamond.price <= 100000;
        if (range === '100000+') return diamond.price >= 100000;
        return false;
      });
      if (!matchesPrice) return false;
    }
    
    // Price Range (slider)
    if (filters.priceMin !== undefined && diamond.price < filters.priceMin) return false;
    if (filters.priceMax !== undefined && diamond.price > filters.priceMax) return false;
    
    // Table Percentage
    if (filters.tableMin && diamond.measurements.tablePercentage < filters.tableMin) return false;
    if (filters.tableMax && diamond.measurements.tablePercentage > filters.tableMax) return false;
    
    // Depth Percentage
    if (filters.depthMin && diamond.measurements.depthPercentage < filters.depthMin) return false;
    if (filters.depthMax && diamond.measurements.depthPercentage > filters.depthMax) return false;
    
    // Length to Width Ratio
    if (filters.ratioMin && diamond.measurements.lengthToWidthRatio) {
      if (diamond.measurements.lengthToWidthRatio < filters.ratioMin) return false;
    }
    if (filters.ratioMax && diamond.measurements.lengthToWidthRatio) {
      if (diamond.measurements.lengthToWidthRatio > filters.ratioMax) return false;
    }
    
    // Treatment filter
    if (filters.treatment && filters.treatment.length > 0) {
      if (!filters.treatment.includes(diamond.treatment)) return false;
    }
    
    // Special Features
    if (filters.specialFeatures && filters.specialFeatures.length > 0) {
      const hasFeatures = filters.specialFeatures.some(feature => {
        if (feature === 'Hearts & Arrows' && diamond.specifications.heartsAndArrows) return true;
        if (feature === 'Triple Excellent' && 
            diamond.cut === 'Excellent' && 
            diamond.polish === 'Excellent' && 
            diamond.symmetry === 'Excellent') return true;
        if (feature === 'No Fluorescence' && diamond.fluorescence === 'None') return true;
        if (feature === 'Eye Clean' && 
            ['IF', 'VVS1', 'VVS2', 'VS1', 'VS2'].includes(diamond.clarity)) return true;
        return false;
      });
      if (!hasFeatures) return false;
    }
    
    return true;
  });
};

// Sort diamonds
export const sortDiamonds = (diamonds, sortBy) => {
  const sorted = [...diamonds];
  
  switch(sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'carat-low':
      return sorted.sort((a, b) => a.carat - b.carat);
    case 'carat-high':
      return sorted.sort((a, b) => b.carat - a.carat);
    case 'color':
      const colorOrder = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];
      return sorted.sort((a, b) => colorOrder.indexOf(a.color) - colorOrder.indexOf(b.color));
    case 'clarity':
      const clarityOrder = ['FL', 'IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2', 'I1', 'I2', 'I3'];
      return sorted.sort((a, b) => clarityOrder.indexOf(a.clarity) - clarityOrder.indexOf(b.clarity));
    case 'cut':
      const cutOrder = ['Excellent', 'Ideal', 'Very Good', 'Good', 'Fair', 'Poor'];
      return sorted.sort((a, b) => cutOrder.indexOf(a.cut) - cutOrder.indexOf(b.cut));
    case 'newest':
      return sorted.sort((a, b) => b.id - a.id);
    default:
      return sorted;
  }
};

// Get recommended diamonds
export const getRecommendedDiamonds = (currentDiamondId, limit = 4) => {
  return diamondProducts
    .filter(d => d.id !== currentDiamondId)
    .slice(0, limit);
};

// Get similar diamonds
export const getSimilarDiamonds = (diamondId, limit = 4) => {
  const diamond = getDiamondById(diamondId);
  if (!diamond) return [];
  
  return diamondProducts
    .filter(d => 
      d.id !== diamondId && 
      (d.shape === diamond.shape || d.category === diamond.category)
    )
    .slice(0, limit);
};

// Check if diamond is in stock
export const isDiamondInStock = (diamondId) => {
  const diamond = getDiamondById(diamondId);
  return diamond ? diamond.inStock && diamond.availableQuantity > 0 : false;
};

// Get diamond price range
export const getDiamondPriceRange = () => {
  const prices = diamondProducts.map(d => d.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
};

// Get diamond carat range
export const getDiamondCaratRange = () => {
  const carats = diamondProducts.map(d => d.carat);
  return {
    min: Math.min(...carats),
    max: Math.max(...carats)
  };
};

// Calculate diamond value score
export const calculateDiamondValueScore = (diamond) => {
  const colorScore = {'D': 10, 'E': 9, 'F': 8, 'G': 7, 'H': 6, 'I': 5, 'J': 4, 'K': 3, 'L': 2, 'M': 1, 'N': 0}[diamond.color] || 0;
  const clarityScore = {'FL': 11, 'IF': 10, 'VVS1': 9, 'VVS2': 8, 'VS1': 7, 'VS2': 6, 'SI1': 5, 'SI2': 4, 'I1': 3, 'I2': 2, 'I3': 1}[diamond.clarity] || 0;
  const cutScore = {'Excellent': 10, 'Ideal': 10, 'Very Good': 8, 'Good': 6, 'Fair': 4, 'Poor': 2}[diamond.cut] || 0;
  
  return (colorScore + clarityScore + cutScore) / 31 * 100;
};

// Get best value diamonds
export const getBestValueDiamonds = (limit = 6) => {
  return diamondProducts
    .map(d => ({
      ...d,
      valueScore: calculateDiamondValueScore(d) / (d.price / 1000)
    }))
    .sort((a, b) => b.valueScore - a.valueScore)
    .slice(0, limit);
};

// Get premium diamonds
export const getPremiumDiamonds = (limit = 6) => {
  return diamondProducts
    .filter(d => 
      ['D', 'E', 'F'].includes(d.color) && 
      ['FL', 'IF', 'VVS1', 'VVS2'].includes(d.clarity)
    )
    .sort((a, b) => calculateDiamondValueScore(b) - calculateDiamondValueScore(a))
    .slice(0, limit);
};

// Get lab-grown diamonds
export const getLabGrownDiamonds = () => {
  return diamondProducts.filter(d => d.type === diamondTypes.LAB_GROWN);
};

// Get natural diamonds
export const getNaturalDiamonds = () => {
  return diamondProducts.filter(d => d.type === diamondTypes.NATURAL);
};

// Get GCAL 8X diamonds
export const getGCAL8XDiamonds = () => {
  return diamondProducts.filter(d => 
    d.category === diamondCategories.LAB_GROWN.GCAL_8X_WITH_REPORT || 
    d.category === diamondCategories.LAB_GROWN.GCAL_8X_WITHOUT_REPORT
  );
};

// Get certified diamonds
export const getCertifiedDiamonds = () => {
  return diamondProducts.filter(d => d.certification !== 'None');
};

// Get uncertified diamonds
export const getUncertifiedDiamonds = () => {
  return diamondProducts.filter(d => d.certification === 'None');
};

// Format diamond details for display
export const formatDiamondDetails = (diamond) => {
  return {
    type: {
      'Type': diamond.type,
      'Category': diamond.category,
      'Shape': diamond.shape
    },
    fiveCs: {
      'Carat Weight': `${diamond.carat} ct`,
      'Cut Grade': diamond.cut,
      'Color Grade': diamond.color,
      'Clarity Grade': diamond.clarity,
      'Certification': diamond.certification || 'None'
    },
    quality: {
      'Polish': diamond.polish,
      'Symmetry': diamond.symmetry,
      'Fluorescence': diamond.fluorescence,
      'Treatment': diamond.treatment
    },
    measurements: {
      'Length': `${diamond.measurements.length} mm`,
      'Width': `${diamond.measurements.width} mm`,
      'Depth': `${diamond.measurements.depth} mm`,
      'Depth %': `${diamond.measurements.depthPercentage}%`,
      'Table %': `${diamond.measurements.tablePercentage}%`,
      'L/W Ratio': diamond.measurements.lengthToWidthRatio || 'N/A'
    },
    certification: {
      'Certificate': diamond.certification || 'None',
      'Certificate #': diamond.certNumber || 'N/A',
      'Origin': diamond.origin
    },
    additional: diamond.growthMethod ? {
      'Growth Method': diamond.growthMethod,
      'Hearts & Arrows': diamond.specifications.heartsAndArrows ? 'Yes' : 'No'
    } : null
  };
};

// Get filter statistics
export const getFilterStatistics = (diamonds) => {
  return {
    totalCount: diamonds.length,
    typeCount: {
      natural: diamonds.filter(d => d.type === diamondTypes.NATURAL).length,
      labGrown: diamonds.filter(d => d.type === diamondTypes.LAB_GROWN).length
    },
    shapeCount: diamondShapes
      .filter(s => s !== 'All Shapes')
      .reduce((acc, shape) => {
        acc[shape] = diamonds.filter(d => d.shape === shape).length;
        return acc;
      }, {}),
    avgPrice: diamonds.reduce((sum, d) => sum + d.price, 0) / diamonds.length,
    avgCarat: diamonds.reduce((sum, d) => sum + d.carat, 0) / diamonds.length,
    priceRange: {
      min: Math.min(...diamonds.map(d => d.price)),
      max: Math.max(...diamonds.map(d => d.price))
    },
    caratRange: {
      min: Math.min(...diamonds.map(d => d.carat)),
      max: Math.max(...diamonds.map(d => d.carat))
    }
  };
};

// Backwards compatibility
export const products = diamondProducts;

// Export everything
export default {
  diamondTypes,
  diamondCategories,
  allDiamondCategories,
  diamondShapes,
  caratWeightRanges,
  diamondCarats,
  fiveCs,
  diamondFilterOptions,
  diamondProducts,
  products: diamondProducts,
  getDiamondsByType,
  getDiamondsByCategory,
  getDiamondsByShape,
  getDiamondById,
  filterDiamonds,
  sortDiamonds,
  getRecommendedDiamonds,
  getSimilarDiamonds,
  isDiamondInStock,
  getDiamondPriceRange,
  getDiamondCaratRange,
  calculateDiamondValueScore,
  getBestValueDiamonds,
  getPremiumDiamonds,
  getLabGrownDiamonds,
  getNaturalDiamonds,
  getGCAL8XDiamonds,
  getCertifiedDiamonds,
  getUncertifiedDiamonds,
  formatDiamondDetails,
  getFilterStatistics
};