import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Grid, List, Search,SlidersHorizontal ,X } from "lucide-react";
import DiamondCard from "../components/DiamondCard";
import DiamondListItem from "../components/DiamondListItem";
import {
  diamondData,
  diamondProducts,
  getCategoriesForType,
  getSubcategoriesForCategory,
  getShapesForSubcategory,
  getColorsForShape,
  getClaritiesForColor,
} from "./DiamondData";
import round from "../assets/images/SHAPE_01.png";
import princess from "../assets/images/SHAPE_01.png";
import oval from "../assets/images/SHAPE_01.png";
import normal from "../assets/images/SHAPE_01.png";

const shapeMap = { round, princess, oval, normal };

// Range Slider Component
const RangeSlider = ({ min, max, values, onChange, labels, unit = "" }) => {
  const [localValues, setLocalValues] = useState(values);

  useEffect(() => {
    setLocalValues(values);
  }, [values]);

  const getIndexFromValue = (value) => {
    if (!labels) return value;
    return labels.indexOf(value);
  };

  const getValueFromIndex = (index) => {
    if (!labels) return index;
    return labels[index];
  };

  const handleMinChange = (e) => {
    const index = parseFloat(e.target.value);
    const value = labels ? getValueFromIndex(Math.round(index)) : index;
    const maxIndex = labels
      ? getIndexFromValue(localValues[1])
      : localValues[1];

    if (labels ? Math.round(index) <= maxIndex : index <= maxIndex) {
      const newValues = [value, localValues[1]];
      setLocalValues(newValues);
      onChange(newValues);
    }
  };

  const handleMaxChange = (e) => {
    const index = parseFloat(e.target.value);
    const value = labels ? getValueFromIndex(Math.round(index)) : index;
    const minIndex = labels
      ? getIndexFromValue(localValues[0])
      : localValues[0];

    if (labels ? Math.round(index) >= minIndex : index >= minIndex) {
      const newValues = [localValues[0], value];
      setLocalValues(newValues);
      onChange(newValues);
    }
  };

  const minIndex = labels ? getIndexFromValue(localValues[0]) : localValues[0];
  const maxIndex = labels ? getIndexFromValue(localValues[1]) : localValues[1];
  const totalSteps = labels ? labels.length - 1 : max - min;

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-xs text-gray-600 mb-2">
        <span>
          Min: {unit}
          {localValues[0]}
        </span>
        <span>
          Max: {unit}
          {localValues[1]}
        </span>
      </div>

      <div className="relative h-8 px-2">
        {/* Labels underneath */}
        {labels && (
          <div className="absolute w-full flex justify-between text-[10px] text-gray-500 top-8">
            {labels.map((label, idx) => (
              <span
                key={label}
                className={idx % 2 === 0 ? "block" : "hidden sm:block"}
              >
                {label}
              </span>
            ))}
          </div>
        )}

        {/* Track */}
        <div className="absolute w-full h-1 bg-gray-200 rounded-lg top-3">
          <div
            className="absolute h-full bg-gray-900 rounded-lg"
            style={{
              left: `${(minIndex / totalSteps) * 100}%`,
              right: `${100 - (maxIndex / totalSteps) * 100}%`,
            }}
          />
        </div>

        {/* Min slider */}
        <input
          type="range"
          min={labels ? 0 : min}
          max={labels ? labels.length - 1 : max}
          step={labels ? 1 : 0.01}
          value={minIndex}
          onChange={handleMinChange}
          className="absolute w-full h-1 top-3 bg-transparent appearance-none cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray-900 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gray-900 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md hover:[&::-webkit-slider-thumb]:scale-110 [&::-webkit-slider-thumb]:transition-transform"
          style={{ zIndex: minIndex > totalSteps / 2 ? 5 : 3 }}
        />

        {/* Max slider */}
        <input
          type="range"
          min={labels ? 0 : min}
          max={labels ? labels.length - 1 : max}
          step={labels ? 1 : 0.01}
          value={maxIndex}
          onChange={handleMaxChange}
          className="absolute w-full h-1 top-3 bg-transparent appearance-none cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray-900 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gray-900 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md hover:[&::-webkit-slider-thumb]:scale-110 [&::-webkit-slider-thumb]:transition-transform"
          style={{ zIndex: 4 }}
        />
      </div>
    </div>
  );
};

const DiamondPage = () => {
  const [viewMode, setViewMode] = useState("list");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("carat-asc");
  const [favorites, setFavorites] = useState([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [selectedType, setSelectedType] = useState("Natural");
  const [selectedCategory, setSelectedCategory] = useState("natural-melee");
  const [selectedSubcategory, setSelectedSubcategory] = useState("Standard");
  const [selectedShape, setSelectedShape] = useState("Round");

  const [openSections, setOpenSections] = useState({
    colorClarity: true,
    caratPrice: true,
    cut: true,
    polishSymmetry: true,
    fluorescenceCert: true,
  });

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 768;
      if (isDesktop) {
        setOpenSections({
          colorClarity: true,
          caratPrice: true,
          cut: true,
          polishSymmetry: true,
          fluorescenceCert: true,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = useMemo(
    () => getCategoriesForType(selectedType),
    [selectedType]
  );

  const subcategories = useMemo(
    () => getSubcategoriesForCategory(selectedType, selectedCategory),
    [selectedType, selectedCategory]
  );

  const availableShapes = useMemo(
    () =>
      getShapesForSubcategory(
        selectedType,
        selectedCategory,
        selectedSubcategory
      ),
    [selectedType, selectedCategory, selectedSubcategory]
  );

  const availableColors = useMemo(
    () =>
      getColorsForShape(
        selectedType,
        selectedCategory,
        selectedSubcategory,
        selectedShape
      ),
    [selectedType, selectedCategory, selectedSubcategory, selectedShape]
  );

  const availableClarities = useMemo(() => {
    let clarityMap = {};
    availableColors.forEach((color) => {
      clarityMap[color] = getClaritiesForColor(
        selectedType,
        selectedCategory,
        selectedSubcategory,
        selectedShape,
        color
      );
    });
    return clarityMap;
  }, [
    selectedType,
    selectedCategory,
    selectedSubcategory,
    selectedShape,
    availableColors,
  ]);

  // Get all unique clarities from the clarity map
  const allClarities = useMemo(() => {
    const claritiesSet = new Set();
    Object.values(availableClarities).forEach((clarities) => {
      clarities.forEach((clarity) => claritiesSet.add(clarity));
    });
    return Array.from(claritiesSet);
  }, [availableClarities]);

  const [filters, setFilters] = useState({
    color:
      availableColors.length > 0
        ? [availableColors[0], availableColors[availableColors.length - 1]]
        : [],
    clarity:
      allClarities.length > 0
        ? [allClarities[0], allClarities[allClarities.length - 1]]
        : [],
    cut:
      diamondData.attributes.cut.length > 0
        ? [
            diamondData.attributes.cut[0],
            diamondData.attributes.cut[diamondData.attributes.cut.length - 1],
          ]
        : [],
    polish:
      diamondData.attributes.polish.length > 0
        ? [
            diamondData.attributes.polish[0],
            diamondData.attributes.polish[
              diamondData.attributes.polish.length - 1
            ],
          ]
        : [],
    symmetry:
      diamondData.attributes.symmetry.length > 0
        ? [
            diamondData.attributes.symmetry[0],
            diamondData.attributes.symmetry[
              diamondData.attributes.symmetry.length - 1
            ],
          ]
        : [],
    fluorescence:
      diamondData.attributes.fluorescence.length > 0
        ? [
            diamondData.attributes.fluorescence[0],
            diamondData.attributes.fluorescence[
              diamondData.attributes.fluorescence.length - 1
            ],
          ]
        : [],
    certification: [],
    caratRange: [0, 10],
    priceRange: [0, 50000],
  });

  // Update filters when available colors/clarities change
  useEffect(() => {
    if (availableColors.length > 0) {
      setFilters((prev) => ({
        ...prev,
        color: [
          availableColors[0],
          availableColors[availableColors.length - 1],
        ],
      }));
    }
  }, [availableColors]);

  useEffect(() => {
    if (allClarities.length > 0) {
      setFilters((prev) => ({
        ...prev,
        clarity: [allClarities[0], allClarities[allClarities.length - 1]],
      }));
    }
  }, [allClarities]);

  useEffect(() => {
    if (
      availableShapes.length > 0 &&
      !availableShapes.includes(selectedShape)
    ) {
      setSelectedShape(availableShapes[0]);
    }
  }, [availableShapes, selectedShape]);

  useEffect(() => {
    if (subcategories.length > 0) {
      const subcategoryIds = subcategories.map((s) => s.id);
      if (!subcategoryIds.includes(selectedSubcategory)) {
        setSelectedSubcategory(subcategories[0].id);
      }
    }
  }, [subcategories, selectedSubcategory]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id]
    );
  };

  const toggleCertification = (cert) => {
    setFilters((prev) => ({
      ...prev,
      certification: prev.certification.includes(cert)
        ? prev.certification.filter((c) => c !== cert)
        : [...prev.certification, cert],
    }));
  };

  const clearFilters = () => {
    setFilters({
      color:
        availableColors.length > 0
          ? [availableColors[0], availableColors[availableColors.length - 1]]
          : [],
      clarity:
        allClarities.length > 0
          ? [allClarities[0], allClarities[allClarities.length - 1]]
          : [],
      cut:
        diamondData.attributes.cut.length > 0
          ? [
              diamondData.attributes.cut[0],
              diamondData.attributes.cut[diamondData.attributes.cut.length - 1],
            ]
          : [],
      polish:
        diamondData.attributes.polish.length > 0
          ? [
              diamondData.attributes.polish[0],
              diamondData.attributes.polish[
                diamondData.attributes.polish.length - 1
              ],
            ]
          : [],
      symmetry:
        diamondData.attributes.symmetry.length > 0
          ? [
              diamondData.attributes.symmetry[0],
              diamondData.attributes.symmetry[
                diamondData.attributes.symmetry.length - 1
              ],
            ]
          : [],
      fluorescence:
        diamondData.attributes.fluorescence.length > 0
          ? [
              diamondData.attributes.fluorescence[0],
              diamondData.attributes.fluorescence[
                diamondData.attributes.fluorescence.length - 1
              ],
            ]
          : [],
      certification: [],
      caratRange: [0, 10],
      priceRange: [0, 50000],
    });
  };

  const filteredDiamonds = useMemo(() => {
    let result = diamondProducts.filter(
      (d) =>
        d.type?.toLowerCase() === selectedType?.toLowerCase() &&
        d.category === selectedCategory &&
        d.subcategory === selectedSubcategory &&
        d.shape?.toLowerCase() === selectedShape?.toLowerCase()
    );

    if (searchQuery) {
      result = result.filter(
        (d) =>
          d.sku?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.certNumber?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Color filter
    if (availableColors.length > 0 && filters.color.length === 2) {
      const colorStartIdx = availableColors.indexOf(filters.color[0]);
      const colorEndIdx = availableColors.indexOf(filters.color[1]);
      const selectedColors = availableColors.slice(
        colorStartIdx,
        colorEndIdx + 1
      );
      result = result.filter((d) => selectedColors.includes(d.color));
    }

    // Clarity filter
    if (allClarities.length > 0 && filters.clarity.length === 2) {
      const clarityStartIdx = allClarities.indexOf(filters.clarity[0]);
      const clarityEndIdx = allClarities.indexOf(filters.clarity[1]);
      const selectedClarities = allClarities.slice(
        clarityStartIdx,
        clarityEndIdx + 1
      );
      result = result.filter((d) => selectedClarities.includes(d.clarity));
    }

    // Cut filter
    if (diamondData.attributes.cut.length > 0 && filters.cut.length === 2) {
      const cutStartIdx = diamondData.attributes.cut.indexOf(filters.cut[0]);
      const cutEndIdx = diamondData.attributes.cut.indexOf(filters.cut[1]);
      const selectedCuts = diamondData.attributes.cut.slice(
        cutStartIdx,
        cutEndIdx + 1
      );
      result = result.filter((d) => selectedCuts.includes(d.cut));
    }

    // Polish filter
    if (
      diamondData.attributes.polish.length > 0 &&
      filters.polish.length === 2
    ) {
      const polishStartIdx = diamondData.attributes.polish.indexOf(
        filters.polish[0]
      );
      const polishEndIdx = diamondData.attributes.polish.indexOf(
        filters.polish[1]
      );
      const selectedPolish = diamondData.attributes.polish.slice(
        polishStartIdx,
        polishEndIdx + 1
      );
      result = result.filter((d) => selectedPolish.includes(d.polish));
    }

    // Symmetry filter
    if (
      diamondData.attributes.symmetry.length > 0 &&
      filters.symmetry.length === 2
    ) {
      const symmetryStartIdx = diamondData.attributes.symmetry.indexOf(
        filters.symmetry[0]
      );
      const symmetryEndIdx = diamondData.attributes.symmetry.indexOf(
        filters.symmetry[1]
      );
      const selectedSymmetry = diamondData.attributes.symmetry.slice(
        symmetryStartIdx,
        symmetryEndIdx + 1
      );
      result = result.filter((d) => selectedSymmetry.includes(d.symmetry));
    }

    // Fluorescence filter
    if (
      diamondData.attributes.fluorescence.length > 0 &&
      filters.fluorescence.length === 2
    ) {
      const fluorStartIdx = diamondData.attributes.fluorescence.indexOf(
        filters.fluorescence[0]
      );
      const fluorEndIdx = diamondData.attributes.fluorescence.indexOf(
        filters.fluorescence[1]
      );
      const selectedFluor = diamondData.attributes.fluorescence.slice(
        fluorStartIdx,
        fluorEndIdx + 1
      );
      result = result.filter((d) => selectedFluor.includes(d.fluorescence));
    }

    // Certification filter
    if (filters.certification.length > 0) {
      result = result.filter((d) =>
        filters.certification.includes(d.certification)
      );
    }

    // Range filters
    result = result.filter(
      (d) =>
        d.carat >= filters.caratRange[0] &&
        d.carat <= filters.caratRange[1] &&
        d.price >= filters.priceRange[0] &&
        d.price <= filters.priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "carat-asc":
        result.sort((a, b) => a.carat - b.carat);
        break;
      case "carat-desc":
        result.sort((a, b) => b.carat - a.carat);
        break;
      default:
        break;
    }

    return result;
  }, [
    diamondProducts,
    selectedType,
    selectedCategory,
    selectedSubcategory,
    selectedShape,
    searchQuery,
    filters,
    sortBy,
    availableColors,
    allClarities,
  ]);

  const activeFiltersCount = filters.certification.length;

  return (
<div className="min-h-screen bg-white">
      <div className="border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-8 py-6">
<div className="flex items-center md:flex-row flex-col md:justify-between gap-6  pb-4">
  {/* Title */}
  <h1 className="text-2xl font-light capitalize tracking-wide text-royalblue whitespace-nowrap">
    {selectedCategory} Diamonds
  </h1>

  {/* Type Toggle */}
  <div className="flex items-center justify-center">
    <div className="flex border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-white">
      {["Natural", "Lab-Grown"].map((type) => {
        const isActive = selectedType.toLowerCase() === type.toLowerCase();
        return (
          <button
            key={type}
            onClick={() => {
              setSelectedType(type);
              setSelectedCategory(
                type === "Natural" ? "natural-melee" : "lab-melee"
              );
            }}
            className={`relative px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
              isActive
                ? "bg-[#000B58] text-white shadow-inner"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            {type}
          </button>
        );
      })}
    </div>
  </div>

  {/* Category Buttons */}
  <div className="flex gap-3 flex-wrap justify-end">
    {categories.map((category) => (
      <button
        key={category.id}
        onClick={() => setSelectedCategory(category.id)}
        className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
          selectedCategory === category.id
            ? "bg-[#000B58] text-white shadow-sm"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        {selectedType} {category.name}
      </button>
    ))}
  </div>
</div>

          {/* Subcategory Tabs */}
<div className="border-b border-gray-200 my-8">
  <div className="flex flex-wrap gap-4 md:gap-6 relative">
    {subcategories.map((subcategory) => {
      const isActive = selectedSubcategory === subcategory.id;
      return (
        <button
          key={subcategory.id}
          onClick={() => setSelectedSubcategory(subcategory.id)}
          className={`relative pb-2 text-base font-medium tracking-wide transition-all duration-300 ${
            isActive
              ? "text-[#000B58]"
              : "text-gray-500 hover:text-[#000B58]/80"
          }`}
        >
          {subcategory.name}

          {/* Animated underline for active tab */}
          {isActive && (
            <motion.div
              layoutId="activeTabUnderline"
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#000B58] rounded-full"
              transition={{ type: "spring", stiffness: 350, damping: 24 }}
            />
          )}
        </button>
      );
    })}
  </div>
</div>
    
          {/* Shape Selection */}
          <div className="flex p-1 gap-3 overflow-x-auto pb-2 ">
            {availableShapes.map((shapeName) => {
              const lowerName = shapeName.toLowerCase();
              const shapeData = diamondData.shapes[lowerName]; // { img, symbol }

              return (
                <button
                  key={shapeName}
                  onClick={() => setSelectedShape(shapeName)}
                  className={`px-2 w-16 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex flex-col items-center justify-center gap-2 ${
                    selectedShape.toLowerCase() === lowerName
                      ? "bg-white border border-gray-900 text-black scale-105 shadow-md"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {/* If shapeData.img exists → show image, else fallback to symbol */}
                  {shapeData?.img ? (
                    <img
                      src={shapeData.img}
                      alt={shapeName}
                      className="w-16 h-16 object-contain"
                    />
                  ) : (
                    <span className="text-lg">{shapeData?.symbol}</span>
                  )}

                  <span className="text-[11px] tracking-wide capitalize">
                    {shapeName}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Filters Section */}
          {/* Mobile Filter Button */}
          <div className="md:hidden mb-4 mt-4">
            <button
              onClick={() => setShowMobileFilters(true)}
              className="w-full flex items-center justify-between bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm font-medium text-gray-900"
            >
              <span>Filters</span>
              <div className="flex items-center gap-2">
                {activeFiltersCount > 0 && (
                  <span className="bg-[#000B58] text-white text-xs px-2 py-0.5 rounded-full">
                    {activeFiltersCount}
                  </span>
                )}
                <SlidersHorizontal className="w-4 h-4" />
              </div>
            </button>
          </div>

          {/* Desktop Filters */}
          <div className="hidden md:block bg-gray-50 rounded-lg p-6 mb-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-medium tracking-wide text-gray-900">
                Filters
              </h3>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-wider text-gray-600 hover:text-gray-900 underline uppercase"
                >
                  Clear All ({activeFiltersCount})
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-8">
              {/* Color */}
              {availableColors.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase text-gray-700 mb-4">
                    Color
                  </h4>
                  <RangeSlider
                    min={0}
                    max={availableColors.length - 1}
                    values={filters.color}
                    onChange={(val) =>
                      setFilters((prev) => ({ ...prev, color: val }))
                    }
                    labels={availableColors}
                  />
                </div>
              )}

              {/* Clarity */}
              {allClarities.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase text-gray-700 mb-4">
                    Clarity
                  </h4>
                  <RangeSlider
                    min={0}
                    max={allClarities.length - 1}
                    values={filters.clarity}
                    onChange={(val) =>
                      setFilters((prev) => ({ ...prev, clarity: val }))
                    }
                    labels={allClarities}
                  />
                </div>
              )}

              {/* Cut */}
              {diamondData.attributes.cut.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase text-gray-700 mb-4">
                    Cut
                  </h4>
                  <RangeSlider
                    min={0}
                    max={diamondData.attributes.cut.length - 1}
                    values={filters.cut}
                    onChange={(val) =>
                      setFilters((prev) => ({ ...prev, cut: val }))
                    }
                    labels={diamondData.attributes.cut}
                  />
                </div>
              )}

              {/* Polish */}
              {diamondData.attributes.polish.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase text-gray-700 mb-4">
                    Polish
                  </h4>
                  <RangeSlider
                    min={0}
                    max={diamondData.attributes.polish.length - 1}
                    values={filters.polish}
                    onChange={(val) =>
                      setFilters((prev) => ({ ...prev, polish: val }))
                    }
                    labels={diamondData.attributes.polish}
                  />
                </div>
              )}

              {/* Symmetry */}
              {diamondData.attributes.symmetry.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase text-gray-700 mb-4">
                    Symmetry
                  </h4>
                  <RangeSlider
                    min={0}
                    max={diamondData.attributes.symmetry.length - 1}
                    values={filters.symmetry}
                    onChange={(val) =>
                      setFilters((prev) => ({ ...prev, symmetry: val }))
                    }
                    labels={diamondData.attributes.symmetry}
                  />
                </div>
              )}

              {/* Fluorescence */}
              {diamondData.attributes.fluorescence.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase text-gray-700 mb-4">
                    Fluorescence
                  </h4>
                  <RangeSlider
                    min={0}
                    max={diamondData.attributes.fluorescence.length - 1}
                    values={filters.fluorescence}
                    onChange={(val) =>
                      setFilters((prev) => ({ ...prev, fluorescence: val }))
                    }
                    labels={diamondData.attributes.fluorescence}
                  />
                </div>
              )}

              {/* Carat */}
              <div>
                <h4 className="text-xs font-semibold uppercase text-gray-700 mb-4">
                  Carat
                </h4>
                <RangeSlider
                  min={0}
                  max={10}
                  values={filters.caratRange}
                  onChange={(val) =>
                    setFilters((prev) => ({ ...prev, caratRange: val }))
                  }
                />
              </div>

              {/* Price */}
              <div>
                <h4 className="text-xs font-semibold uppercase text-gray-700 mb-4">
                  Price
                </h4>
                <RangeSlider
                  min={0}
                  max={50000}
                  values={filters.priceRange}
                  onChange={(val) =>
                    setFilters((prev) => ({ ...prev, priceRange: val }))
                  }
                  unit="$"
                />
              </div>

              {/* Certification */}
              {diamondData.attributes.certification.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase text-gray-700 mb-4">
                    Certification
                  </h4>
                  <div className="flex md:flex-row flex-col gap-2 md:gap-4">
                    {diamondData.attributes.certification.map((cert) => (
                      <label
                        key={cert}
                        className="flex items-center cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={filters.certification.includes(cert)}
                          onChange={() => toggleCertification(cert)}
                          className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                        />
                        <span className="ml-2 text-xs text-gray-700 group-hover:text-gray-900">
                          {cert}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Filter Drawer */}
          <AnimatePresence>
            {showMobileFilters && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowMobileFilters(false)}
                  className="fixed inset-0 bg-black/50 z-40 md:hidden"
                />

                {/* Drawer */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 md:hidden flex flex-col shadow-2xl"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">
                      Filters
                    </h3>
                    <button
                      onClick={() => setShowMobileFilters(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Filter Content - Scrollable */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-6">
                    {/* Color */}
                    {availableColors.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold uppercase text-gray-700 mb-4">
                          Color
                        </h4>
                        <RangeSlider
                          min={0}
                          max={availableColors.length - 1}
                          values={filters.color}
                          onChange={(val) =>
                            setFilters((prev) => ({ ...prev, color: val }))
                          }
                          labels={availableColors}
                        />
                      </div>
                    )}

                    {/* Clarity */}
                    {allClarities.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold uppercase text-gray-700 mb-4">
                          Clarity
                        </h4>
                        <RangeSlider
                          min={0}
                          max={allClarities.length - 1}
                          values={filters.clarity}
                          onChange={(val) =>
                            setFilters((prev) => ({ ...prev, clarity: val }))
                          }
                          labels={allClarities}
                        />
                      </div>
                    )}

                    {/* Cut */}
                    {diamondData.attributes.cut.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold uppercase text-gray-700 mb-4">
                          Cut
                        </h4>
                        <RangeSlider
                          min={0}
                          max={diamondData.attributes.cut.length - 1}
                          values={filters.cut}
                          onChange={(val) =>
                            setFilters((prev) => ({ ...prev, cut: val }))
                          }
                          labels={diamondData.attributes.cut}
                        />
                      </div>
                    )}

                    {/* Polish */}
                    {diamondData.attributes.polish.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold uppercase text-gray-700 mb-4">
                          Polish
                        </h4>
                        <RangeSlider
                          min={0}
                          max={diamondData.attributes.polish.length - 1}
                          values={filters.polish}
                          onChange={(val) =>
                            setFilters((prev) => ({ ...prev, polish: val }))
                          }
                          labels={diamondData.attributes.polish}
                        />
                      </div>
                    )}

                    {/* Symmetry */}
                    {diamondData.attributes.symmetry.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold uppercase text-gray-700 mb-4">
                          Symmetry
                        </h4>
                        <RangeSlider
                          min={0}
                          max={diamondData.attributes.symmetry.length - 1}
                          values={filters.symmetry}
                          onChange={(val) =>
                            setFilters((prev) => ({ ...prev, symmetry: val }))
                          }
                          labels={diamondData.attributes.symmetry}
                        />
                      </div>
                    )}

                    {/* Fluorescence */}
                    {diamondData.attributes.fluorescence.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold uppercase text-gray-700 mb-4">
                          Fluorescence
                        </h4>
                        <RangeSlider
                          min={0}
                          max={diamondData.attributes.fluorescence.length - 1}
                          values={filters.fluorescence}
                          onChange={(val) =>
                            setFilters((prev) => ({ ...prev, fluorescence: val }))
                          }
                          labels={diamondData.attributes.fluorescence}
                        />
                      </div>
                    )}

                    {/* Carat */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase text-gray-700 mb-4">
                        Carat
                      </h4>
                      <RangeSlider
                        min={0}
                        max={10}
                        values={filters.caratRange}
                        onChange={(val) =>
                          setFilters((prev) => ({ ...prev, caratRange: val }))
                        }
                      />
                    </div>

                    {/* Price */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase text-gray-700 mb-4">
                        Price
                      </h4>
                      <RangeSlider
                        min={0}
                        max={50000}
                        values={filters.priceRange}
                        onChange={(val) =>
                          setFilters((prev) => ({ ...prev, priceRange: val }))
                        }
                        unit="$"
                      />
                    </div>

                    {/* Certification */}
                    {diamondData.attributes.certification.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold uppercase text-gray-700 mb-4">
                          Certification
                        </h4>
                        <div className="flex flex-col gap-3">
                          {diamondData.attributes.certification.map((cert) => (
                            <label
                              key={cert}
                              className="flex items-center cursor-pointer group"
                            >
                              <input
                                type="checkbox"
                                checked={filters.certification.includes(cert)}
                                onChange={() => toggleCertification(cert)}
                                className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                              />
                              <span className="ml-2 text-xs text-gray-700 group-hover:text-gray-900">
                                {cert}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer - Action Buttons */}
                  <div className="border-t border-gray-200 p-4 bg-white">
                    <div className="flex gap-3">
                      <button
                        onClick={clearFilters}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Clear All
                      </button>
                      <button
                        onClick={() => setShowMobileFilters(false)}
                        className="flex-1 px-4 py-3 bg-[#000B58] text-white rounded-lg text-sm font-medium hover:bg-[#000B58]/90 transition-colors"
                      >
                        View Results ({filteredDiamonds.length})
                      </button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-[1600px] mb-32 mx-auto px-8 py-8">
        <div className="flex items-center gap-2 md:gap-0 flex-col md:flex-row md:justify-between mb-6">
          <div className="flex items-center gap-6">
            <p className="text-sm text-nowrap text-gray-600">
              {filteredDiamonds.length}{" "}
              {filteredDiamonds.length === 1 ? "diamond" : "diamonds"}
            </p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search SKU or Certificate"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 bg-white"
              />
            </div>
          </div>

          <div className="flex items-center md:justify-end justify-between w-full gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-0 bg-white text-gray-700 cursor-pointer"
            >
              <option value="carat-asc">Carat: Low to High</option>
              <option value="carat-desc">Carat: High to Low</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>

            <div className="flex border border-gray-300 rounded overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${
                  viewMode === "grid"
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${
                  viewMode === "list"
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Grid/List */}
        <AnimatePresence mode="wait">
          {filteredDiamonds.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-500 mb-4">No diamonds found</p>
              <button
                onClick={clearFilters}
                className="text-sm text-gray-900 underline"
              >
                Clear filters
              </button>
            </motion.div>
          ) : viewMode === "list" ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              {filteredDiamonds.map((diamond, index) => (
                <DiamondListItem
                  key={diamond.id}
                  diamond={diamond}
                  isFavorite={favorites.includes(diamond.id)}
                  onToggleFavorite={toggleFavorite}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filteredDiamonds.map((diamond, index) => (
                <DiamondCard
                  key={diamond.id}
                  diamond={diamond}
                  isFavorite={favorites.includes(diamond.id)}
                  onToggleFavorite={toggleFavorite}
                  index={index}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DiamondPage;
