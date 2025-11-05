export const prompt=`plant disease in a structured JSON format.

Instructions:
Based on the disease name, generate detailed and accurate information covering all the sections listed below.
The information should be written in clear, professional language suitable for farmers, researchers, and agricultural experts.
Use small paragraphs for descriptive fields like about and arrays with little content for for preventive measures and treatments fields.
Include scientific accuracy and practical recommendations.
Don't use * or any other specail symbol for text formatting.
Keep the JSON structure valid and properly formatted.

#Examples:
{
  "diseaseName": "Tomato Blight",
  "scientificName": "Phytophthora infestans (Late Blight)",
  "affectedPlants": ["Tomato (Solanum lycopersicum)", "Potato (Solanum tuberosum)", "Eggplant (Solanum melongena)", "Pepper (Capsicum annuum)", "Petunia (Petunia x hybrida)"],
  "cause": "Tomato Blight, commonly referred to as Late Blight, is caused by the oomycete Phytophthora infestans. This pathogen is not a true fungus but a water mold, belonging to a group of fungus-like microorganisms. P. infestans thrives in cool, wet, and humid environmental conditions, which are ideal for its rapid reproduction, spore dissemination, and subsequent infection of host plants.",
  "about": "Tomato Blight, specifically Late Blight, is one of the most destructive diseases of tomato and potato crops worldwide. It gained historical notoriety for causing the Irish Potato Famine in the 19th century and continues to pose a significant threat to global food security. It is a highly aggressive and rapidly spreading disease that can devastate entire fields within a matter of days under favorable conditions. The pathogen produces highly mobile spores (sporangia) that are readily dispersed by wind, splashing rain, and irrigation water. These spores germinate on wet plant surfaces, penetrate the host tissue, and rapidly colonize the plant, leading to significant yield losses due to premature defoliation, stem lesions, and direct infection and rot of fruits, rendering them unmarketable. Effective management requires a thorough understanding of the disease cycle, environmental triggers, and timely intervention.",
  "symptoms": "Initial symptoms of Tomato Late Blight typically manifest as small, irregular, water-soaked spots on older leaves, often beginning at the leaf tips or margins. These lesions rapidly expand into large, dark brown to black areas with irregular, undefined margins. During periods of high humidity or dew, a distinctive fuzzy, whitish growth, consisting of sporangiophores and sporangia, can be observed on the underside of infected leaves, particularly around the lesion edges. As the disease progresses, similar dark lesions develop on stems and petioles, which can girdle the stem and lead to wilting and collapse of the entire plant. Infected fruits develop large, firm, brownish-green to dark brown, greasy-looking blotches that can quickly encompass the entire fruit, resulting in a leathery texture and subsequent soft rot, often exacerbated by secondary bacterial or fungal infections.",
  "spreadSpeed": "Tomato Late Blight spreads with exceptional rapidity under optimal environmental conditions. These conditions include moderate temperatures ranging from 10-25°C (50-77°F) coupled with prolonged periods of high humidity (90% or more) or leaf wetness (typically 6-8 hours or more). The pathogen produces vast quantities of wind-dispersed spores (sporangia) that can travel long distances. Rain splash and irrigation water further aid in localized dispersal. Under such favorable conditions, the disease can spread from a few initial infection points to encompass an entire field within just a few days, leading to widespread epidemics and complete crop destruction if not controlled promptly and aggressively.",
  "prevention": [
    "Plant resistant or tolerant tomato varieties when available and suitable for the growing region.",
    "Implement a strict crop rotation schedule, avoiding planting tomatoes or potatoes in the same field for at least 3-4 years.",
    "Ensure adequate plant spacing to promote air circulation within the canopy and reduce periods of leaf wetness.",
    "Avoid overhead irrigation, especially in the evening; utilize drip irrigation to minimize leaf wetness.",
    "Sanitize all tools, equipment, and stakes to prevent the mechanical transfer of pathogen spores.",
    "Eliminate volunteer tomato and potato plants, as well as nightshade weeds, which can act as alternative hosts and reservoirs for the pathogen.",
    "Regularly scout fields for early symptoms of the disease to enable timely intervention.",
    "Bury or remove and destroy all infected plant debris immediately after harvest to reduce overwintering inoculum."
  ],
  "treatment": [
    "Apply fungicides preventatively, especially during periods conducive to disease development, following a recommended spray schedule.",
    "Promptly remove and destroy any infected plant parts, including entire plants if infection is severe, to reduce inoculum pressure.",
    "Improve air circulation within the crop canopy by pruning lower leaves and excessive foliage, without causing undue stress to the plant.",
    "Adjust irrigation practices to reduce the duration of leaf wetness, as this is critical for spore germination and infection.",
    "Implement an Integrated Pest Management (IPM) approach combining cultural, biological, and chemical control methods for sustainable management."
  ],
  "medicines": [
    {"name": "Mancozeb (e.g., Dithane M-45)", "dosage": "Typically applied at 1.5-3 lbs per acre, following label instructions for application frequency, usually every 5-10 days depending on disease pressure and weather conditions."},
    {"name": "Chlorothalonil (e.g., Daconil, Bravo)", "dosage": "Recommended rates vary by product formulation, generally 1.25-2 pints or 1.5-2.5 lbs per acre, applied every 7-10 days, ensuring thorough coverage. Adhere to pre-harvest intervals."},
    {"name": "Copper-based fungicides (e.g., Copper hydroxide, Copper sulfate)", "dosage": "Dosage varies by specific product and copper concentration, typically 2-4 lbs of metallic copper equivalent per acre, applied protectively every 7-10 days. Always consult the product label."},
    {"name": "Mefenoxam (e.g., Ridomil Gold SL)", "dosage": "Used for its systemic action against oomycetes; applied as a foliar spray or soil drench. Dosage rates are highly specific to the product and application method. Often used in resistance management programs. Follow manufacturer guidelines precisely."},
    {"name": "Fluopicolide + Propamocarb (e.g., Presidio Opti)", "dosage": "Combination products offer broader spectrum and resistance management. Dosage is typically specified per acre based on formulation, applied preventatively every 7-14 days. Refer to the specific product label for detailed instructions."}
  ]
}

Keep the JSON structure valid and properly formatted.
`